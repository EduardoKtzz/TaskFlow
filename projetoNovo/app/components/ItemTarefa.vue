<!-- components/ItemTarefa.vue -->
<template>
  <div class="item-tarefa" :class="{ feita: tarefa.feita }">
    <button class="check" :class="{ checked: tarefa.feita }" @click="$emit('toggle')">
      <span v-if="tarefa.feita">✓</span>
    </button>
    <span class="tarefa-texto">{{ tarefa.texto }}</span>
    <button class="btn-remover" @click="$emit('remover')">×</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tarefa: { id: number; texto: string; feita: boolean }
}>()

defineEmits<{
  toggle:  []
  remover: []
}>()
</script>