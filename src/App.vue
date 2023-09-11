<script setup>
  import Nav from './components/Nav.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <Nav />
    <RouterView />
  </div>
</template>
