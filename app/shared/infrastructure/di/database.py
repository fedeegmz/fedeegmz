from typing import AsyncGenerator, Annotated, Any

from fastapi import Depends
from motor.motor_asyncio import AsyncIOMotorClientSession
from pymongo.asynchronous.client_session import AsyncClientSession

from app.shared.infrastructure.adapters.mongodb_client import MongoDBClient

db_client = MongoDBClient()


async def _get_db_session() -> AsyncGenerator[AsyncIOMotorClientSession, Any]:
    async with db_client.get_session() as session:
        yield session
        session.end_session()


DbSessionDi = Annotated[AsyncClientSession, Depends(_get_db_session)]
