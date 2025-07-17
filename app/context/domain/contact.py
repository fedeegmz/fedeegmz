from pydantic import BaseModel


class Contact(BaseModel):
    title: str
    icon: str
    url: str
    is_external_app: bool = False
