from pydantic import BaseModel

from app.context.domain.value_objects.status_variant import StatusVariant


class Status(BaseModel):
    title: str
    variant: StatusVariant
