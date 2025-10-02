<template>
  <div v-if="service">
    <section class="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center mb-4">
          <div class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <component :is="service.iconComponent" class="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">
          {{ service.title }}
        </h1>
        <p class="text-xl text-white/90 text-center max-w-3xl mx-auto">
          {{ service.subtitle }}
        </p>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-accent-500">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            {{ service.description }}
          </p>

          <div v-if="service.features && service.features.length > 0" class="mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
            <ul class="space-y-3">
              <li
                v-for="(feature, index) in service.features"
                :key="index"
                class="flex items-start gap-3 text-gray-700"
              >
                <svg class="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-lg">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div v-if="service.pricing" class="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-6 mb-8 border-2 border-accent-300">
            <div class="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">Pricing</h3>
                <p class="text-accent-700 text-2xl font-bold">{{ service.pricing }}</p>
              </div>
              <svg class="w-12 h-12 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>

          <div v-if="service.equipment && service.equipment.length > 0" class="mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Available Equipment</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(item, index) in service.equipment"
                :key="index"
                class="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border-2 border-gray-200 hover:border-accent-500 transition-all duration-300 hover:shadow-lg"
              >
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-bold text-gray-900 mb-1">{{ item.name }}</h4>
                    <p class="text-accent-600 font-semibold">{{ item.price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 mt-10">
            <router-link
              to="/contact"
              class="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Book This Service Now
            </router-link>
            <router-link
              to="/services"
              class="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-center hover:border-accent-500 hover:text-accent-600 transition-all duration-300 text-lg"
            >
              View All Services
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
      <p class="text-lg text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
      <router-link
        to="/services"
        class="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
      >
        View All Services
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const HomeCareIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
])

const AmbulanceIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])

const EventIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' })
])

const WheelchairIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' })
])

const EquipmentIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' })
])

const serviceData: Record<string, any> = {
  'homecare': {
    title: 'Home Care Services',
    subtitle: 'Professional medical care delivered to your home or hotel',
    description: 'Our home care services bring professional medical assistance directly to your doorstep. Whether you need routine medical care, post-operative support, or assistance during recovery, our certified healthcare professionals provide personalized attention in the comfort of your home or hotel. We understand that healing happens best in familiar surroundings, and our team is dedicated to making quality healthcare accessible wherever you are.',
    features: [
      'Certified and experienced medical professionals',
      'Personalized care plans tailored to your needs',
      'Available for homes, hotels, and residential facilities',
      'Regular health monitoring and medication management',
      'Post-operative care and recovery support',
      'Flexible scheduling to fit your routine',
      '24/7 emergency support available'
    ],
    iconComponent: HomeCareIcon
  },
  'ambulance-transports': {
    title: 'Ambulance Transport Services',
    subtitle: 'Emergency and scheduled ambulance services 24/7',
    description: 'Our ambulance transport services provide safe and efficient medical transportation across Cyprus. Whether it\'s an emergency situation requiring immediate response or a scheduled medical appointment, our fleet of modern, fully-equipped ambulances and trained paramedics ensure you receive the care you need during transit. We operate 24/7, ready to respond to any medical transportation need.',
    features: [
      'Modern, fully-equipped ambulances',
      'Certified paramedics and emergency medical technicians',
      '24/7 availability for emergency calls',
      'Scheduled transport for medical appointments',
      'Inter-hospital transfers',
      'Airport medical transport services',
      'Advanced life support capabilities',
      'GPS tracking for efficient routing',
      'Insurance accepted and direct billing available'
    ],
    iconComponent: AmbulanceIcon
  },
  'ambulance-events': {
    title: 'Event Medical Coverage',
    subtitle: 'On-site ambulance and medical support for your events',
    description: 'Ensure the safety and well-being of your event attendees with our professional medical coverage services. From sporting events and concerts to corporate gatherings and festivals, we provide fully-staffed ambulances and medical teams ready to respond to any situation. Our presence gives organizers peace of mind and attendees confidence that medical help is immediately available if needed.',
    features: [
      'Dedicated on-site ambulance with medical crew',
      'Certified paramedics and first responders',
      'First aid station setup and management',
      'Immediate response to medical emergencies',
      'Customized medical plans based on event type',
      'Suitable for sporting events, concerts, festivals, and corporate events',
      'Coordination with local hospitals if needed',
      'Professional and discreet medical presence',
      'Equipment for various medical scenarios'
    ],
    pricing: 'Contact us for event-specific quotes',
    iconComponent: EventIcon
  },
  'wheelchair-car': {
    title: 'Wheelchair Accessible Transport',
    subtitle: 'Safe and comfortable mobility solutions',
    description: 'Our wheelchair accessible vehicles provide safe, comfortable, and dignified transportation for individuals with mobility challenges. Whether for medical appointments, social outings, or airport transfers, our specially-equipped vehicles and trained drivers ensure a smooth journey. We understand the unique needs of wheelchair users and prioritize comfort, safety, and respect in every trip.',
    features: [
      'Vehicles equipped with wheelchair lifts and securing systems',
      'Trained drivers experienced in mobility assistance',
      'Comfortable and spacious interiors',
      'Door-to-door service',
      'Medical appointments and hospital visits',
      'Airport transfers and travel assistance',
      'Social and recreational outings',
      'Advance booking and flexible scheduling',
      'Competitive rates and transparent pricing'
    ],
    iconComponent: WheelchairIcon
  },
  'equipment-rental': {
    title: 'Medical Equipment Rental',
    subtitle: 'Quality medical equipment for short-term needs',
    description: 'Access high-quality medical equipment without the commitment of purchasing. Our rental service provides clean, well-maintained medical devices for recovery, rehabilitation, or temporary medical needs. From mobility aids to respiratory equipment, we offer a wide range of medical devices with flexible rental periods to suit your timeline and budget.',
    features: [
      'Wide selection of medical equipment',
      'Thoroughly cleaned and sanitized before delivery',
      'Flexible rental periods (daily, weekly, monthly)',
      'Free delivery and pickup within service areas',
      'Equipment usage instructions provided',
      'Maintenance and replacement service during rental',
      'Insurance documentation available',
      'Affordable rates with no hidden fees'
    ],
    pricing: 'Starting from €15/day',
    equipment: [
      { name: 'Standard Wheelchair', price: '€15/day' },
      { name: 'Electric Wheelchair', price: '€35/day' },
      { name: 'Walker with Wheels', price: '€10/day' },
      { name: 'Crutches (Pair)', price: '€8/day' },
      { name: 'Hospital Bed', price: '€45/day' },
      { name: 'Oxygen Concentrator', price: '€40/day' },
      { name: 'Bedside Commode', price: '€12/day' },
      { name: 'Blood Pressure Monitor', price: '€8/day' }
    ],
    iconComponent: EquipmentIcon
  }
}

const service = computed(() => {
  const slug = route.params.slug as string
  return serviceData[slug] || null
})
</script>
