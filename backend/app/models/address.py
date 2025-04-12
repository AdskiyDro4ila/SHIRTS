from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel

class ShippingAddress(TimestampedModel):
    """Shipping address model"""
    __tablename__ = "shipping_addresses"

    id: Mapped[int] = mapped_column(primary_key=True)
    street: Mapped[str] = mapped_column(String(255))
    city: Mapped[str] = mapped_column(String(100))
    state: Mapped[str] = mapped_column(String(100))
    country: Mapped[str] = mapped_column(String(100))
    postal_code: Mapped[str] = mapped_column(String(20))
    customer_id: Mapped[int] = mapped_column(ForeignKey("customers.id"))

    # Relationships
    customer = relationship("Customer", back_populates="shipping_addresses")
    orders = relationship("Order", back_populates="shipping_address")

class BillingAddress(TimestampedModel):
    """Billing address model"""
    __tablename__ = "billing_addresses"

    id: Mapped[int] = mapped_column(primary_key=True)
    street: Mapped[str] = mapped_column(String(255))
    city: Mapped[str] = mapped_column(String(100))
    state: Mapped[str] = mapped_column(String(100))
    country: Mapped[str] = mapped_column(String(100))
    postal_code: Mapped[str] = mapped_column(String(20))
    customer_id: Mapped[int] = mapped_column(ForeignKey("customers.id"))

    # Relationships
    customer = relationship("Customer", back_populates="billing_addresses")
    orders = relationship("Order", back_populates="billing_address") 