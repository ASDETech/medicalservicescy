<template>
  <div class="home">
    <Header />
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Hero from './Hero.vue'
import Services from './Services.vue'
import About from './About.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}
</style>
