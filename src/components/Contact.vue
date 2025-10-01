<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-subtitle">
        Have questions or need to schedule a non-emergency service? We're here to help 24/7.
      </p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card emergency">
            <div class="info-icon">🚨</div>
            <h3 class="info-title">Emergency Line</h3>
            <a href="tel:+35725123456" class="info-value">+357 25 123 456</a>
            <p class="info-note">Available 24/7 for emergencies</p>
          </div>

          <div class="info-card">
            <div class="info-icon">📞</div>
            <h3 class="info-title">General Inquiries</h3>
            <a href="tel:+35725123457" class="info-value">+357 25 123 457</a>
            <p class="info-note">Mon-Fri, 8:00 AM - 6:00 PM</p>
          </div>

          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3 class="info-title">Email Us</h3>
            <a href="mailto:info@medicalservicescy.com" class="info-value">info@medicalservicescy.com</a>
            <p class="info-note">We'll respond within 24 hours</p>
          </div>

          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3 class="info-title">Location</h3>
            <p class="info-value">123 Medical Avenue<br>Limassol, 3025<br>Cyprus</p>
            <p class="info-note">Visit us Mon-Fri, 9:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                placeholder="John Doe"
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  required
                  placeholder="+357 99 123 456"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="service">Service Needed</label>
              <select id="service" v-model="formData.service" required>
                <option value="">Select a service</option>
                <option value="emergency">Emergency Transport</option>
                <option value="transfer">Medical Transfer</option>
                <option value="event">Event Coverage</option>
                <option value="home">Home Healthcare</option>
                <option value="equipment">Equipment Rental</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                required
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>

            <p v-if="submitMessage" :class="['submit-message', submitStatus]">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))

    submitMessage.value = 'Thank you! Your message has been sent successfully. We will contact you soon.'
    submitStatus.value = 'success'

    Object.keys(formData).forEach(key => {
      formData[key as keyof typeof formData] = ''
    })
  } catch (error) {
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again or call us directly.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}
</script>

<style scoped>
.contact {
  background: linear-gradient(to bottom, var(--color-bg-secondary), white);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

.contact-info {
  display: grid;
  gap: var(--spacing-lg);
}

.info-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-align: center;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.info-card.emergency {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: white;
}

.info-card.emergency .info-title,
.info-card.emergency .info-value,
.info-card.emergency .info-note {
  color: white;
}

.info-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
  animation: float 3s ease-in-out infinite;
}

.info-card:nth-child(even) .info-icon {
  animation-delay: 1.5s;
}

.info-title {
  font-size: 1.25rem;
  color: var(--color-bg-dark);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.info-value {
  font-size: 1.125rem;
  color: var(--color-primary);
  font-weight: 600;
  display: block;
  margin-bottom: var(--spacing-xs);
  transition: opacity var(--transition-fast);
}

.info-card.emergency .info-value {
  color: white;
  font-size: 1.5rem;
}

.info-value:hover {
  opacity: 0.8;
}

.info-note {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.contact-form-wrapper {
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-group label {
  font-weight: 600;
  color: var(--color-bg-dark);
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 2px solid #e0e0e0;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  font-family: inherit;
  transition: all var(--transition-fast);
  background: var(--color-bg-secondary);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: white;
  box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  width: 100%;
  padding: var(--spacing-md);
  font-size: 1.125rem;
  margin-top: var(--spacing-sm);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  text-align: center;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submit-message.success {
  background: rgba(6, 214, 160, 0.1);
  color: var(--color-success);
  border: 2px solid var(--color-success);
}

.submit-message.error {
  background: rgba(230, 57, 70, 0.1);
  color: var(--color-error);
  border: 2px solid var(--color-error);
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form-wrapper {
    padding: var(--spacing-xl);
  }
}
</style>
