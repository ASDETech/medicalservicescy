<template>
  <div>
    <section class="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ $t('about.title') }}
        </h1>
        <p class="text-xl text-white/90">
          {{ $t('about.subtitle') }}
        </p>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-white to-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-accent-500">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            {{ $t('about.mission.title') }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ $t('about.mission.text') }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          {{ $t('about.ceo.title') }}
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="rounded-lg shadow-xl w-full bg-gradient-to-br from-primary-100 to-secondary-100 aspect-square flex items-center justify-center">
              <svg class="w-32 h-32 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h3 class="text-3xl font-bold text-gray-900 mb-2">
              {{ $t('about.ceo.name') }}
            </h3>
            <p class="text-xl text-primary-500 font-semibold mb-6">
              {{ $t('about.ceo.position') }}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              {{ $t('about.ceo.bio') }}
            </p>
            <router-link
              to="/shop"
              class="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
            >
              {{ $t('about.ceo.cta') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          {{ $t('about.values.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-accent-500">
            <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ $t('about.values.quality') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('about.values.qualityText') }}
            </p>
          </div>

          <div class="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-accent-500">
            <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ $t('about.values.available') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('about.values.availableText') }}
            </p>
          </div>

          <div class="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-accent-500">
            <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ $t('about.values.professional') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('about.values.professionalText') }}
            </p>
          </div>

          <div class="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-accent-500">
            <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ $t('about.values.trust') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('about.values.trustText') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
