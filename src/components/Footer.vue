<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-icon">🚑</span>
            <div class="logo-text">
              <strong>Medical Services</strong>
              <span>Cyprus</span>
            </div>
          </div>
          <p class="footer-description">
            Professional emergency medical services in Limassol. Available 24/7 to serve and protect our community.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">📘</a>
            <a href="#" class="social-link" aria-label="Instagram">📷</a>
            <a href="#" class="social-link" aria-label="Twitter">🐦</a>
            <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Services</h4>
          <ul class="footer-links">
            <li><a href="#services">Emergency Transport</a></li>
            <li><a href="#services">Medical Transfers</a></li>
            <li><a href="#services">Event Coverage</a></li>
            <li><a href="#services">Home Healthcare</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Contact Info</h4>
          <ul class="footer-contact">
            <li>
              <span class="contact-icon">📞</span>
              <a href="tel:+35725123456">+357 25 123 456</a>
            </li>
            <li>
              <span class="contact-icon">📧</span>
              <a href="mailto:info@medicalservicescy.com">info@medicalservicescy.com</a>
            </li>
            <li>
              <span class="contact-icon">📍</span>
              <span>123 Medical Avenue<br>Limassol, Cyprus</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Medical Services Cyprus. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--color-bg-dark) 0%, #0f2847 100%);
  color: var(--color-text-inverse);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
  margin-top: var(--spacing-3xl);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-text strong {
  font-size: 1.25rem;
  color: white;
}

.logo-text span {
  font-size: 0.75rem;
  color: var(--color-secondary-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 1.25rem;
  transition: all var(--transition-normal);
}

.social-link:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
}

.footer-title {
  color: white;
  font-size: 1.125rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  transition: all var(--transition-fast);
  display: inline-block;
}

.footer-links a:hover {
  color: var(--color-secondary-light);
  transform: translateX(5px);
}

.footer-contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-contact li {
  display: flex;
  gap: var(--spacing-sm);
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.contact-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.7);
  transition: color var(--transition-fast);
}

.footer-contact a:hover {
  color: var(--color-secondary-light);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-lg);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

.footer-bottom-links {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.6);
  transition: color var(--transition-fast);
}

.footer-bottom-links a:hover {
  color: var(--color-secondary-light);
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }

  .footer-section:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
}
</style>
