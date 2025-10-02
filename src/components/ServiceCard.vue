<template>
  <router-link
    :to="`/services/${service.slug}`"
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center text-center group"
  >
    <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
      <svg v-if="service.icon === 'ambulance'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      <svg v-else-if="service.icon === 'home'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      <svg v-else-if="service.icon === 'emergency'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
      <svg v-else-if="service.icon === 'consultation'" class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    </div>
    <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors">
      {{ service.title }}
    </h3>
    <p class="text-gray-600 text-sm">
      {{ service.description }}
    </p>
  </router-link>
</template>

<script setup lang="ts">
interface Service {
  slug: string
  title: string
  description: string
  icon: string
}

defineProps<{
  service: Service
}>()
</script>
