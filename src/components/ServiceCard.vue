<template>
  <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
    <div class="bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white">
      <div class="text-5xl mb-4">{{ service.icon }}</div>
      <h3 class="text-2xl font-bold mb-2">{{ service.title }}</h3>
    </div>
    <div class="p-6">
      <p class="text-gray-600 mb-6 leading-relaxed">{{ service.shortDescription }}</p>
      <ul class="space-y-2 mb-6">
        <li v-for="feature in service.features.slice(0, 4)" :key="feature" class="flex items-start gap-2 text-sm text-gray-700">
          <span class="text-green-500 mt-0.5">✓</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
      <router-link
        :to="`/services/${service.slug}`"
        class="inline-flex items-center gap-2 bg-accent-500 text-white px-6 py-3 rounded-full hover:bg-accent-600 transition-colors font-medium"
      >
        Learn More
        <span>→</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '../data/services'

defineProps<{
  service: Service
}>()
</script>
