from typing import Optional
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel

class Customer(TimestampedModel):
    """Customer model for storing customer information"""
    __tablename__ = "customers"

    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    first_name: Mapped[str] = mapped_column(String(100))
    last_name: Mapped[str] = mapped_column(String(100))
    phone: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    shipping_address_id: Mapped[Optional[int]] = mapped_column(nullable=True)  # Foreign key to be added later
    billing_address_id: Mapped[Optional[int]] = mapped_column(nullable=True)  # Foreign key to be added later

    # Relationships
    shipping_addresses = relationship("ShippingAddress", back_populates="customer")
    billing_addresses = relationship("BillingAddress", back_populates="customer")
    orders = relationship("Order", back_populates="customer")
    designs = relationship("Design", back_populates="creator") 