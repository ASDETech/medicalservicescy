<template>
  <div>
    <section class="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ $t('services.title') }}
        </h1>
        <p class="text-xl text-white/90">
          {{ $t('services.subtitle') }}
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesGrid />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ServicesGrid from '../components/ServicesGrid.vue'
</script>
