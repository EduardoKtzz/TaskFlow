<!-- components/CardFeature.vue -->
<template>
  <div class="card-feature">
    <span class="card-icone">{{ icone }}</span>
    <h3 class="card-titulo">{{ titulo }}</h3>
    <p class="card-desc">{{ descricao }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titulo:    string
  descricao: string
  icone:     string
}>()
</script>