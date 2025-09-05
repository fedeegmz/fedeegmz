import json
import os
from functools import lru_cache
from typing import Any

from google.auth.exceptions import DefaultCredentialsError
from google.cloud import storage

from app.shared.domain.exceptions import InternalException


class GCPStorageBucket:
    def __init__(self, bucket_name: str):
        self.bucket_name = bucket_name
        try:
            if os.path.exists("gcp-credentials.json"):
                os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "gcp-credentials.json"
            self.client = storage.Client()
            self.bucket = self.client.bucket(bucket_name)
        except DefaultCredentialsError:
            self.client = None
            self.bucket = None

    @lru_cache(maxsize=1)
    def load_data(self, file_path: str) -> dict[str, Any]:
        try:
            blob = self.bucket.blob(file_path)
            if not blob.exists():
                raise FileNotFoundError(
                    f"File {file_path} not found in bucket {self.bucket_name}"
                )

            content = blob.download_as_text()
            data = json.loads(content)
            return data
        except Exception as e:
            raise InternalException(
                message="Error loading GCP Storage Bucket data",
                detail=str(e),
            )
