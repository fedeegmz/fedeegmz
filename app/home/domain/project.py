from pydantic import BaseModel

from app.home.domain.status import Status


class Project(BaseModel):
    title: str
    description: str
    status: Status
    href: str
    tech_stack: list[str]
