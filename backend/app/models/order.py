from decimal import Decimal
from typing import Optional
from sqlalchemy import String, Numeric, Enum, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel
import enum

class OrderStatus(str, enum.Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    SHIPPED = "shipped"
    DELIVERED = "delivered"
    CANCELLED = "cancelled"
    REFUNDED = "refunded"

class Order(TimestampedModel):
    """Order model for storing order information"""
    __tablename__ = "orders"

    id: Mapped[int] = mapped_column(primary_key=True)
    customer_id: Mapped[int] = mapped_column(ForeignKey("customers.id"))
    order_number: Mapped[str] = mapped_column(String(50), unique=True, index=True)
    status: Mapped[OrderStatus] = mapped_column(
        Enum(OrderStatus),
        default=OrderStatus.PENDING
    )
    total_amount: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    shipping_address_id: Mapped[int] = mapped_column(ForeignKey("shipping_addresses.id"))
    billing_address_id: Mapped[int] = mapped_column(ForeignKey("billing_addresses.id"))
    payment_id: Mapped[Optional[int]] = mapped_column(ForeignKey("payments.id"), nullable=True)
    tracking_number: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    
    # Relationships
    customer = relationship("Customer", back_populates="orders")
    order_items = relationship("OrderItem", back_populates="order")
    shipping_address = relationship("ShippingAddress", back_populates="orders")
    billing_address = relationship("BillingAddress", back_populates="orders")
    payment = relationship("Payment", back_populates="order") 