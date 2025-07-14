from pydantic import BaseModel


class Contact(BaseModel):
    title: str
    icon: str
    href: str
    target: str | None = None
