from typing import Annotated

from fastapi import Depends

from app.core.settings import settings
from app.shared.infrastructure.adapters.gcp_storage_bucket import GCPStorageBucket

storage_bucket = GCPStorageBucket(settings.bucket_name)

GCPStorageBucketDi = Annotated[GCPStorageBucket, Depends(lambda: storage_bucket)]
