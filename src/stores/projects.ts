import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Project } from '@/types/project'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([
    {
      id: 'ogaraity',
      name: 'Ogaraity',
      description:
        'Portal de propiedades en venta y alquiler en toda Argentina, con búsqueda inteligente',
      url: 'https://ogaraity.com',
    },
    {
      id: 'open-retro',
      name: 'Open Retro',
      description:
        'Herramienta open source para retrospectivas de equipo en tiempo real, self-hosteable',
      url: 'https://openretro.app',
      repositoryUrl: 'https://github.com/fedeegmz/open-retro',
    },
    {
      id: 'overlays',
      name: 'Overlays',
      description:
        'App de escritorio para servir y controlar en vivo zócalos y títulos como Browser Source de OBS',
      url: 'https://overlays.fedeegmz.com',
      repositoryUrl: 'https://github.com/fedeegmz/overlays',
    },
    {
      id: 'gastubela',
      name: 'Gastubela',
      description: 'App para dividir gastos con amigos',
      url: 'https://gastubela.fedeegmz.com',
      repositoryUrl: 'https://github.com/fedeegmz/gastubela-web',
    },
    {
      id: 'youtube-pydantic-models',
      name: 'YouTube Pydantic Models',
      description: 'Librería de Python con modelos de YouTube basados en Pydantic',
      url: 'https://pypi.org/project/youtube-pydantic-models/',
      repositoryUrl: 'https://github.com/fedeegmz/youtube-pydantic-models',
    },
    {
      id: 'beauty-prints',
      name: 'Beauty Prints',
      description:
        'Extensión de VS Code que facilita el debugging insertando print statements con un comando',
      url: 'https://marketplace.visualstudio.com/items?itemName=fedeegmz.beauty-prints',
      repositoryUrl: 'https://github.com/fedeegmz/beauty-prints',
    },
  ])

  return { projects }
})
