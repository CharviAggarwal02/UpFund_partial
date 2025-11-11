import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://upfund_user:admin@localhost:5432/upfund_db")
    JWT_SECRET: str = os.getenv("JWT_SECRET", "0n4mMeM0WUlF6Zvasd_bU5KTbaIfv5O5rrrHzzUugVo")
    JWT_ALGORITHM: str = os.getenv("JWT_ALGORITHM", "HS256")
    JWT_EXPIRATION_HOURS: int = int(os.getenv("JWT_EXPIRATION_HOURS", "24"))
    DEBUG: bool = os.getenv("DEBUG", "False") == "True"
    APP_NAME: str = os.getenv("APP_NAME", "UpFund API")
    APP_VERSION: str = os.getenv("APP_VERSION", "1.0.0")

settings = Settings()

