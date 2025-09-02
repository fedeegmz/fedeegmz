import json
import os
from functools import lru_cache
from typing import Any

from google.cloud import storage

from app.shared.domain.exceptions import InternalException

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "gcp-credentials.json"


class GCPStorageBucket:
    def __init__(self, bucket_name: str):
        self.client = storage.Client()
        self.bucket_name = bucket_name
        self.bucket = self.client.bucket(bucket_name)

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
