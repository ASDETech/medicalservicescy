<template>
  <div>
    <VideoHero />

    <section class="py-16 bg-gradient-to-br from-gray-50 via-white to-accent-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            {{ $t('home.services.title') }}
          </h2>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto">
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
