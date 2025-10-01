<template>
  <div v-if="service">
    <section class="bg-gradient-to-br from-primary-500 to-primary-500 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-6">
          <router-link
            to="/services"
            class="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span>←</span>
            Back to Services
          </router-link>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-6xl mb-6">{{ service.icon }}</div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ service.title }}</h1>
            <p class="text-xl text-white/90 leading-relaxed">{{ service.description }}</p>
          </div>
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 class="text-2xl font-bold mb-6">Key Features</h3>
            <ul class="space-y-3">
              <li v-for="feature in service.features" :key="feature" class="flex items-start gap-3">
                <span class="text-green-400 text-xl mt-0.5">✓</span>
                <span class="text-lg">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-primary-500 mb-12 text-center">Service Details</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="detail in service.details"
            :key="detail.title"
            class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <h3 class="text-xl font-bold text-primary-500 mb-4">{{ detail.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ detail.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-primary-500 to-primary-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p class="text-xl text-white/90 mb-8">
            Contact us today to learn more about {{ service.title.toLowerCase() }} or to schedule a consultation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+35799123456"
              class="inline-flex items-center justify-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold shadow-xl"
            >
              <span>📞</span>
              Call Now
            </a>
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center gap-2 bg-secondary-500 text-white px-8 py-4 rounded-full hover:bg-secondary-600 transition-all font-semibold border-2 border-white/30"
            >
              Contact Us
              <span>→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-primary-500 mb-12 text-center">Explore Other Services</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            v-for="otherService in otherServices"
            :key="otherService.id"
            :service="otherService"
          />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-primary-500 mb-4">Service Not Found</h1>
      <router-link to="/services" class="text-primary-500 hover:text-primary-500 font-semibold">
        ← Back to Services
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../data/services'

const route = useRoute()

const service = computed(() => {
  return services.find(s => s.slug === route.params.slug)
})

const otherServices = computed(() => {
  return services.filter(s => s.slug !== route.params.slug).slice(0, 3)
})
</script>
