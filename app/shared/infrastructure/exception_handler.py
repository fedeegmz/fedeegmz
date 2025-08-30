from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse

from app.shared.domain import exceptions


def exception_handler(app: FastAPI) -> None:
    @app.exception_handler(exceptions.DatabaseConnectionException)
    def database_connection_exception_handler(
        _: Request,
        exc: exceptions.DatabaseConnectionException,
    ) -> JSONResponse:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"success": False, "message": exc.message, "data": None},
        )

    @app.exception_handler(exceptions.UninitializedException)
    def uninitialized_exception_handler(
        _: Request,
        exc: exceptions.UninitializedException,
    ) -> JSONResponse:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"success": False, "message": exc.message, "data": None},
        )

    @app.exception_handler(exceptions.InternalException)
    def internal_exception_handler(
        _: Request, exc: exceptions.InternalException
    ) -> JSONResponse:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"success": False, "message": exc.message, "data": None},
        )
