<!-- pages/tarefas.vue — rota: /tarefas -->
<template>
  <div class="page-tarefas">

    <div class="page-header">
      <h1>Minhas Tarefas</h1>
      <span class="badge">{{ resumo }}</span>
    </div>

    <form class="form-nova" @submit.prevent="adicionarTarefa">
      <input
        class="input"
        v-model="novaTarefa"
        placeholder="Nova tarefa..."
      />
      <button type="submit" class="btn-primary" :disabled="!novaTarefa.trim()">
        Adicionar
      </button>
    </form>

    <div class="filtros">
      <button
        v-for="f in filtros" :key="f.valor"
        class="btn-filtro"
        :class="{ ativo: filtroAtivo === f.valor }"
        @click="filtroAtivo = f.valor"
      >{{ f.label }}</button>
    </div>

    <div class="lista">
      <ItemTarefa
        v-for="tarefa in tarefasFiltradas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @toggle="toggleTarefa(tarefa.id)"
        @remover="removerTarefa(tarefa.id)"
      />
      <div v-if="tarefasFiltradas.length === 0" class="vazio">
        <span v-if="filtroAtivo === 'todas'">Nenhuma tarefa ainda. Adicione uma acima!</span>
        <span v-else-if="filtroAtivo === 'feitas'">Nenhuma tarefa concluída.</span>
        <span v-else>Nenhuma tarefa pendente.</span>
      </div>
    </div>

    <div v-if="tarefasFeitas.length > 0" class="acoes">
      <button class="btn-ghost" @click="limparFeitas">
        Limpar concluídas ({{ tarefasFeitas.length }})
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useTarefas } from '~/composables/useTarefas'

definePageMeta({ title: 'Tarefas — TaskFlow' })

const {
  tarefas,
  tarefasFeitas,
  adicionarTarefa: _adicionar,
  toggleTarefa,
  removerTarefa,
  limparFeitas,
} = useTarefas()

const novaTarefa = ref('')
const filtroAtivo = ref('todas')

const filtros = [
  { label: 'Todas',      valor: 'todas' },
  { label: 'Pendentes',  valor: 'pendentes' },
  { label: 'Concluídas', valor: 'feitas' },
]

function adicionarTarefa() {
  if (!novaTarefa.value.trim()) return
  _adicionar(novaTarefa.value.trim())
  novaTarefa.value = ''
}

const tarefasFiltradas = computed(() => {
  if (filtroAtivo.value === 'pendentes') return tarefas.value.filter(t => !t.feita)
  if (filtroAtivo.value === 'feitas')    return tarefas.value.filter(t => t.feita)
  return tarefas.value
})

const resumo = computed(() =>
  `${tarefasFeitas.value.length}/${tarefas.value.length} concluídas`
)
</script>