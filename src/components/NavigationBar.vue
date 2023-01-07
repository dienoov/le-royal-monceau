<template>
  <header class="navigation-bar flex justify-between items-center relative h-16">
    <nav class="flex items-center">
      <button type="button" @click="toggleMenu" class="block w-8 h-8 mt-2 ml-4 lg:hidden">
        <span class="block bg-neutral-900 w-5 h-0.5 relative
            before:content-[''] before:block before:bg-neutral-900
            before:w-8 before:h-0.5 before:absolute before:-top-[.66rem]
            after:content-[''] after:block after:bg-neutral-900
            after:w-8 after:h-0.5 after:absolute after:-bottom-[.66rem]"></span>
      </button>
      <a href="/" class="block bg-neutral-900 px-4 py-2 absolute top-0 left-1/2 -translate-x-1/2
          lg:static lg:top-auto lg:left-auto lg:translate-x-0">
        <img src="/raffles.svg" alt="Raffles Logo" class="h-12">
      </a>
      <ul ref="menu" class="absolute top-0 flex flex-col items-center w-full mt-16 bg-neutral-50
          lg:static lg:top-auto lg:flex-row lg:items-start lg:w-auto lg:ml-8 lg:mt-0 lg:pt-2
          -translate-x-full ease duration-300 lg:translate-x-0">
        <li class="lg:mx-6">
          <a href="#" class="block text-lg p-4 w-full lg:p-0">Rooms & Suites</a>
        </li>
        <li class="lg:mx-6">
          <a href="#" class="block text-lg p-4 w-full lg:p-0">Dining</a>
        </li>
        <li class="lg:mx-6">
          <a href="#" class="block text-lg p-4 w-full lg:p-0">Events</a>
        </li>
        <li class="lg:mx-6">
          <a href="#" class="block text-lg p-4 w-full lg:p-0">Offers</a>
        </li>
        <li class="lg:mx-6">
          <a href="#" class="block text-lg p-4 w-full lg:p-0">Gallery</a>
        </li>
      </ul>
    </nav>
    <div class="flex lg:mr-4 pt-2">
      <button type="button" class="mx-4 pb-0.5">
        <img src="../assets/icons/search.svg" alt="Search icon">
      </button>
      <button type="button" class="mx-4">
        EN
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationBar',
  methods: {
    toggleMenu() {
      if (this.$refs.menu.classList.contains('-translate-x-full')) {
        this.$refs.menu.classList.remove('-translate-x-full');
        this.$refs.menu.classList.add('translate-x-0');
      } else {
        this.$refs.menu.classList.remove('translate-x-0');
        this.$refs.menu.classList.add('-translate-x-full');
      }
    },
  },
};
</script>

<style scoped>

</style>
