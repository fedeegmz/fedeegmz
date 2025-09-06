from app.project.domain.entities.project import Project
from app.project.domain.repositories.project_repository import ProjectRepository
from app.project.domain.services.repo_service import RepoService


class FindAll:
    def __init__(
        self,
        project_repository: ProjectRepository,
        repo_service: RepoService,
    ) -> None:
        self.__project_repository = project_repository
        self.__repo_service = repo_service

    async def find_all(self) -> list[Project]:
        projects: list[Project] = []
        base_projects = await self.__project_repository.find_all()
        for base_project in base_projects:
            repo = await self.__repo_service.find_one_by_full_name(
                base_project.repo_name,
            )
            if repo is not None:
                projects.append(
                    Project(
                        tech_stack=repo.topics,
                        url=repo.html_url,
                        **base_project.model_dump(),
                    )
                )
        return projects
