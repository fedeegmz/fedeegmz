export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  url: string;
  label: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  role: string;
  description: string;
  socialLinks: SocialLink[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: "language" | "framework" | "tool" | "database" | "cloud";
}

export interface TimelineItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  skills?: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ContactData {
  heading: string;
  description: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface SiteData {
  hero: HeroData;
  techStack: TechItem[];
  timeline: TimelineItem[];
  projects: Project[];
  contact: ContactData;
}
