from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel
from app.models.design import design_votes

class User(TimestampedModel):
    """User model for storing user information"""
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    username: Mapped[str] = mapped_column(String(100), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    is_superuser: Mapped[bool] = mapped_column(Boolean, default=False)

    # Relationships
    voted_designs = relationship("Design", secondary=design_votes, back_populates="votes") 