from typing import override

from pymongo.asynchronous.client_session import AsyncClientSession

from app.context.domain.context import Context
from app.context.domain.context_repository import ContextRepository
from app.core.settings import settings


class MongoDbContextRepository(ContextRepository):
    def __init__(self, db_session: AsyncClientSession) -> None:
        self.db_session = db_session
        self.collection = db_session.client[settings.db_name].context

    @override
    async def get_context(self) -> Context | None:
        context = await self.collection.find_one({}, session=self.db_session)
        if context is not None:
            return Context(**context)
        return None
