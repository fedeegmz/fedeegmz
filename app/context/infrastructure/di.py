from typing import Annotated

from fastapi import Depends

from app.context.domain.context_repository import ContextRepository
from app.context.infrastructure.mongodb_context_repository import (
    MongoDbContextRepository,
)
from app.shared.infrastructure.di.database import DbSessionDi


def __get_context_repository(db_session: DbSessionDi) -> ContextRepository:
    return MongoDbContextRepository(db_session=db_session)


ContextRepositoryDi = Annotated[ContextRepository, Depends(__get_context_repository)]
