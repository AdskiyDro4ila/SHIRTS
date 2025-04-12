from datetime import datetime
from sqlalchemy import DateTime
from sqlalchemy.orm import mapped_column, Mapped
from app.core.database import Base

class TimestampedModel(Base):
    """Base model with timestamp fields"""
    __abstract__ = True

    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    ) 