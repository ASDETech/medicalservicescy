<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-accent-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <router-link to="/" class="flex items-center gap-3 group">
          <img src="/images/medical-services-cy-logo copy.png" alt="Medical Services Cyprus" class="h-14 w-auto transition-transform duration-300 group-hover:scale-110">
        </router-link>

        <div class="hidden lg:flex items-center gap-2">
          <router-link
            to="/"
            class="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 group"
            :class="{ 'text-primary-600 bg-primary-50': $route.path === '/' }"
          >
            <span class="relative z-10">{{ $t('nav.home') }}</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"
              :class="{ 'w-3/4': $route.path === '/' }"
            ></span>
          </router-link>
          <router-link
            to="/services"
            class="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 group"
            :class="{ 'text-primary-600 bg-primary-50': $route.path.startsWith('/services') }"
          >
            <span class="relative z-10">{{ $t('nav.services') }}</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"
              :class="{ 'w-3/4': $route.path.startsWith('/services') }"
            ></span>
          </router-link>
          <router-link
            to="/about"
            class="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 group"
            :class="{ 'text-primary-600 bg-primary-50': $route.path === '/about' }"
          >
            <span class="relative z-10">{{ $t('nav.about') }}</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"
              :class="{ 'w-3/4': $route.path === '/about' }"
            ></span>
          </router-link>
          <router-link
            to="/contact"
            class="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 group"
            :class="{ 'text-primary-600 bg-primary-50': $route.path === '/contact' }"
          >
            <span class="relative z-10">{{ $t('nav.contact') }}</span>
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"
              :class="{ 'w-3/4': $route.path === '/contact' }"
            ></span>
          </router-link>
          <a
            href="#book"
            class="ml-4 relative overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span class="relative z-10 flex items-center gap-2">
              {{ $t('nav.bookOnline') }}
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        <button
          @click="toggleMenu"
          class="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="lg:hidden pb-4 border-t">
          <div class="flex flex-col gap-2 pt-4">
            <router-link
              to="/"
              @click="closeMenu"
              class="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
              :class="{ 'bg-primary-50 text-primary-500': $route.path === '/' }"
            >
              {{ $t('nav.home') }}
            </router-link>
            <router-link
              to="/services"
              @click="closeMenu"
              class="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
              :class="{ 'bg-primary-50 text-primary-500': $route.path.startsWith('/services') }"
            >
              {{ $t('nav.services') }}
            </router-link>
            <router-link
              to="/about"
              @click="closeMenu"
              class="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
              :class="{ 'bg-primary-50 text-primary-500': $route.path === '/about' }"
            >
              {{ $t('nav.about') }}
            </router-link>
            <router-link
              to="/contact"
              @click="closeMenu"
              class="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
              :class="{ 'bg-primary-50 text-primary-500': $route.path === '/contact' }"
            >
              {{ $t('nav.contact') }}
            </router-link>
            <a
              href="#book"
              class="mx-4 mt-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-center"
            >
              {{ $t('nav.bookOnline') }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
