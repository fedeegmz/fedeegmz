from typing import override

from app.context.domain.context import Context
from app.context.domain.context_repository import ContextRepository
from app.core.settings import settings
from app.shared.infrastructure.adapters.gcp_storage_bucket import GCPStorageBucket


class GCPContextRepository(ContextRepository):
    def __init__(self, bucket: GCPStorageBucket) -> None:
        self.bucket = bucket

    @override
    async def get_context(self) -> Context | None:
        data = self.bucket.load_data(settings.bucket_data_path + "/context.json")
        if data is not None:
            return Context(**data)
        return None
