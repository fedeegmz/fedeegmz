from pydantic import BaseModel

from app.project.domain.value_objects.status import Status


class ProjectDto(BaseModel):
    title: str
    description: str
    status: Status
    repo_name: str
