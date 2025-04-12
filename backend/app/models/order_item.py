from decimal import Decimal
from sqlalchemy import Integer, ForeignKey, Numeric
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel

class OrderItem(TimestampedModel):
    """Order item model for storing order line items"""
    __tablename__ = "order_items"

    id: Mapped[int] = mapped_column(primary_key=True)
    order_id: Mapped[int] = mapped_column(ForeignKey("orders.id"))
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id"))
    quantity: Mapped[int] = mapped_column(Integer)
    unit_price: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    total_price: Mapped[Decimal] = mapped_column(Numeric(10, 2))

    # Relationships
    order = relationship("Order", back_populates="order_items")
    product = relationship("Product", back_populates="order_items") 