<script setup>
import NavigationBar from './components/NavigationBar.vue';
import HeroSlider from './components/HeroSlider.vue';
import ContactUs from './components/ContactUs.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-neutral-50">
    <NavigationBar />
  </header>
  <main>
    <HeroSlider />
    <ContactUs />
  </main>
  <footer class="bg-neutral-900 text-neutral-50">
    <FooterSection />
  </footer>
</template>

<style scoped>

</style>
