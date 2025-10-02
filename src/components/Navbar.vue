<template>
  <nav>
    <router-link to="/">{{ $t('nav.home') }}</router-link>
    <router-link to="/about">{{ $t('nav.about') }}</router-link>
    <router-link to="/services">{{ $t('nav.services') }}</router-link>
    <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
  </nav>
</template>

<script setup lang="ts">
</script>
