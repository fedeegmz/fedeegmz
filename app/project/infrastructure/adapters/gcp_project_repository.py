from typing import override

from app.core.settings import settings
from app.project.domain.entities.project import BaseProject
from app.project.domain.repositories.project_repository import ProjectRepository
from app.shared.infrastructure.adapters.gcp_storage_bucket import GCPStorageBucket


class GCPProjectRepository(ProjectRepository):
    def __init__(self, bucket: GCPStorageBucket) -> None:
        self.bucket = bucket

    @override
    async def find_all(self) -> list[BaseProject]:
        data = self.bucket.load_data(
            settings.bucket_data_path + "/projects/overview.json"
        )
        if data is not None:
            return [BaseProject(**item) for item in data]
        return []
