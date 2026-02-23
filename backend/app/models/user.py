from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from enum import Enum
from app.db import Base

class UserRole(str, Enum):
    ADMIN = "admin"
    ENTREPRENEUR = "entrepreneur"
    INVESTOR = "investor"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    # map Python attributes to DB column names (use same names as your existing DB to avoid migration)
    firstName = Column("firstName", String(100), nullable=False)
    lastName = Column("lastName", String(100), nullable=False)
    email = Column("email", String(255), unique=True, index=True, nullable=False)
    username = Column("username", String(100), unique=True, index=True, nullable=False)
    hashed_password = Column("hashed_password", String(255), nullable=False)
    role = Column("role", String(50), default=UserRole.INVESTOR.value)
    is_active = Column("is_active", Boolean, default=True)
    created_at = Column("created_at", DateTime(timezone=True), server_default=func.now())
    updated_at = Column("updated_at", DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

class UserCreate(BaseModel):
    firstName: str = Field(..., min_length=1, max_length=100)
    lastName: str = Field(..., min_length=1, max_length=100)
    username: str = Field(..., min_length=3, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=72)
    role: str = Field(default=UserRole.INVESTOR.value)


class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserPublic(BaseModel):
    id: int
    firstName: str
    lastName: str
    email: str
    role: str
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

class UserResponse(BaseModel):
    message: str
    user: UserPublic
