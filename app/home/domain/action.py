from pydantic import BaseModel


class Action(BaseModel):
    title: str
    class_name: str
    href: str
    target: str | None = None
