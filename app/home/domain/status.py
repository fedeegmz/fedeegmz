from pydantic import BaseModel


class Status(BaseModel):
    title: str
    class_name: str
