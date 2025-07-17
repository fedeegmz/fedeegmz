from abc import ABC, abstractmethod

from app.context.domain.context import Context


class ContextRepository(ABC):
    @abstractmethod
    async def get_context(self) -> Context | None:
        pass
