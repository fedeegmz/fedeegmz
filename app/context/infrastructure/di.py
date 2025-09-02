from typing import Annotated

from fastapi import Depends

from app.context.domain.context_repository import ContextRepository
from app.context.infrastructure.gcp_context_repository import GCPContextRepository
from app.shared.infrastructure.di.storage_bucket import GCPStorageBucketDi


def __get_context_repository(bucket: GCPStorageBucketDi) -> ContextRepository:
    return GCPContextRepository(bucket=bucket)


ContextRepositoryDi = Annotated[ContextRepository, Depends(__get_context_repository)]
