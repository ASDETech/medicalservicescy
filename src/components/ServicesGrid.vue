<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    slug: 'homecare',
    title: t('services.homecare.title'),
    description: t('services.homecare.description'),
    icon: 'homecare'
  },
  {
    slug: 'ambulance',
    title: t('services.ambulance.title'),
    description: t('services.ambulance.description'),
    icon: 'ambulance'
  },
  {
    slug: 'events',
    title: t('services.events.title'),
    description: t('services.events.description'),
    icon: 'events'
  },
  {
    slug: 'wheelchair',
    title: t('services.wheelchair.title'),
    description: t('services.wheelchair.description'),
    icon: 'wheelchair'
  },
  {
    slug: 'equipment',
    title: t('services.equipment.title'),
    description: t('services.equipment.description'),
    icon: 'equipment',
    pricing: t('services.equipment.pricing')
  }
])
</script>
