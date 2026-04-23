import { SiteData } from "./types";

export const siteData: SiteData = {
  hero: {
    greeting: "Hi, I'm",
    name: "Federico Gomez",
    role: "Software Developer",
    description:
      "I build scalable backend systems and data pipelines. Passionate about clean architecture, automation, and turning complex problems into elegant solutions.",
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/fedeegmz",
        label: "GitHub",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/fedeegmz",
        label: "LinkedIn",
      },
      {
        platform: "email",
        url: "mailto:fedegomez.dev@gmail.com",
        label: "Email",
      },
    ],
  },

  techStack: [
    { name: "Python", icon: "python", category: "language" },
    { name: "TypeScript", icon: "typescript", category: "language" },
    { name: "JavaScript", icon: "javascript", category: "language" },
    { name: "FastAPI", icon: "fastapi", category: "framework" },
    { name: "Django", icon: "django", category: "framework" },
    { name: "Next.js", icon: "nextjs", category: "framework" },
    { name: "PostgreSQL", icon: "postgresql", category: "database" },
    { name: "MongoDB", icon: "mongodb", category: "database" },
    { name: "Redis", icon: "redis", category: "database" },
    { name: "Docker", icon: "docker", category: "tool" },
    { name: "Git", icon: "git", category: "tool" },
    { name: "AWS", icon: "aws", category: "cloud" },
    { name: "GCP", icon: "gcp", category: "cloud" },
  ],

  timeline: [
    {
      id: "work-1",
      type: "work",
      title: "Backend Developer",
      organization: "Tech Company",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Developing and maintaining RESTful APIs and microservices. Building data pipelines and automation tools. Collaborating with cross-functional teams to deliver scalable solutions.",
      skills: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: "work-2",
      type: "work",
      title: "Software Developer",
      organization: "Startup",
      location: "Buenos Aires, Argentina",
      period: "2022 - 2023",
      description:
        "Built full-stack applications from scratch. Implemented CI/CD pipelines and automated testing. Contributed to architecture decisions and code reviews.",
      skills: ["Python", "Django", "React", "MongoDB", "GCP"],
    },
    {
      id: "edu-1",
      type: "education",
      title: "Computer Science",
      organization: "University",
      location: "Argentina",
      period: "2019 - 2023",
      description:
        "Studied algorithms, data structures, software engineering, and database systems. Completed projects in machine learning and distributed systems.",
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "Data Pipeline Platform",
      shortDescription:
        "Scalable ETL pipeline for processing millions of records daily",
      fullDescription:
        "Built a robust data pipeline platform that processes and transforms large datasets. Implemented parallel processing, error handling, and monitoring dashboards. Reduced processing time by 70% compared to the legacy system.",
      techStack: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "AWS S3"],
      featured: true,
      githubUrl: "https://github.com/fedeegmz",
    },
    {
      id: "project-2",
      title: "API Gateway Service",
      shortDescription: "Microservice for authentication and rate limiting",
      fullDescription:
        "Developed a centralized API gateway that handles authentication, authorization, and rate limiting for multiple microservices. Implemented JWT-based auth, Redis caching, and comprehensive logging.",
      techStack: ["FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      featured: true,
      githubUrl: "https://github.com/fedeegmz",
    },
    {
      id: "project-3",
      title: "Real-time Analytics Dashboard",
      shortDescription: "Live metrics visualization for business intelligence",
      fullDescription:
        "Created a real-time analytics dashboard that displays key business metrics. Integrated with multiple data sources, implemented WebSocket connections for live updates, and built interactive charts.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Chart.js"],
      featured: true,
      githubUrl: "https://github.com/fedeegmz",
    },
    {
      id: "project-4",
      title: "Task Automation Bot",
      shortDescription: "Discord bot for team productivity and automation",
      fullDescription:
        "Built a Discord bot that automates repetitive tasks, sends notifications, and integrates with project management tools. Handles scheduled jobs, webhook events, and natural language commands.",
      techStack: ["Python", "Discord.py", "MongoDB", "Docker"],
      featured: false,
      githubUrl: "https://github.com/fedeegmz",
    },
  ],

  contact: {
    heading: "Let's Connect",
    description:
      "I'm always open to discussing new projects, opportunities, or just having a chat about technology. Feel free to reach out!",
    email: "fedegomez.dev@gmail.com",
    linkedinUrl: "https://linkedin.com/in/fedeegmz",
    githubUrl: "https://github.com/fedeegmz",
  },
};
