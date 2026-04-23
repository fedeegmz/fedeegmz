"use client";

import { motion } from "framer-motion";
import { TechItem } from "@/lib/types";
import { TechIcon } from "@/components/ui/tech-icon";

interface TechStackProps {
  items: TechItem[];
}

export function TechStack({ items }: TechStackProps) {
  const categories = [
    { key: "language", label: "Languages" },
    { key: "framework", label: "Frameworks" },
    { key: "database", label: "Databases" },
    { key: "tool", label: "Tools" },
    { key: "cloud", label: "Cloud" },
  ] as const;

  return (
    <section id="tech-stack" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold text-foreground sm:text-4xl"
        >
          Tech Stack
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categoryItems = items.filter(
              (item) => item.category === category.key
            );
            if (categoryItems.length === 0) return null;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {categoryItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:border-accent/50 hover:bg-card-hover"
                    >
                      <TechIcon name={item.icon} className="h-6 w-6" />
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
