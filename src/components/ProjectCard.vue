<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <a class="project" :href="project.url" target="_blank" rel="noopener noreferrer">
    <span>
      <span class="project-name">{{ project.name }}</span>
      <span class="project-desc">{{ project.description }}</span>
    </span>
    <span class="arrow">↗</span>
  </a>
</template>

<style scoped>
.project {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding: 1.25rem 0.25rem;
  text-decoration: none;
  color: var(--fg);
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.project:hover {
  opacity: 0.65;
}

.project-name {
  font-size: 1.05rem;
  font-weight: 500;
}

.project-desc {
  display: block;
  color: var(--muted);
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-weight: 400;
}

.arrow {
  color: var(--muted);
  font-size: 1rem;
  flex-shrink: 0;
}
</style>
