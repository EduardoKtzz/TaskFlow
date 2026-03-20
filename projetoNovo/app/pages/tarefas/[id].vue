<!-- pages/tarefas/[id].vue -->
<!-- Rota dinâmica: /tarefas/1, /tarefas/42, etc. -->

<template>
  <div>
    <NuxtLink to="/tarefas">← Voltar</NuxtLink>

    <div v-if="tarefa">
      <h1>{{ tarefa.texto }}</h1>
      <p>Status: {{ tarefa.feita ? 'Concluída' : 'Pendente' }}</p>
    </div>

    <div v-else>Tarefa não encontrada.</div>
  </div>
</template>

<script setup lang="ts">
import { useTarefas } from '~/composables/useTarefas'

// useRoute() é built-in do Nuxt
const route = useRoute()
const { tarefas } = useTarefas()

// route.params.id = o valor da URL (ex: "42")
const tarefa = computed(() =>
  tarefas.value.find(t => t.id === Number(route.params.id))
)
</script>