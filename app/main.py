from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

from app.context.infrastructure.di import ContextRepositoryDi
from app.shared.infrastructure.di.database import db_client
from app.shared.infrastructure.di.templates import TemplatesDi
from app.shared.infrastructure.exception_handler import exception_handler


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncGenerator[None, None]:
    await db_client.connect()
    yield
    await db_client.close()


app = FastAPI(lifespan=lifespan)
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
