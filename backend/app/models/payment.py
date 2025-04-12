from decimal import Decimal
from typing import Optional
from sqlalchemy import String, Numeric, Enum, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel
import enum

class PaymentStatus(str, enum.Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"
    REFUNDED = "refunded"

class PaymentMethod(str, enum.Enum):
    CREDIT_CARD = "credit_card"
    DEBIT_CARD = "debit_card"
    PAYPAL = "paypal"
    STRIPE = "stripe"

class Payment(TimestampedModel):
    """Payment model for storing payment information"""
    __tablename__ = "payments"

    id: Mapped[int] = mapped_column(primary_key=True)
    order_id: Mapped[int] = mapped_column(ForeignKey("orders.id"))
    amount: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    currency: Mapped[str] = mapped_column(String(3), default="USD")
    status: Mapped[PaymentStatus] = mapped_column(
        Enum(PaymentStatus),
        default=PaymentStatus.PENDING
    )
    payment_method: Mapped[PaymentMethod] = mapped_column(Enum(PaymentMethod))
    transaction_id: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    payment_provider: Mapped[str] = mapped_column(String(50))
    
    # Relationships
    order = relationship("Order", back_populates="payment") 