<template>
  <header :class="['header', { 'header-scrolled': isScrolled }]">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <span class="logo-icon">🚑</span>
          <span class="logo-text">
            <strong>Medical Services</strong>
            <span class="logo-subtitle">Cyprus</span>
          </span>
        </div>

        <button class="nav-toggle" @click="toggleMenu" :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul :class="['nav-menu', { 'nav-menu-open': isMenuOpen }]">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#services" @click="closeMenu">Services</a></li>
          <li><a href="#about" @click="closeMenu">About</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
          <li>
            <a href="tel:+35725123456" class="btn btn-primary nav-cta">
              📞 Emergency Call
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--spacing-md) 0;
  transition: all var(--transition-normal);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.header-scrolled {
  padding: var(--spacing-sm) 0;
  box-shadow: var(--shadow-md);
  background: rgba(255, 255, 255, 0.98);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1.5rem;
  color: var(--color-primary);
  cursor: pointer;
}

.logo-icon {
  font-size: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-text strong {
  font-size: 1.25rem;
  color: var(--color-bg-dark);
}

.logo-subtitle {
  font-size: 0.75rem;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  padding: var(--spacing-xs);
  z-index: 1001;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: var(--color-primary);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
  align-items: center;
}

.nav-menu li a {
  font-weight: 500;
  color: var(--color-text);
  position: relative;
  padding: var(--spacing-xs) 0;
  transition: color var(--transition-fast);
}

.nav-menu li a:not(.btn)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-normal);
}

.nav-menu li a:not(.btn):hover {
  color: var(--color-primary);
}

.nav-menu li a:not(.btn):hover::after {
  width: 100%;
}

.nav-cta {
  white-space: nowrap;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--color-bg);
    flex-direction: column;
    padding: var(--spacing-3xl) var(--spacing-lg);
    box-shadow: var(--shadow-xl);
    transition: right var(--transition-normal);
    align-items: flex-start;
  }

  .nav-menu-open {
    right: 0;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu li a {
    display: block;
    padding: var(--spacing-sm) 0;
    font-size: 1.125rem;
  }

  .nav-cta {
    width: 100%;
    margin-top: var(--spacing-md);
  }
}
</style>
