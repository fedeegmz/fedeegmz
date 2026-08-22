<script setup lang="ts">
defineProps<{
  name: string
  description: string
}>()
</script>

<template>
  <header class="site-header">
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
  </header>
</template>

<style scoped>
.site-header {
  margin-bottom: 3.5rem;
}

.site-header h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.4rem 0;
  letter-spacing: -0.01em;
}

.site-header p {
  color: var(--muted);
  margin: 0;
  font-size: 0.95rem;
}
</style>
