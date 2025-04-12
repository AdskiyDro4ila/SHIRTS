from setuptools import setup, find_packages

setup(
    name="tshirt-ecommerce",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "fastapi==0.115.12",
        "uvicorn[standard]==0.34.0",
        "sqlalchemy==2.0.40",
        "pydantic[email]==2.11.3",
        "python-jose[cryptography]==3.4.0",
        "passlib[bcrypt]==1.7.4",
        "python-multipart==0.0.20",
        "python-dotenv==1.1.0",
        "httpx==0.28.1",
        "cloudinary==1.44.0",
        "stripe==8.4.0",
        "printful==1.0.0",
        "pytest==8.0.2",
        "pytest-asyncio==0.23.5",
        "alembic==1.13.1",
        "aiosqlite==0.19.0",
        "redis==5.0.1",
    ],
) 