import os
from typing import Annotated, AsyncIterator

from fastapi import Depends
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

SQLALCHEMY_DATABASE_URL = os.getenv(
    "SQLALCHEMY_DATABASE_URL",
    "postgresql+asyncpg://postgres:postgres@localhost:9998/rinha",
)
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

async_engine = create_async_engine(
    SQLALCHEMY_DATABASE_URL,
    # pool_pre_ping=True,
    pool_size=int(os.getenv('POOL_SIZE', 30)),
    max_overflow=0,
    isolation_level="READ COMMITTED",
    # isolation_level='AUTOCOMMIT',
)
AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    autoflush=False,
    future=True,
)


async def get_session() -> AsyncIterator[async_sessionmaker]:
    yield AsyncSessionLocal


AsyncSession = Annotated[async_sessionmaker, Depends(get_session)]

Base = declarative_base()
