from pydantic_settings import BaseSettings
from typing import Optional
from functools import lru_cache

class Settings(BaseSettings):
    # Database
    DATABASE_URL: str

    # JWT
    JWT_SECRET: str
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # Stripe
    STRIPE_SECRET_KEY: str
    STRIPE_WEBHOOK_SECRET: Optional[str] = None

    # Cloudinary
    CLOUDINARY_CLOUD_NAME: str
    CLOUDINARY_API_KEY: str
    CLOUDINARY_API_SECRET: str

    # Printful
    PRINTFUL_API_KEY: str

    # Redis
    REDIS_URL: Optional[str] = "redis://localhost:6379"

    # CORS
    CORS_ORIGINS: list[str] = ["http://localhost:3000"]

    class Config:
        env_file = ".env"
        case_sensitive = True

@lru_cache()
def get_settings() -> Settings:
    return Settings()

settings = get_settings() 