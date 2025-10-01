<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <router-link to="/" class="flex items-center gap-3">
          <img src="/medical-services-cy-logo.png" alt="Medical Services Cyprus" class="h-12 w-auto">
          <div class="hidden md:block">
            <div class="text-xl font-bold text-primary-500">Medical Services Cyprus</div>
            <div class="text-xs text-gray-600">Professional Healthcare Solutions</div>
          </div>
        </router-link>

        <div class="hidden lg:flex items-center gap-8">
          <router-link
            to="/"
            class="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            :class="{ 'text-primary-500': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link
            to="/services"
            class="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            :class="{ 'text-primary-500': $route.path.startsWith('/services') }"
          >
            Services
          </router-link>
          <router-link
            to="/about"
            class="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            :class="{ 'text-primary-500': $route.path === '/about' }"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            :class="{ 'text-primary-500': $route.path === '/contact' }"
          >
            Contact
          </router-link>
          <a
            href="tel:+35799123456"
            class="bg-primary-500 text-white px-6 py-2.5 rounded-full hover:bg-secondary-500 transition-colors font-medium"
          >
            Emergency Call
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
              Home
            </router-link>
            <router-link
              to="/services"
              @click="closeMenu"
              class="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
              :class="{ 'bg-primary-50 text-primary-500': $route.path.startsWith('/services') }"
            >
              Services
            </router-link>
            <router-link
              to="/about"
              @click="closeMenu"
              class="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
              :class="{ 'bg-primary-50 text-primary-500': $route.path === '/about' }"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              @click="closeMenu"
              class="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
              :class="{ 'bg-primary-50 text-primary-500': $route.path === '/contact' }"
            >
              Contact
            </router-link>
            <a
              href="tel:+35799123456"
              class="mx-4 mt-2 bg-primary-500 text-white px-6 py-2.5 rounded-full hover:bg-secondary-500 transition-colors font-medium text-center"
            >
              Emergency Call
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
