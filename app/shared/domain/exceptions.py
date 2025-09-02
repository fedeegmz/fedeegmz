class AppException(Exception):
    def __init__(self, message: str, detail: str | None = None) -> None:
        self.message = message
        self.detail = detail
        super().__init__(self.message)


class UninitializedException(AppException):
    def __init__(
        self,
        message: str = "Uninitialized",
        detail: str | None = None,
    ) -> None:
        super().__init__(message, detail)


class DatabaseConnectionException(AppException):
    def __init__(self, detail: str | None = None) -> None:
        super().__init__("Database connection error", detail)


class InternalException(AppException):
    def __init__(self, message: str, detail: str | None = None) -> None:
        super().__init__(message, detail)
