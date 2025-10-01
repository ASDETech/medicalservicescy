<template>
  <div>
    <section class="relative bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white py-24 md:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTIwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTIwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wIDIwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMjAgMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Medical Services
              <span class="block text-primary-200">Available 24/7</span>
            </h1>
            <p class="text-lg md:text-xl text-white/90 leading-relaxed">
              Comprehensive healthcare solutions including emergency ambulance services, home care, event medical coverage, and specialized maritime health services across Cyprus.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+35799123456"
                class="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full hover:bg-primary-50 transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>📞</span>
                Emergency Call
              </a>
              <router-link
                to="/services"
                class="inline-flex items-center justify-center gap-2 bg-primary-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-primary-800 transition-all font-semibold border-2 border-white/30"
              >
                Our Services
                <span>→</span>
              </router-link>
            </div>
          </div>
          <div class="hidden md:flex justify-center">
            <div class="relative">
              <div class="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
              <div class="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center">
                    <div class="text-4xl font-bold">24/7</div>
                    <div class="text-sm text-white/80">Emergency</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold">100+</div>
                    <div class="text-sm text-white/80">Professionals</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold">15+</div>
                    <div class="text-sm text-white/80">Years Experience</div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-bold">6</div>
                    <div class="text-sm text-white/80">Core Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical solutions tailored to meet diverse healthcare needs across Cyprus.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <section class="py-20 bg-primary-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="text-2xl font-bold mb-3">Our Mission</h3>
            <p class="text-white/80 leading-relaxed">
              To provide exceptional medical services with compassion, professionalism, and cutting-edge care to every patient.
            </p>
          </div>
          <div>
            <div class="text-5xl mb-4">👁️</div>
            <h3 class="text-2xl font-bold mb-3">Our Vision</h3>
            <p class="text-white/80 leading-relaxed">
              To be Cyprus's leading healthcare provider, setting standards for emergency and specialized medical services.
            </p>
          </div>
          <div>
            <div class="text-5xl mb-4">⭐</div>
            <h3 class="text-2xl font-bold mb-3">Our Values</h3>
            <p class="text-white/80 leading-relaxed">
              Excellence, integrity, compassion, and commitment to continuous improvement in all aspects of care.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Emergency Medical Assistance?</h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to respond to your medical emergencies. Don't hesitate to reach out.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+35799123456"
              class="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full hover:bg-primary-50 transition-all font-bold text-lg shadow-xl"
            >
              <span>📞</span>
              Call Now: +357 99 123 456
            </a>
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-full hover:bg-primary-900 transition-all font-semibold border-2 border-white/30"
            >
              Contact Us
              <span>→</span>
            </router-link>
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
