from pydantic import BaseModel

from app.home.domain.action import Action
from app.home.domain.contact import Contact
from app.home.domain.project import Project
from app.home.domain.technology import Technology


class Context(BaseModel):
    full_name: str
    nickname: str
    role: str
    overview: str
    description: list[str]
    actions: list[Action]
    tech_stack: list[Technology]
    projects: list[Project]
    contact: list[Contact]
    footer: str
