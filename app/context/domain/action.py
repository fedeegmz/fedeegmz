from pydantic import BaseModel

from app.context.domain.value_objects.action_variant import ActionVariant


class Action(BaseModel):
    title: str
    variant: ActionVariant
    url: str
    is_external_app: bool = False
