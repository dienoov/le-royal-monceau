<template>
  <article class="max-w-7xl mx-auto py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 justify-between mb-16">
      <div class="px-8 py-8 md:py-0">
        <h2 class="font-serif font-medium text-xl uppercase mb-6">
          Le Royal Monceau
        </h2>
        <p class="opacity-50 text-sm leading-6 font-light text-justify">
          A contemporary and vibrant design masterpiece located in the heart of the City of Lights.
          For business or pleasure, in springtime and fall, you'll always have Paris.
          Whenever you come and whatever your purpose we have an offer to suit your needs.
        </p>
      </div>
      <article class="px-8 md:px-16 py-8 md:py-0">
        <h3 class="font-serif font-medium text-xl mb-6">Links</h3>
        <ul>
          <li class="my-3">
            <a href="#" class="text-sm font-light opacity-70 hover:opacity-100 ease duration-150">
              Loyalty
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="text-sm font-light opacity-70 hover:opacity-100 ease duration-150">
              Raffles Story
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="text-sm font-light opacity-70 hover:opacity-100 ease duration-150">
              Press Room
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="text-sm font-light opacity-70 hover:opacity-100 ease duration-150">
              Careers
            </a>
          </li>
          <li class="my-3">
            <a href="#" class="text-sm font-light opacity-70 hover:opacity-100 ease duration-150">
              Travel Agents
            </a>
          </li>
        </ul>
      </article>
      <article class="px-8 py-8 md:py-0">
        <h2 class="font-serif font-medium text-xl mb-6">
          Current Weather
        </h2>
        <h3 class="text-sm tracking-widest uppercase opacity-50 mb-2">
          Paris, France
        </h3>
        <p class="text-3xl font-medium mb-2">
          {{ weather.temp }}°
        </p>
        <p class="text-sm font-light opacity-50">
          {{ weather.description }}
        </p>
      </article>
    </div>
    <p class="text-sm font-light text-center opacity-50 pt-16 border-t border-neutral-50/50">
      &copy; 2023 Le Royal Monceau. All rights reserved.
    </p>
  </article>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      weather: {
        temp: 0,
        description: '',
      },
    };
  },
  methods: {
    async fetchWeather() {
      try {
        const res = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/paris?unitGroup=metric&include=current&key=UMQCPZYHRG4HGARR4ALUW7F9J&contentType=json');
        const data = await res.json();

        this.weather.temp = data.currentConditions.temp;
        this.weather.description = data.currentConditions.conditions;
      } catch (e) {
        this.weather.temp = 0;
        this.weather.description = 'Failed to fetch weather';
      }
    },
  },
  mounted() {
    this.fetchWeather();
  },
};
</script>

<style scoped>

</style>
