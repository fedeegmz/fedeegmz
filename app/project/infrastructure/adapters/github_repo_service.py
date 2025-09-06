from typing import override

from httpx import AsyncClient

from app.project.domain.entities.repository import Repository
from app.project.domain.services.repo_service import RepoService


class GithubRepoService(RepoService):
    def __init__(self) -> None:
        self._client = AsyncClient(
            base_url="https://api.github.com/repos/",
            headers={"Accept": "application/vnd.github.v3+json"},
        )

    @override
    async def find_one_by_full_name(self, full_name: str) -> Repository | None:
        response = await self._client.get(f"/{full_name}")
        if response.status_code != 200:
            return None
        result = response.json()
        return Repository(**result)
