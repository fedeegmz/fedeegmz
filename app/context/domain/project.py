from pydantic import BaseModel

from app.context.domain.status import Status


class Project(BaseModel):
    title: str
    description: str
    status: Status
    url: str
    tech_stack: list[str]
