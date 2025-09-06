from typing import Annotated

from fastapi import Depends

from app.project.application.find_all import FindAll
from app.project.domain.repositories.project_repository import ProjectRepository
from app.project.domain.services.repo_service import RepoService
from app.project.infrastructure.adapters.gcp_project_repository import (
    GCPProjectRepository,
)
from app.project.infrastructure.adapters.github_repo_service import GithubRepoService
from app.shared.infrastructure.di.storage_bucket import GCPStorageBucketDi


def __get_project_repository(bucket: GCPStorageBucketDi) -> ProjectRepository:
    return GCPProjectRepository(bucket=bucket)


ProjectRepositoryDi = Annotated[ProjectRepository, Depends(__get_project_repository)]


def __get_repo_service() -> RepoService:
    return GithubRepoService()


RepoServiceDi = Annotated[RepoService, Depends(__get_repo_service)]


def __get_find_all_use_case(
    project_repository: ProjectRepositoryDi,
    repo_service: RepoServiceDi,
) -> FindAll:
    return FindAll(project_repository=project_repository, repo_service=repo_service)


FindAllProjectsUseCaseDi = Annotated[FindAll, Depends(__get_find_all_use_case)]
