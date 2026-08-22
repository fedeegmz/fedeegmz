import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Profile } from '@/types/profile'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>({
    firstName: 'Federico',
    lastName: 'Gomez',
    description: 'Desarrollador backend, mobile y algunas cosas de frontend.',
  })

  const fullName = computed(() => `${profile.value.firstName} ${profile.value.lastName}`)

  return { profile, fullName }
})
