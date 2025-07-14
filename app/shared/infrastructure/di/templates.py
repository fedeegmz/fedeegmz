from typing import Annotated

from fastapi import Depends
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates")


def __get_templates() -> Jinja2Templates:
    return templates


TemplatesDi = Annotated[Jinja2Templates, Depends(__get_templates)]
