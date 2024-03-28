import os
from typing import Annotated, AsyncIterator

from fastapi import Depends
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

SQLALCHEMY_DATABASE_URL = os.getenv(
    "SQLALCHEMY_DATABASE_URL",
    "sqlite+aiosqlite:///./db.sqlite",
)

async_engine = create_async_engine(
    SQLALCHEMY_DATABASE_URL,
    isolation_level='AUTOCOMMIT',
)
AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    autoflush=False,
    future=True,
)


async def get_session() -> AsyncIterator[async_sessionmaker]:
    yield AsyncSessionLocal


async def init_db():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


AsyncSession = Annotated[async_sessionmaker, Depends(get_session)]

Base = declarative_base()
