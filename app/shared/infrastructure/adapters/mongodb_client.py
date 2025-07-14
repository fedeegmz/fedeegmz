from contextlib import asynccontextmanager
from typing import Any, AsyncGenerator

from motor.motor_asyncio import (
    AsyncIOMotorClient,
    AsyncIOMotorDatabase,
    AsyncIOMotorClientSession,
)
from pymongo.errors import ConnectionFailure

from app.core.settings import settings
from app.shared.domain.exceptions import (
    DatabaseConnectionException,
    UninitializedException,
)


class MongoDBClient:
    def __init__(self) -> None:
        self._client: AsyncIOMotorClient | None = None
        self._db: AsyncIOMotorDatabase | None = None

    async def connect(self) -> None:
        try:
            self._client = AsyncIOMotorClient(settings.mongodb_uri)
            self._db = self._client[settings.db_name]
        except ConnectionFailure:
            raise DatabaseConnectionException()

    async def close(self) -> None:
        if self._client is not None:
            self._client.close()

    @asynccontextmanager
    async def get_session(self) -> AsyncGenerator[AsyncIOMotorClientSession, Any]:
        if not self._client:
            raise UninitializedException("MongoDB client is not initialized")
        session = await self._client.start_session()
        try:
            yield session
        finally:
            await session.end_session()
