<script setup lang="ts">
defineProps<{
  name: string
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">© {{ year }} {{ name }}</footer>
</template>

<style scoped>
.site-footer {
  margin-top: 3.5rem;
  color: var(--muted);
  font-size: 0.8rem;
}

.site-footer a {
  color: var(--muted);
}
</style>
