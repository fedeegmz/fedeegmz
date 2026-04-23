"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border px-6 py-8"
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {currentYear} Federico Gomez. Built with Next.js.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top
        </button>
      </div>
    </motion.footer>
  );
}
