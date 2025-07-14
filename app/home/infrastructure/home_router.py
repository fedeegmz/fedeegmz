from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse

from app.home.infrastructure.di import ContextRepositoryDi
from app.shared.infrastructure.di.templates import TemplatesDi

router = APIRouter()


@router.get("/", response_class=HTMLResponse)
async def root(
    request: Request,
    templates: TemplatesDi,
    context_repository: ContextRepositoryDi,
):
    context = await context_repository.get_context()
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context=context.model_dump() if context else {},
    )
