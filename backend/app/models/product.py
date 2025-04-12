from decimal import Decimal
from typing import Optional
from sqlalchemy import String, Numeric, Text, Enum, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel
import enum

class ProductStatus(str, enum.Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    INACTIVE = "inactive"
    ARCHIVED = "archived"

class Product(TimestampedModel):
    """Product model for t-shirt products"""
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    base_price: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    status: Mapped[ProductStatus] = mapped_column(
        Enum(ProductStatus),
        default=ProductStatus.DRAFT
    )
    sku: Mapped[str] = mapped_column(String(50), unique=True)
    stock_quantity: Mapped[int] = mapped_column(default=0)
    design_id: Mapped[Optional[int]] = mapped_column(ForeignKey("designs.id"), nullable=True)

    # Relationships
    design = relationship("Design", back_populates="products")
    inventory_items = relationship("Inventory", back_populates="product")
    order_items = relationship("OrderItem", back_populates="product") 