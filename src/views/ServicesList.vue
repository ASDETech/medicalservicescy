<template>
  <div>
    <section class="bg-gradient-to-br from-primary-500 to-primary-500 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Comprehensive healthcare solutions designed to meet your needs, from emergency response to specialized care and training.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing a Service?</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Our team is here to guide you in selecting the right medical service for your needs. Contact us for personalized recommendations.
              </p>
              <router-link
                to="/contact"
                class="inline-flex items-center gap-2 bg-gray-1000 text-white px-8 py-3 rounded-full hover:bg-gray-1000 transition-colors font-semibold"
              >
                Get in Touch
                <span>→</span>
              </router-link>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-100 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-500">24/7</div>
                <div class="text-sm text-gray-600 mt-1">Availability</div>
              </div>
              <div class="bg-gray-100 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-500">100%</div>
                <div class="text-sm text-gray-600 mt-1">Professional</div>
              </div>
              <div class="bg-gray-100 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-500">Fast</div>
                <div class="text-sm text-gray-600 mt-1">Response</div>
              </div>
              <div class="bg-gray-100 rounded-xl p-6 text-center">
                <div class="text-3xl font-bold text-primary-500">Expert</div>
                <div class="text-sm text-gray-600 mt-1">Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../data/services'
</script>
