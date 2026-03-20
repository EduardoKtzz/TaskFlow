<!-- layouts/default.vue -->
<template>
  <div class="app-shell">

    <header class="header">
      <div class="header-inner">
        <NuxtLink to="/" class="logo">TaskFlow</NuxtLink>
        <nav>
          <NuxtLink to="/" class="nav-link">Início</NuxtLink>
          <NuxtLink to="/tarefas" class="nav-link">Tarefas</NuxtLink>
          <NuxtLink to="/sobre" class="nav-link">Sobre</NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="footer">
      <p>TaskFlow © {{ anoAtual }}</p>
    </footer>

  </div>
</template>

<script setup lang="ts">
const anoAtual = computed(() => new Date().getFullYear())
</script>