<template>
  <section id="services" class="section services">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">
        Comprehensive emergency medical services tailored to your needs. Available 24/7 with rapid response capabilities.
      </p>

      <div class="services-grid">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="service-icon">{{ service.icon }}</div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="(feature, fIndex) in service.features" :key="fIndex">
              ✓ {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

const services = ref<Service[]>([
  {
    icon: '🚨',
    title: 'Emergency Transport',
    description: 'Rapid response ambulance services for critical situations with advanced life support.',
    features: [
      'Advanced life support equipment',
      'Certified paramedics on board',
      'GPS-tracked for fastest routes',
      'Direct hospital coordination'
    ]
  },
  {
    icon: '🏥',
    title: 'Medical Transfers',
    description: 'Safe and comfortable patient transfers between medical facilities and homes.',
    features: [
      'Inter-hospital transfers',
      'Airport medical transfers',
      'Scheduled appointments',
      'Specialized equipment available'
    ]
  },
  {
    icon: '⚕️',
    title: 'Event Medical Coverage',
    description: 'Professional medical standby services for events, ensuring safety and peace of mind.',
    features: [
      'Sports events coverage',
      'Corporate events',
      'Concerts and festivals',
      'On-site medical team'
    ]
  },
  {
    icon: '💊',
    title: 'Home Healthcare',
    description: 'Quality medical care delivered in the comfort of your home by trained professionals.',
    features: [
      'Nursing care at home',
      'Medical equipment rental',
      'Post-operative care',
      'Chronic disease management'
    ]
  },
  {
    icon: '🩺',
    title: 'Medical Assistance',
    description: 'First aid and medical consultation services for non-emergency situations.',
    features: [
      'Basic medical assessments',
      'Vital signs monitoring',
      'Minor injury treatment',
      'Medical advice'
    ]
  },
  {
    icon: '🔧',
    title: 'Equipment Rental',
    description: 'Medical equipment rental and maintenance services for home care needs.',
    features: [
      'Wheelchairs and walkers',
      'Hospital beds',
      'Oxygen concentrators',
      'Delivery and setup included'
    ]
  }
])
</script>

<style scoped>
.services {
  background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-secondary));
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-xl);
}

.service-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  animation: slideUp 0.6s ease-out backwards;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transform: scaleX(0);
  transition: transform var(--transition-normal);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-secondary-light);
}

.service-card:hover::before {
  transform: scaleX(1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
  display: inline-block;
  animation: bounce 2s ease-in-out infinite;
}

.service-card:nth-child(even) .service-icon {
  animation-delay: 1s;
}

.service-title {
  color: var(--color-bg-dark);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.service-description {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
}

.service-features li {
  padding: var(--spacing-xs) 0;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.95rem;
}

.service-features li::before {
  color: var(--color-success);
  font-weight: bold;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .service-card {
    padding: var(--spacing-lg);
  }

  .service-icon {
    font-size: 3rem;
  }
}
</style>
