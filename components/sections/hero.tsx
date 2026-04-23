"use client";

import { motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { HeroData } from "@/lib/types";

interface HeroProps {
  data: HeroData;
}

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
};

export function Hero({ data }: HeroProps) {
  const scrollToNext = () => {
    const techSection = document.getElementById("tech-stack");
    techSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-lg text-muted-foreground"
        >
          {data.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {data.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-2xl font-medium text-accent sm:text-3xl"
        >
          {data.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          {data.socialLinks.map((link) => {
            const Icon = iconMap[link.platform];
            return (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
                aria-label={link.label}
              >
                <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            );
          })}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.button>
    </section>
  );
}
