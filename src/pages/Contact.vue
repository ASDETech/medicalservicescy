<template>
  <div>
    <section class="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ $t('contact.title') }}
        </h1>
        <p class="text-xl text-white/90">
          {{ $t('contact.subtitle') }}
        </p>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-accent-500">
          <h2 class="text-3xl font-bold text-gray-900 mb-2 text-center">
            {{ $t('contact.booking.title') }}
          </h2>
          <p class="text-gray-600 mb-8 text-center">
            {{ $t('contact.booking.subtitle') }}
          </p>
          <form @submit.prevent="handleBookingSubmit" class="space-y-6">
            <div>
              <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.booking.service') }}
              </label>
              <select
                id="service"
                v-model="bookingForm.service"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">{{ $t('contact.booking.servicePlaceholder') }}</option>
                <option value="homecare">{{ $t('services.homecare.title') }}</option>
                <option value="ambulance">{{ $t('services.ambulance.title') }}</option>
                <option value="events">{{ $t('services.events.title') }}</option>
                <option value="wheelchair">{{ $t('services.wheelchair.title') }}</option>
                <option value="equipment">{{ $t('services.equipment.title') }}</option>
              </select>
            </div>

            <div>
              <label for="location" class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.booking.location') }}
              </label>
              <input
                id="location"
                v-model="bookingForm.location"
                type="text"
                required
                :placeholder="$t('contact.booking.locationPlaceholder')"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="datetime" class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.booking.datetime') }}
              </label>
              <input
                id="datetime"
                v-model="bookingForm.datetime"
                type="datetime-local"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="booking-name" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.booking.name') }}
                </label>
                <input
                  id="booking-name"
                  v-model="bookingForm.name"
                  type="text"
                  required
                  :placeholder="$t('contact.booking.namePlaceholder')"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label for="booking-phone" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.booking.phone') }}
                </label>
                <input
                  id="booking-phone"
                  v-model="bookingForm.phone"
                  type="tel"
                  required
                  :placeholder="$t('contact.booking.phonePlaceholder')"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label for="booking-email" class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.booking.email') }}
              </label>
              <input
                id="booking-email"
                v-model="bookingForm.email"
                type="email"
                required
                :placeholder="$t('contact.booking.emailPlaceholder')"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="notes" class="block text-sm font-medium text-gray-700 mb-2">
                {{ $t('contact.booking.notes') }}
              </label>
              <textarea
                id="notes"
                v-model="bookingForm.notes"
                rows="4"
                :placeholder="$t('contact.booking.notesPlaceholder')"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="bookingLoading"
              class="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ bookingLoading ? 'Processing...' : $t('contact.booking.submit') }}
            </button>

            <div v-if="bookingSuccess" class="bg-gradient-to-r from-green-50 to-accent-50 border-2 border-accent-500 rounded-lg p-4 text-accent-800 font-semibold">
              {{ $t('contact.booking.success') }}
            </div>

            <div v-if="bookingError" class="bg-gradient-to-r from-red-50 to-primary-50 border-2 border-primary-500 rounded-lg p-4 text-primary-800 font-semibold">
              {{ $t('contact.booking.error') }}
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ $t('contact.form.submit') }}
            </h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.name') }}
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.email') }}
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.phone') }}
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.message') }}
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary-500 transition-colors"
              >
                {{ $t('contact.form.submit') }}
              </button>

              <div v-if="submitted" class="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                {{ $t('contact.form.success') }}
              </div>
            </form>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ $t('contact.info.title') }}
            </h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                  <a :href="`mailto:${$t('topBar.email')}`" class="text-primary-500 hover:text-secondary-500">
                    {{ $t('topBar.email') }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ $t('contact.info.emergency') }}</h3>
                  <a :href="`tel:${$t('topBar.phone').replace(/\s/g, '')}`" class="text-primary-500 hover:text-secondary-500 text-lg font-semibold">
                    {{ $t('topBar.phone') }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Location</h3>
                  <p class="text-gray-600">{{ $t('contact.info.address') }}</p>
                </div>
              </div>
            </div>

            <div class="mt-8 bg-primary-50 rounded-lg p-6">
              <h3 class="font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div class="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bookingForm = ref({
  service: '',
  location: '',
  datetime: '',
  name: '',
  phone: '',
  email: '',
  notes: ''
})

const bookingLoading = ref(false)
const bookingSuccess = ref(false)
const bookingError = ref(false)

const handleBookingSubmit = async () => {
  bookingLoading.value = true
  bookingSuccess.value = false
  bookingError.value = false

  try {
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingForm.value)
    })

    if (response.ok) {
      bookingSuccess.value = true
      bookingForm.value = {
        service: '',
        location: '',
        datetime: '',
        name: '',
        phone: '',
        email: '',
        notes: ''
      }
      setTimeout(() => {
        bookingSuccess.value = false
      }, 5000)
    } else {
      bookingError.value = true
    }
  } catch (error) {
    bookingError.value = true
  } finally {
    bookingLoading.value = false
  }
}

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
  setTimeout(() => {
    submitted.value = false
  }, 5000)
}
</script>
