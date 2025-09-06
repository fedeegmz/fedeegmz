from abc import ABC, abstractmethod

from app.project.domain.entities.project import BaseProject


class ProjectRepository(ABC):
    @abstractmethod
    async def find_all(self) -> list[BaseProject]:
        pass
