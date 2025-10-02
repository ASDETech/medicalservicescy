<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <ServiceCard
      v-for="service in services"
      :key="service.slug"
      :service="service"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ServiceCard from './ServiceCard.vue'

const { t } = useI18n()

const services = computed(() => [
  {
    slug: 'ambulance',
    title: t('services.ambulance.title'),
    description: t('services.ambulance.description'),
    icon: 'ambulance'
  },
  {
    slug: 'homecare',
    title: t('services.homecare.title'),
    description: t('services.homecare.description'),
    icon: 'home'
  },
  {
    slug: 'emergency',
    title: t('services.emergency.title'),
    description: t('services.emergency.description'),
    icon: 'emergency'
  },
  {
    slug: 'consultation',
    title: t('services.consultation.title'),
    description: t('services.consultation.description'),
    icon: 'consultation'
  }
])
</script>
