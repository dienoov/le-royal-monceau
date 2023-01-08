<template>
  <div id="hero-slider" class="relative" data-carousel="slide">
    <div class="relative h-[calc(100vh-4rem)] overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-[calc(100vh-4rem)] bg-neutral-900/30
          flex flex-col justify-center items-center z-30 text-neutral-50">
        <p class="uppercase text-xs md:text-sm mb-4 md:mb-8 font-medium tracking-widest">
          Welcome To
        </p>
        <h1 class="font-serif font-medium text-2xl md:text-6xl mb-4 md:mb-8">
          Le Royal Monceau
        </h1>
        <p class="text-xs md:text-sm">
          A place to experience and enjoy your life
        </p>
      </div>
      <div class="hidden duration-1000 ease" :data-carousel-item="slide.id === 0 ? 'active' : ''"
          v-for="slide in slides" :key="slide.id">
        <img :src="slide.image" class="absolute block w-full
            -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full" alt="...">
      </div>
    </div>
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button type="button" class="w-3 h-3" aria-current="false"
          :aria-label="`Slide ${slide.id + 1}`" :data-carousel-slide-to="slide.id"
          v-for="slide in slides" :key="slide.id"></button>
    </div>
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center
        justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
      <span class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center
        justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
      <span class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Carousel } from 'flowbite';

import slide1 from '../assets/slides/slide-1.jpg';
import slide2 from '../assets/slides/slide-2.jpg';
import slide3 from '../assets/slides/slide-3.jpg';
import slide4 from '../assets/slides/slide-4.jpg';
import slide5 from '../assets/slides/slide-5.jpg';

export default {
  name: 'HeroSlider',
  data() {
    return {
      slides: [{
        id: 0,
        image: slide1,
      }, {
        id: 1,
        image: slide2,
      }, {
        id: 2,
        image: slide3,
      }, {
        id: 3,
        image: slide4,
      }, {
        id: 4,
        image: slide5,
      }],
    };
  },
};
</script>

<style scoped>

</style>
