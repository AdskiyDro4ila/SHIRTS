from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException

app = FastAPI(
    title="T-Shirt E-Commerce API",
    description="API for the T-Shirt E-Commerce platform with design voting and social features",
    version="1.0.0"
)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Error handlers
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(
        status_code=422,
        content={"detail": exc.errors()}
    )

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail}
    )

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Import and include routers
# from app.api import products, orders, users, designs
# app.include_router(products.router, prefix="/api/v1/products", tags=["products"])
# app.include_router(orders.router, prefix="/api/v1/orders", tags=["orders"])
# app.include_router(users.router, prefix="/api/v1/users", tags=["users"])
# app.include_router(designs.router, prefix="/api/v1/designs", tags=["designs"]) 