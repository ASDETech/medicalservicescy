<template>
  <div id="app">
    <TopBar />
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import TopBar from './components/TopBar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
