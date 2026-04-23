"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold text-foreground sm:text-4xl"
        >
          Projects
        </motion.h2>

        {/* Featured Projects */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-card-hover"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-muted-foreground">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center text-xl font-semibold text-muted-foreground"
            >
              Other Projects
            </motion.h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/50"
                >
                  <h4 className="mb-1 font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                  </p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <h3 className="mb-4 text-2xl font-bold text-foreground">
          {project.title}
        </h3>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          {project.fullDescription}
        </p>

        <div className="mb-6">
          <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-foreground/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/20"
            >
              <Github className="h-4 w-4" />
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
