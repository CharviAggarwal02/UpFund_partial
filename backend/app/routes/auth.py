from fastapi import APIRouter, HTTPException, Depends, status
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import jwt
from passlib.context import CryptContext

from app.db import get_db
from app.models.user import User, UserCreate, UserLogin, UserResponse
from app.settings import settings
from app.logger import logger
from app.utils import hash_password, verify_password

router = APIRouter()
_pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")

def _create_access_token(user_id: int, role: str, expires_delta: timedelta = None) -> str:
    if expires_delta is None:
        expires_delta = timedelta(hours=settings.JWT_EXPIRATION_HOURS)
    expire = datetime.utcnow() + expires_delta
    payload = {"sub": str(user_id), "role": role, "exp": expire}
    token = jwt.encode(payload, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)
    return token

@router.post("/signup", status_code=status.HTTP_201_CREATED, response_model=UserResponse)
async def signup(payload: UserCreate, db: Session = Depends(get_db)):
    try:
        logger.info(f"Signup attempt for email: {payload.email}")
        email = payload.email.lower().strip()
        existing = db.query(User).filter(User.email == email).first()
        if existing:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")

        hashed = hash_password(payload.password)
        new_user = User(
            firstName=payload.firstName.strip(),
            lastName=payload.lastName.strip(),
            email=email,
            username=email,
            hashed_password=hashed,
            role=payload.role,
            is_active=True,
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        user_public = {
            "id": new_user.id,
            "firstName": new_user.firstName,
            "lastName": new_user.lastName,
            "email": new_user.email,
            "role": new_user.role,
            "is_active": new_user.is_active,
            "created_at": new_user.created_at,
        }
        return {"message": "User created successfully", "user": user_public}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Signup error: {e}")
        db.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create user")

@router.post("/login")
async def login(payload: UserLogin, db: Session = Depends(get_db)):
    try:
        logger.info(f"Login attempt for email: {payload.email}")
        email = payload.email.lower().strip()
        user = db.query(User).filter(User.email == email).first()
        if not user or not verify_password(payload.password, user.hashed_password):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")
        token = _create_access_token(user.id, user.role)
        user_public = {
            "id": user.id,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "role": user.role,
            "is_active": user.is_active,
            "created_at": user.created_at,
        }
        return {"accessToken": token, "user": user_public}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Login error: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Login failed")
