from dataclasses import dataclass
from enum import StrEnum


class StatusVariant(StrEnum):
    SUCCESS = "success"
    WARNING = "warning"


@dataclass(frozen=True)
class Status:
    title: str
    variant: StatusVariant
