from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI

from app.home.infrastructure.home_router import router as home_router
from app.shared.infrastructure.di.database import db_client
from app.shared.infrastructure.exception_handler import exception_handler


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncGenerator[None, None]:
    await db_client.connect()
    yield
    await db_client.close()


app = FastAPI(lifespan=lifespan)
exception_handler(app)

app.include_router(home_router)
