from typing import override

from app.home.domain.action import Action
from app.home.domain.contact import Contact
from app.home.domain.context import Context
from app.home.domain.context_repository import ContextRepository
from app.home.domain.project import Project
from app.home.domain.status import Status
from app.home.domain.technology import Technology


class InMemoryContextRepository(ContextRepository):
    def __init__(self):
        self.__context = Context(
            full_name="Federico Gomez",
            nickname="fedeegmz",
            role="Backend Developer",
            overview="Especializado en Python y FastAPI, con experiencia en desarrollo fullstack. Apasionado por crear APIs robustas y escalables que impulsen aplicaciones modernas.",
            description=[
                "Soy desarrollador backend con 11 meses de experiencia profesional en Tinkin, donde trabajo como desarrollador fullstack. Mi especialización y pasión se centran en el desarrollo backend utilizando Python y FastAPI.",
                "Como autodidacta, he complementado mi formación a través de múltiples cursos en Platzi y otras plataformas educativas. Mi enfoque está en crear APIs robustas, escalables y bien documentadas que sirvan como columna vertebral de aplicaciones modernas.",
                "Constantemente exploro nuevas tecnologías y mejores prácticas, desde la implementación de RAG con IA hasta el desarrollo de herramientas CLI con Rust. Mi objetivo es seguir creciendo como desarrollador y contribuir a proyectos que generen impacto.",
            ],
            actions=[
                Action(
                    title="Descargar CV",
                    class_name="btn btn-primary",
                    href="https://drive.google.com/drive/folders/1qhERX9MZIdZ9XJuvQpQn2cswsyEwYB6H",
                    target="_blank",
                ),
                Action(
                    title="Ver Proyectos",
                    class_name="btn btn-outline",
                    href="#projects",
                ),
            ],
            tech_stack=[
                Technology(
                    title="Backend & APIs",
                    tags=["Python", "FastAPI", "Kotlin", "Ktor"],
                ),
                Technology(
                    title="Bases de Datos",
                    tags=["PostgreSQL", "MongoDB"],
                ),
                Technology(
                    title="Otras Tecnologías",
                    tags=["Rust", "TypeScript", "RAG / AI", "VoyageAI"],
                ),
            ],
            projects=[
                Project(
                    title="Hayek RAG",
                    description="Aplicación de chat especializada en Friedrich August von Hayek que implementa RAG (Retrieval-Augmented Generation) para proporcionar respuestas contextualmente relevantes basadas en las obras del autor.",
                    status=Status(
                        title="En desarrollo",
                        class_name="project-status status-development",
                    ),
                    href="https://github.com/fedeegmz/hayek-rag",
                    tech_stack=["Python", "FastAPI", "MongoDB", "VoyageAI"],
                ),
                Project(
                    title="Nester",
                    description="Herramienta CLI escrita en Rust que facilita la generación de estructuras básicas para proyectos Kotlin/Ktor usando Koin como inyector de dependencias, utilizando templates con Tera.",
                    status=Status(
                        title="v1.0.0", class_name="project-status status-completed"
                    ),
                    href="https://github.com/fedeegmz/nester",
                    tech_stack=["Rust", "CLI", "Tera", "Templates"],
                ),
                Project(
                    title="Beauty Prints",
                    description="Extensión para Visual Studio Code desarrollada en TypeScript que permite insertar líneas de debug estilizadas de forma rápida y fácil, compatible con múltiples lenguajes de programación.",
                    status=Status(
                        title="v1.0.0", class_name="project-status status-completed"
                    ),
                    href="https://github.com/fedeegmz/beauty-prints",
                    tech_stack=["TypeScript", "VS Code API", "Extension"],
                ),
            ],
            contact=[
                Contact(
                    title="gomez00federico@gmail.com",
                    icon="📧",
                    href="mailto:gomez00federico@gmail.com",
                ),
                Contact(
                    title="LinkedIn",
                    icon="💼",
                    href="https://www.linkedin.com/in/federico00gomez/",
                    target="_blank",
                ),
                Contact(
                    title="GitHub",
                    icon="🚀",
                    href="https://github.com/fedeegmz",
                    target="_blank",
                ),
            ],
            footer="&copy; 2025 Federico Gomez. Desarrollado con pasión y mucho café ☕",
        )

    @override
    async def get_context(self) -> Context:
        return self.__context
