// nuxt.config.ts

export default defineNuxtConfig({
  devtools: { enabled: true },

  // CSS aplicado globalmente em toda a aplicação
  css: ['~/assets/main.css'],

  // Módulos extras (tailwind, pinia, i18n...)
  modules: [],

  // Variáveis de ambiente
  runtimeConfig: {
    
    // Público — acessível no cliente também
    public: {
      appName: 'TaskFlow',
    },
  },
})