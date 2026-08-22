<script setup lang="ts">
import { storeToRefs } from 'pinia'
import SiteHeader from '@/components/SiteHeader.vue'
import ProjectList from '@/components/ProjectList.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { useProfileStore } from '@/stores/profile'

const store = useProfileStore()
const { profile, fullName } = storeToRefs(store)
</script>

<template>
  <div class="layout">
    <main class="container">
      <SiteHeader :name="fullName" :description="profile.description" />
      <ProjectList />
    </main>
    <SiteFooter :name="fullName" :contact="profile.contact" />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.container {
  width: 100%;
  max-width: 640px;
  margin-inline: auto;
  padding: 4rem 1.5rem 3.5rem;
  flex: 1;
}
</style>
