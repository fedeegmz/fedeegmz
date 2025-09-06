from pydantic import BaseModel

from app.project.domain.value_objects.status import Status


class BaseProject(BaseModel):
    title: str
    description: str
    repo_name: str
    status: Status


class Project(BaseProject):
    url: str
    tech_stack: list[str]
