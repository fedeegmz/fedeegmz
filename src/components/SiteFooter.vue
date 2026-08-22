<script setup lang="ts">
import type { ContactInfo } from '@/types/profile'

defineProps<{
  name: string
  contact: ContactInfo
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <span>© {{ year }} {{ name }}</span>
      <nav class="links" aria-label="Contacto">
        <a :href="`mailto:${contact.email}`" aria-label="Enviar un email">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697Zm6.761 4.133-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.756Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
            />
          </svg>
        </a>
        <a
          :href="contact.linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de LinkedIn"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016V6.169H6.471c.03.678 0 7.225 0 7.225h2.401z"
            />
          </svg>
        </a>
        <a
          :href="contact.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
            />
          </svg>
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
}

.footer-inner {
  max-width: 640px;
  margin-inline: auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--muted);
  font-size: 0.8rem;
}

.links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.links a {
  display: inline-flex;
  color: var(--muted);
  transition: color 0.15s ease;
}

.links a:hover {
  color: var(--fg);
}

.links svg {
  display: block;
}
</style>
