<script setup>
import './assets/main.css'
import navbar from './components/navbar.vue'
import footerr from './components/footer.vue'
</script>

<template>
  <header><navbar /></header>
  <main><body><RouterView /></body></main>
  <footer><footerr /></footer>
</template>