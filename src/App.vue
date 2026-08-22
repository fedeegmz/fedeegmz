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
  <main class="container">
    <SiteHeader :name="fullName" :description="profile.description" />
    <ProjectList />
    <SiteFooter :name="fullName" />
  </main>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 640px;
  margin-inline: auto;
}
</style>
