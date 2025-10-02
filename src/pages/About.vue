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

    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
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
          {{ $t('about.values.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
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

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
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

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
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

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
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
