<template>
  <div>
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Get in touch with our team. We're here to help 24/7.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Fill out the form below and our team will get back to you as soon as possible. For emergencies, please call our 24/7 hotline.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="+357 99 123 456"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              <p v-if="submitMessage" class="text-center" :class="submitSuccess ? 'text-green-600' : 'text-red-600'">
                {{ submitMessage }}
              </p>
            </form>
          </div>

          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex gap-4 items-start">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Emergency Hotline</h3>
                    <a href="tel:+35799123456" class="text-primary-600 hover:text-primary-700 font-medium text-lg">
                      +357 99 123 456
                    </a>
                    <p class="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div class="flex gap-4 items-start">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@medicalservices.cy" class="text-primary-600 hover:text-primary-700 font-medium">
                      info@medicalservices.cy
                    </a>
                    <p class="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div class="flex gap-4 items-start">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Location</h3>
                    <p class="text-gray-600">
                      Limassol<br>
                      Cyprus
                    </p>
                  </div>
                </div>

                <div class="flex gap-4 items-start">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p class="text-gray-600">
                      Emergency Services: 24/7<br>
                      Administrative: Mon-Fri, 9am-5pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 class="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p class="text-white/90 mb-6">
                For medical emergencies, don't wait. Call our emergency hotline now for immediate response.
              </p>
              <a
                href="tel:+35799123456"
                class="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full hover:bg-primary-50 transition-all font-bold shadow-xl w-full"
              >
                <span>📞</span>
                Emergency Call
              </a>
            </div>

            <div class="bg-gray-50 rounded-2xl p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div class="flex gap-4">
                <a href="#" class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all shadow-md hover:shadow-lg">
                  <span>📘</span>
                </a>
                <a href="#" class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all shadow-md hover:shadow-lg">
                  <span>📷</span>
                </a>
                <a href="#" class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all shadow-md hover:shadow-lg">
                  <span>💼</span>
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

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    submitSuccess.value = true
    submitMessage.value = 'Thank you for your message! We will get back to you soon.'

    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'There was an error sending your message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
