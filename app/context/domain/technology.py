from pydantic import BaseModel


class Technology(BaseModel):
    title: str
    tags: list[str]
