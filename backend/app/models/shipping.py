from typing import Optional
from sqlalchemy import String, Enum, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel
import enum

class ShippingStatus(str, enum.Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    SHIPPED = "shipped"
    DELIVERED = "delivered"
    FAILED = "failed"
    RETURNED = "returned"

class ShippingMethod(str, enum.Enum):
    STANDARD = "standard"
    EXPRESS = "express"
    NEXT_DAY = "next_day"
    INTERNATIONAL = "international"

class Shipping(TimestampedModel):
    """Shipping model for storing shipping information"""
    __tablename__ = "shipping"

    id: Mapped[int] = mapped_column(primary_key=True)
    order_id: Mapped[int] = mapped_column(ForeignKey("orders.id"))
    status: Mapped[ShippingStatus] = mapped_column(
        Enum(ShippingStatus),
        default=ShippingStatus.PENDING
    )
    method: Mapped[ShippingMethod] = mapped_column(Enum(ShippingMethod))
    tracking_number: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    carrier: Mapped[str] = mapped_column(String(50))
    estimated_delivery_date: Mapped[Optional[str]] = mapped_column(String(10), nullable=True)
    actual_delivery_date: Mapped[Optional[str]] = mapped_column(String(10), nullable=True)
    
    # Relationships
    order = relationship("Order", back_populates="shipping") 