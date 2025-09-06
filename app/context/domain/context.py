from pydantic import BaseModel

from app.context.domain.action import Action
from app.context.domain.contact import Contact
from app.context.domain.technology import Technology


class Context(BaseModel):
    full_name: str
    nickname: str
    role: str
    overview: str
    description: list[str]
    actions: list[Action]
    tech_stack: list[Technology]
    contact: list[Contact]
    footer: str
