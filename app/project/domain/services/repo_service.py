from abc import ABC, abstractmethod

from app.project.domain.entities.repository import Repository


class RepoService(ABC):
    @abstractmethod
    async def find_one_by_full_name(self, full_name: str) -> Repository | None:
        pass
