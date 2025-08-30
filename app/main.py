from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

from app.context.infrastructure.di import ContextRepositoryDi
from app.shared.infrastructure.di.templates import TemplatesDi
from app.shared.infrastructure.exception_handler import exception_handler

app = FastAPI()
exception_handler(app)


@app.get("/", response_class=HTMLResponse)
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
