from pydantic import BaseModel


class Repository(BaseModel):
    id: int
    name: str
    full_name: str
    html_url: str
    description: str
    created_at: str
    updated_at: str
    topics: list[str]
    tags_url: str
    homepage: str
