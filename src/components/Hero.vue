<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="hero-gradient"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <span class="hero-badge">Available 24/7</span>
          <h1 class="hero-title">
            Professional <span class="text-gradient">Medical Services</span> in Limassol
          </h1>
          <p class="hero-description">
            Expert ambulance and emergency medical care you can trust. Fast response times,
            highly trained paramedics, and state-of-the-art equipment for your safety.
          </p>
          <div class="hero-actions">
            <a href="tel:+35725123456" class="btn btn-primary btn-lg">
              📞 Emergency: +357 25 123 456
            </a>
            <a href="#services" class="btn btn-outline btn-lg">
              Our Services
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Available</div>
            </div>
            <div class="stat">
              <div class="stat-number">&lt;10min</div>
              <div class="stat-label">Response Time</div>
            </div>
            <div class="stat">
              <div class="stat-number">15+</div>
              <div class="stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        <div class="hero-image">
          <div class="ambulance-illustration">
            <div class="ambulance-icon">🚑</div>
            <div class="pulse-circle pulse-1"></div>
            <div class="pulse-circle pulse-2"></div>
            <div class="pulse-circle pulse-3"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
    #e3f2fd 0%,
    #fff 40%,
    #fff8e1 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero-text {
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: linear-gradient(135deg, var(--color-success), #00b894);
  color: white;
  border-radius: var(--border-radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  box-shadow: var(--shadow-md);
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  color: var(--color-bg-dark);
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.btn-lg {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: 1.125rem;
}

.hero-stats {
  display: flex;
  gap: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.ambulance-illustration {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ambulance-icon {
  font-size: 8rem;
  position: relative;
  z-index: 2;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.pulse-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid var(--color-primary);
  opacity: 0;
  animation: pulse 3s ease-out infinite;
}

.pulse-1 {
  animation-delay: 0s;
}

.pulse-2 {
  animation-delay: 1s;
}

.pulse-3 {
  animation-delay: 2s;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
    min-height: auto;
    padding-bottom: var(--spacing-3xl);
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .hero-text {
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .ambulance-illustration {
    width: 200px;
    height: 200px;
  }

  .ambulance-icon {
    font-size: 5rem;
  }

  .btn-lg {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: 1rem;
  }
}
</style>
