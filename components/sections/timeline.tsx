"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { TimelineItem } from "@/lib/types";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <section id="experience" className="px-6 py-24 bg-card/30">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold text-foreground sm:text-4xl"
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12 md:text-left"
              }`}
            >
              {/* Icon */}
              <div
                className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-background md:left-auto ${
                  index % 2 === 0
                    ? "md:right-0 md:translate-x-1/2"
                    : "md:left-0 md:-translate-x-1/2"
                }`}
              >
                {item.type === "work" ? (
                  <Briefcase className="h-4 w-4 text-accent" />
                ) : (
                  <GraduationCap className="h-4 w-4 text-accent" />
                )}
              </div>

              {/* Content */}
              <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/30">
                <h3 className="mb-1 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-3 text-lg font-medium text-accent">
                  {item.organization}
                </p>

                <div
                  className={`mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.period}
                  </span>
                </div>

                <p
                  className={`text-muted-foreground ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  {item.description}
                </p>

                {item.skills && item.skills.length > 0 && (
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
