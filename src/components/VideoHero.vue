<template>
  <div class="relative w-full min-h-[70vh] md:min-h-[85vh] overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero.mp4" type="video/mp4">
    </video>

    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative z-10 flex flex-col items-center justify-center h-full min-h-[70vh] md:min-h-[85vh] px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 max-w-5xl leading-tight">
        Your Health, Our Priority
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl">
        Always next to you 24/7
      </p>
      <router-link
        to="/contact"
        class="inline-block bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Book Online
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
