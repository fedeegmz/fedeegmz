from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

from app.context.infrastructure.di import ContextRepositoryDi
from app.core.settings import settings
from app.project.infrastructure.di import FindAllProjectsUseCaseDi
from app.shared.infrastructure.di.templates import TemplatesDi
from app.shared.infrastructure.exception_handler import exception_handler

__is_development = settings.is_development()

app = FastAPI(
    version="0.1.0",
    openapi_url="/openapi.json" if __is_development else None,
    docs_url="/docs" if __is_development else None,
    redoc_url="/redoc" if __is_development else None,
)
exception_handler(app)


@app.get("/", response_class=HTMLResponse)
async def root(
    request: Request,
    templates: TemplatesDi,
    context_repository: ContextRepositoryDi,
    find_all_projects_use_case: FindAllProjectsUseCaseDi,
):
    personal_data = await context_repository.get_context()
    projects = await find_all_projects_use_case.find_all()
    context = {}
    if personal_data is not None:
        context = context | personal_data.model_dump()
    if projects is not None:
        context = context | {"projects": [p.model_dump() for p in projects]}

    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context=context,
    )
