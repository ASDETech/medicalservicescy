<template>
  <router-link
    :to="`/services/${service.slug}`"
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col group"
  >
    <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors mx-auto">
      <svg v-if="service.icon === 'homecare'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      <svg v-else-if="service.icon === 'ambulance'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      <svg v-else-if="service.icon === 'events'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
      <svg v-else-if="service.icon === 'wheelchair'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
      </svg>
      <svg v-else-if="service.icon === 'equipment'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>
    </div>
    <h3 class="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-primary-500 transition-colors">
      {{ service.title }}
    </h3>
    <p class="text-gray-600 text-sm mb-4 text-center flex-grow">
      {{ service.description }}
    </p>
    <div v-if="service.pricing" class="bg-accent-50 rounded-lg p-3 mb-4">
      <p class="text-accent-600 font-semibold text-sm text-center">
        {{ service.pricing }}
      </p>
    </div>
    <div class="flex items-center justify-center text-primary-500 group-hover:text-secondary-500 font-semibold text-sm transition-colors">
      {{ $t('services.learnMore') }}
      <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </div>
  </router-link>
</template>

<script setup lang="ts">
interface Service {
  slug: string
  title: string
  description: string
  icon: string
  pricing?: string
}

defineProps<{
  service: Service
}>()
</script>
