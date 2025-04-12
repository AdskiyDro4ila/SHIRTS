from typing import Optional
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Table, Text
from sqlalchemy.orm import relationship, Mapped, mapped_column
from sqlalchemy.sql import func
from app.core.database import Base
from app.models.base import TimestampedModel

# Association table for design votes
design_votes = Table(
    'design_votes',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('users.id')),
    Column('design_id', Integer, ForeignKey('designs.id')),
    Column('created_at', DateTime(timezone=True), server_default=func.now())
)

class Design(TimestampedModel):
    """Design model for storing t-shirt design information"""
    __tablename__ = "designs"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    image_url: Mapped[str] = mapped_column(String(255))
    thumbnail_url: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    price: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    votes_count: Mapped[int] = mapped_column(Integer, default=0)
    created_at: Mapped[Optional[DateTime(timezone=True)]] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[Optional[DateTime(timezone=True)]] = mapped_column(DateTime(timezone=True), onupdate=func.now())
    creator_id: Mapped[Optional[int]] = mapped_column(ForeignKey("customers.id"), nullable=True)
    
    # Relationships
    votes = relationship("User", secondary=design_votes, back_populates="voted_designs")
    products = relationship("Product", back_populates="design")
    creator = relationship("Customer", back_populates="designs")

    def __repr__(self):
        return f"<Design {self.name}>" 