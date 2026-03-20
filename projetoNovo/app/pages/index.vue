<!-- pages/index.vue -->
<template>
  <div class="page-home">

    <section class="hero">
      <h1>Organize suas tarefas,<br><em>simplifique sua vida.</em></h1>
      <p>TaskFlow é um gerenciador de tarefas simples e direto. Sem frescura.</p>
      <NuxtLink to="/tarefas" class="btn-primary">
        Começar agora →
      </NuxtLink>
    </section>

    <section class="features">
      <CardFeature
        titulo="Simples"
        descricao="Sem curva de aprendizado. Abriu, usou."
        icone="⚡"
      />
      <CardFeature
        titulo="Rápido"
        descricao="Tudo no cliente, sem esperar servidor."
        icone="🚀"
      />
      <CardFeature
        titulo="Seu"
        descricao="Seus dados ficam só no seu navegador."
        icone="🔒"
      />
    </section>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ title: 'Início — TaskFlow' })
useSeoMeta({
  title: 'TaskFlow — Gerenciador de tarefas',
  description: 'Organize suas tarefas de forma simples.',
})
</script>