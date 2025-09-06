from enum import StrEnum

from pydantic_settings import BaseSettings, SettingsConfigDict


class Environment(StrEnum):
    PRODUCTION = "production"
    DEVELOPMENT = "development"


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env")

    environment: Environment = Environment.DEVELOPMENT
    bucket_name: str = "my-gcp-storage-bucket"
    bucket_data_path: str = "data"

    def is_development(self) -> bool:
        return self.environment == Environment.DEVELOPMENT

    def is_production(self) -> bool:
        return self.environment == Environment.PRODUCTION


settings = Settings()
