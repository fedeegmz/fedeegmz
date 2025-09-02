from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env")

    bucket_name: str = "my-gcp-storage-bucket"
    bucket_data_path: str = "data"


settings = Settings()
