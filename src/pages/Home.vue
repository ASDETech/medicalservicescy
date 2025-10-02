<template>
  <div>
    <VideoHero />

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('home.services.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('home.services.subtitle') }}
          </p>
        </div>
        <ServicesGrid />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import VideoHero from '../components/VideoHero.vue'
import ServicesGrid from '../components/ServicesGrid.vue'
</script>
