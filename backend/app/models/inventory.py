from sqlalchemy import Integer, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base import TimestampedModel

class Inventory(TimestampedModel):
    """Inventory model for tracking product stock"""
    __tablename__ = "inventory"

    id: Mapped[int] = mapped_column(primary_key=True)
    product_id: Mapped[int] = mapped_column(ForeignKey("products.id"))
    size: Mapped[str] = mapped_column(String(10))
    color: Mapped[str] = mapped_column(String(50))
    quantity: Mapped[int] = mapped_column(Integer, default=0)
    reorder_point: Mapped[int] = mapped_column(Integer, default=10)
    
    # Relationships
    product = relationship("Product", back_populates="inventory_items") 