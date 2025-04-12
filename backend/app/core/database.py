from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from sqlalchemy.pool import NullPool
import os
from dotenv import load_dotenv

load_dotenv()

# Database URL configuration
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "sqlite+aiosqlite:///./tshirt_ecommerce.db"
)

# Create async engine
engine = create_async_engine(
    DATABASE_URL,
    echo=False,
    poolclass=NullPool,
)

# Create async session factory
AsyncSessionLocal = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

# Base class for all models
class Base(DeclarativeBase):
    pass

# Dependency to get database session
async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close() 