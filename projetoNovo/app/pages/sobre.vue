<!-- pages/sobre.vue -->
<template>
  <div class="page-sobre">
    <h1>Sobre o TaskFlow</h1>
    <p>Projeto construído com <strong>Vue 3</strong> e <strong>Nuxt 4</strong> para aprendizado prático.</p>

    <div class="stack">
      <h2>Stack usada</h2>
      <ul>
        <li v-for="item in stack" :key="item.nome">
          <strong>{{ item.nome }}</strong>
          <span>{{ item.desc }}</span>
        </li>
      </ul>
    </div>

    <NuxtLink to="/" class="btn-ghost">← Voltar ao início</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ title: 'Sobre — TaskFlow' })

const stack = [
  { nome: 'Vue 3',         desc: 'framework frontend reativo' },
  { nome: 'Nuxt 4',        desc: 'framework fullstack em cima do Vue' },
  { nome: 'TypeScript',    desc: 'tipagem estática' },
  { nome: 'Composables',   desc: 'lógica reutilizável (como hooks React)' },
  { nome: 'Server API',    desc: 'rotas backend em /server/api/' },
]
</script>