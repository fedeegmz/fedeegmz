<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import ProjectList from '@/components/ProjectList.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <main class="container">
    <SiteHeader
      name="Federico"
      tagline="Desarrollador backend, mobile y algunas cosas de frontend."
    />
    <ProjectList />
    <SiteFooter name="Federico" />
  </main>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 640px;
  margin-inline: auto;
}
</style>
