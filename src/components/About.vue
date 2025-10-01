<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="about-title">Why Choose Medical Services Cyprus?</h2>
          <p class="about-description">
            With over 15 years of experience serving the Limassol community, we've become the trusted name in emergency medical services. Our commitment to excellence and patient care sets us apart.
          </p>
          <p class="about-description">
            We operate state-of-the-art ambulances equipped with the latest medical technology and staffed by highly trained paramedics who are ready to respond to any emergency, day or night.
          </p>

          <div class="features-grid">
            <div v-for="(feature, index) in features" :key="index" class="feature-item">
              <div class="feature-icon">{{ feature.icon }}</div>
              <div class="feature-content">
                <h4 class="feature-title">{{ feature.title }}</h4>
                <p class="feature-text">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about-highlights">
          <div class="highlight-card highlight-primary">
            <div class="highlight-icon">⚡</div>
            <h3 class="highlight-title">Fast Response</h3>
            <p class="highlight-text">Average response time under 10 minutes throughout Limassol region</p>
          </div>

          <div class="highlight-card highlight-secondary">
            <div class="highlight-icon">👨‍⚕️</div>
            <h3 class="highlight-title">Expert Team</h3>
            <p class="highlight-text">Certified paramedics with continuous training and education</p>
          </div>

          <div class="highlight-card highlight-accent">
            <div class="highlight-icon">🏆</div>
            <h3 class="highlight-title">Award Winning</h3>
            <p class="highlight-text">Recognized for excellence in emergency medical services</p>
          </div>

          <div class="highlight-card highlight-success">
            <div class="highlight-icon">💚</div>
            <h3 class="highlight-title">Community First</h3>
            <p class="highlight-text">Dedicated to serving and protecting our Limassol community</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Feature {
  icon: string
  title: string
  description: string
}

const features = ref<Feature[]>([
  {
    icon: '🎓',
    title: 'Certified Professionals',
    description: 'All our paramedics hold international certifications and undergo regular training.'
  },
  {
    icon: '🚑',
    title: 'Modern Fleet',
    description: 'Fully equipped ambulances with advanced life support systems and monitoring equipment.'
  },
  {
    icon: '📱',
    title: 'Easy Communication',
    description: 'Multiple contact channels including phone, mobile app, and online booking.'
  },
  {
    icon: '🌍',
    title: 'Island-Wide Coverage',
    description: 'While based in Limassol, we provide services across Cyprus when needed.'
  }
])
</script>

<style scoped>
.about {
  background: white;
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(230, 57, 70, 0.05) 0%, transparent 70%);
  border-radius: 50%;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

.about-title {
  margin-bottom: var(--spacing-lg);
}

.about-description {
  color: var(--color-text-light);
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
}

.features-grid {
  display: grid;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.feature-item {
  display: flex;
  gap: var(--spacing-md);
  align-items: start;
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-normal);
}

.feature-item:hover {
  transform: translateX(10px);
  background: white;
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.feature-content {
  flex: 1;
}

.feature-title {
  color: var(--color-bg-dark);
  margin-bottom: var(--spacing-xs);
  font-size: 1.125rem;
}

.feature-text {
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.highlight-card {
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  text-align: center;
  transition: all var(--transition-normal);
  animation: fadeInScale 0.6s ease-out backwards;
}

.highlight-card:nth-child(1) { animation-delay: 0.1s; }
.highlight-card:nth-child(2) { animation-delay: 0.2s; }
.highlight-card:nth-child(3) { animation-delay: 0.3s; }
.highlight-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.highlight-card:hover {
  transform: translateY(-5px) scale(1.05);
}

.highlight-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: white;
}

.highlight-secondary {
  background: linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light));
  color: white;
}

.highlight-accent {
  background: linear-gradient(135deg, var(--color-accent), #e76f51);
  color: white;
}

.highlight-success {
  background: linear-gradient(135deg, var(--color-success), #00b894);
  color: white;
}

.highlight-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.highlight-card:nth-child(even) .highlight-icon {
  animation-delay: 1.5s;
}

.highlight-title {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
}

.highlight-text {
  font-size: 0.95rem;
  opacity: 0.95;
  line-height: 1.5;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .feature-item {
    flex-direction: column;
    text-align: center;
  }

  .feature-item:hover {
    transform: translateY(-5px);
  }
}
</style>
