<template>
  <footer class="bg-gradient-to-br from-dark-600 to-dark-900 text-white py-16 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="/medical-services-cy-logo.png" alt="Medical Services Cyprus" class="h-12 w-auto">
            <div>
              <div class="text-lg font-bold">Medical Services</div>
              <div class="text-xs text-accent-300 uppercase tracking-wider">Cyprus</div>
            </div>
          </div>
          <p class="text-white/70 text-sm leading-relaxed mb-6">
            Professional emergency medical services in Cyprus. Available 24/7 to serve and protect our community.
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-500 transition-all hover:-translate-y-1" aria-label="Facebook">
              <span>📘</span>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-500 transition-all hover:-translate-y-1" aria-label="Instagram">
              <span>📷</span>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-500 transition-all hover:-translate-y-1" aria-label="LinkedIn">
              <span>💼</span>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-white/70 hover:text-accent-300 transition-all hover:translate-x-1 inline-block">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-white/70 hover:text-accent-300 transition-all hover:translate-x-1 inline-block">
                Services
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-white/70 hover:text-accent-300 transition-all hover:translate-x-1 inline-block">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-white/70 hover:text-accent-300 transition-all hover:translate-x-1 inline-block">
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Our Services</h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/services/ambulance-services" class="text-white/70 hover:text-accent-300 transition-all hover:translate-x-1 inline-block">
                Ambulance Services
              </router-link>
            </li>
            <li>
              <router-link to="/services/events-safety" class="text-white/70 hover:text-accent-300 transition-all hover:translate-x-1 inline-block">
                Events Safety
              </router-link>
            </li>
            <li>
              <router-link to="/services/home-care-services" class="text-white/70 hover:text-accent-300 transition-all hover:translate-x-1 inline-block">
                Home Care
              </router-link>
            </li>
            <li>
              <router-link to="/services/trainings" class="text-white/70 hover:text-accent-300 transition-all hover:translate-x-1 inline-block">
                Medical Trainings
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-4">
            <li class="flex gap-3 items-start text-white/70 text-sm">
              <span class="text-lg flex-shrink-0">📞</span>
              <a href="tel:+35799123456" class="hover:text-accent-300 transition-colors">+357 99 123 456</a>
            </li>
            <li class="flex gap-3 items-start text-white/70 text-sm">
              <span class="text-lg flex-shrink-0">✉️</span>
              <a href="mailto:info@medicalservices.cy" class="hover:text-accent-300 transition-colors">info@medicalservices.cy</a>
            </li>
            <li class="flex gap-3 items-start text-white/70 text-sm">
              <span class="text-lg flex-shrink-0">📍</span>
              <span>Limassol<br>Cyprus</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-white/60 text-sm">
        <p>&copy; {{ currentYear }} Medical Services Cyprus. All rights reserved.</p>
        <div class="flex gap-6 items-center">
          <a href="#" class="hover:text-accent-300 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" class="hover:text-accent-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
