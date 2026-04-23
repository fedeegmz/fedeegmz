"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { ContactData } from "@/lib/types";

interface ContactProps {
  data: ContactData;
}

export function Contact({ data }: ContactProps) {
  const links = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${data.email}`,
      value: data.email,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: data.linkedinUrl,
      value: "Connect on LinkedIn",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      href: data.githubUrl,
      value: "View my repos",
    },
  ];

  return (
    <section id="contact" className="px-6 py-24 bg-card/30">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-3xl font-bold text-foreground sm:text-4xl"
        >
          {data.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 text-lg leading-relaxed text-muted-foreground"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-accent/50 hover:bg-card-hover"
            >
              <link.icon className="h-5 w-5 text-accent" />
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {link.label}
                </p>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-accent" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
