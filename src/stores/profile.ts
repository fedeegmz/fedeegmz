import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Profile } from '@/types/profile'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>({
    firstName: 'Federico',
    lastName: 'Gomez',
    description: 'Desarrollador backend, mobile y algunas cosas de frontend.',
    contact: {
      email: 'gomez00federico@gmail.com',
      linkedinUrl: 'https://www.linkedin.com/in/federico00gomez/',
      githubUrl: 'https://github.com/fedeegmz',
    },
  })

  const fullName = computed(() => `${profile.value.firstName} ${profile.value.lastName}`)

  return { profile, fullName }
})
