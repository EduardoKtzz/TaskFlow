// composables/useTarefas.ts
// Equivale a um hook customizado do React

import { ref, computed } from 'vue'

interface Tarefa {
  id:       number
  texto:    string
  feita:    boolean
  criadaEm: Date
}

// Estado FORA da função = compartilhado entre componentes
const tarefas = ref<Tarefa[]>([
  { id: 1, texto: 'Estudar Vue.js', feita: true, criadaEm: new Date() },
  { id: 2, texto: 'Entender Nuxt',  feita: false, criadaEm: new Date() },
])

let proximoId = 3

export function useTarefas() {
  // computed = useMemo do React — recalcula sozinho
  const tarefasFeitas = computed(() =>
    tarefas.value.filter(t => t.feita)
  )

  function adicionarTarefa(texto: string) {
    tarefas.value.push({
      id: proximoId++, texto,
      feita: false, criadaEm: new Date()
    })
  }

  function toggleTarefa(id: number) {
    const t = tarefas.value.find(t => t.id === id)
    if (t) t.feita = !t.feita
  }

  function removerTarefa(id: number) {
    tarefas.value = tarefas.value.filter(t => t.id !== id)
  }

  function limparFeitas() {
  tarefas.value = tarefas.value.filter(t => !t.feita)
}

  return { tarefas, tarefasFeitas, adicionarTarefa, toggleTarefa, removerTarefa, limparFeitas }
}