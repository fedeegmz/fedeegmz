<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="project">
    <span>
      <span class="project-name">{{ project.name }}</span>
      <span class="project-desc">{{ project.description }}</span>
    </span>
    <span class="actions">
      <a
        v-if="project.repositoryUrl"
        class="icon-link"
        :href="project.repositoryUrl"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Repositorio de GitHub de ${project.name}`"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
          />
        </svg>
      </a>
      <a
        class="icon-link arrow"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Sitio web de ${project.name}`"
      >
        ↗
      </a>
    </span>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0.25rem;
  color: var(--fg);
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

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    opacity 0.15s ease;
}

.icon-link svg {
  display: block;
}

.icon-link:hover {
  color: var(--fg);
  border-color: var(--muted);
}
</style>
