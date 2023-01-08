<script setup>
import NavigationBar from './components/NavigationBar.vue';
import HeroSlider from './components/HeroSlider.vue';
import ContactUs from './components/ContactUs.vue';
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-neutral-50">
    <NavigationBar />
  </header>
  <main>
    <HeroSlider />
    <ContactUs />
  </main>
</template>

<style scoped>

</style>
