<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import ProjectCard from './ProjectCard.vue'

const store = useProjectsStore()
const { projects } = storeToRefs(store)
</script>

<template>
  <ul class="project-list">
    <li v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" />
    </li>
  </ul>
</template>

<style scoped>
.project-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--border);
}

.project-list li {
  border-bottom: 1px solid var(--border);
}
</style>
