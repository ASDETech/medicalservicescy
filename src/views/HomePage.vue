<template>
  <div>
    <section class="relative min-h-screen bg-gray-900 text-white py-24 md:py-32 overflow-hidden flex items-center">
      <div class="absolute inset-0 bg-black/60 z-[1]"></div>
      <div class="absolute inset-0 z-0">
        <iframe
          class="w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/9EsMv2-9Dk0?autoplay=1&mute=1&loop=1&playlist=9EsMv2-9Dk0&controls=0&showinfo=0&rel=0&modestbranding=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="space-y-4">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span class="inline-block bg-primary-500 px-6 py-3 rounded-lg shadow-2xl mb-3">Medical Services</span>
                <span class="inline-block bg-primary-500 px-4 py-3 rounded-lg shadow-2xl mb-3 mx-2">&</span>
              </h1>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span class="inline-block bg-primary-500 px-6 py-3 rounded-lg shadow-2xl">Ambulance Services</span>
              </h1>
              <p class="text-2xl md:text-3xl font-semibold pt-2">
                <span class="inline-block bg-accent-500 px-6 py-3 rounded-lg shadow-2xl">Available 24/7</span>
              </p>
            </div>
            <p class="text-lg md:text-xl text-white leading-relaxed bg-black/50 px-6 py-4 rounded-lg backdrop-blur-sm">
              Comprehensive healthcare solutions including emergency ambulance services, home care, event medical coverage, and specialized maritime health services across Cyprus.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+35799123456"
                class="inline-flex items-center justify-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>📞</span>
                Emergency Call
              </a>
              <router-link
                to="/services"
                class="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-full hover:bg-accent-600 transition-all font-semibold shadow-xl border-2 border-white/30"
              >
                Our Services
                <span>→</span>
              </router-link>
            </div>
          </div>
          <div class="hidden md:flex justify-center">
            <div class="relative">
              <div class="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl"></div>
              <div class="relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border-2 border-primary-500/50 shadow-2xl">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-center bg-primary-500/20 rounded-xl p-4 backdrop-blur-sm">
                    <div class="text-4xl font-bold text-accent-300">24/7</div>
                    <div class="text-sm text-white/90">Emergency</div>
                  </div>
                  <div class="text-center bg-primary-500/20 rounded-xl p-4 backdrop-blur-sm">
                    <div class="text-4xl font-bold text-accent-300">100+</div>
                    <div class="text-sm text-white/90">Professionals</div>
                  </div>
                  <div class="text-center bg-primary-500/20 rounded-xl p-4 backdrop-blur-sm">
                    <div class="text-4xl font-bold text-accent-300">15+</div>
                    <div class="text-sm text-white/90">Years Experience</div>
                  </div>
                  <div class="text-center bg-primary-500/20 rounded-xl p-4 backdrop-blur-sm">
                    <div class="text-4xl font-bold text-accent-300">6</div>
                    <div class="text-sm text-white/90">Core Services</div>
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
          <h2 class="text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Services</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical solutions tailored to meet diverse healthcare needs across Cyprus.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
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
        <div class="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Need Emergency Medical Assistance?</h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to respond to your medical emergencies. Don't hesitate to reach out.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+35799123456"
              class="inline-flex items-center justify-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-xl"
            >
              <span>📞</span>
              Call Now: +357 99 123 456
            </a>
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-full hover:bg-accent-600 transition-all font-semibold border-2 border-white/30"
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
