<template>
  <article class="grid grid-cols-1 lg:grid-cols-2 items-center py-16 md:py-24 max-w-7xl mx-auto">
    <div class="px-8 mb-8 md:mb-0">
      <p class="uppercase text-xs md:text-sm mb-4 font-medium tracking-widest opacity-50"
          data-aos="fade-down">
        Information
      </p>
      <h2 class="font-serif font-medium text-4xl md:text-5xl mb-20"
          data-aos="fade-down" data-aos-delay="50">
        Contact Us
      </h2>
      <h3 class="font-serif font-medium text-lg md:text-3xl mb-4"
          data-aos="fade-down" data-aos-delay="100">
        <strong class="font-medium">Paris, </strong>
        <span class="opacity-30">France</span>
      </h3>
      <p class="text-sm opacity-50 mb-6" data-aos="fade-down" data-aos-delay="150">
        37 Avenue Hoche 75008 Paris, France
      </p>
      <p class="mb-16" data-aos="fade-down" data-aos-delay="200">
        <strong class="font-serif font-medium">Email: </strong>
        <a href="mailto:alvinodien@yahoo.co.id" class="text-sm opacity-50
            ease duration-150 hover:opacity-100">
          alvinodien@yahoo.co.id
        </a>
      </p>
      <p data-aos="fade-down" data-aos-delay="250">
        <strong class="block font-medium opacity-50 text-sm">Call directly:</strong>
        <a href="tel:+330142998800" class="font-serif font-medium text-2xl md:text-4xl">
          (21433) 2201146
        </a>
      </p>
    </div>
    <form action="#" @submit.prevent="submitForm" class="p-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="flex flex-col" data-aos="zoom-in">
          <label for="name" class="text-sm font-medium">Name</label>
          <input type="text" v-model="form.name" class="border px-4 py-2 mt-2
              focus:border-neutral-900 focus:ring-neutral-900">
          <p class="text-red-500 text-sm mt-2">{{ errors.name }}</p>
        </div>
        <div class="flex flex-col" data-aos="zoom-in">
          <label for="email" class="text-sm font-medium">Email</label>
          <input type="email" v-model="form.email" class="border px-4 py-2 mt-2
              focus:border-neutral-900 focus:ring-neutral-900">
          <p class="text-red-500 text-sm mt-2">{{ errors.email }}</p>
        </div>
      </div>
      <div class="flex flex-col mt-4" data-aos="zoom-in">
        <label for="message" class="text-sm font-medium">Message</label>
        <textarea v-model="form.message" class="border px-4 py-2 mt-2
              focus:border-neutral-900 focus:ring-neutral-900"></textarea>
        <p class="text-red-500 text-sm mt-2">{{ errors.message }}</p>
      </div>
      <button type="submit" class="bg-neutral-800 hover:bg-neutral-900 ease duration-150
          text-neutral-50 w-full px-4 py-2 mt-4" data-aos="zoom-in">
        Send
      </button>
    </form>
  </article>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      errors: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    validateForm() {
      this.errors.name = '';
      this.errors.email = '';
      this.errors.message = '';

      if (!this.form.name) {
        this.errors.name = 'Name is required.';
      }

      if (!this.form.email) {
        this.errors.email = 'Email is required.';
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = 'Email is invalid.';
      }

      if (!this.form.message) {
        this.errors.message = 'Message is required.';
      }

      return this.errors.name === '' && this.errors.email === '' && this.errors.message === '';
    },
    validEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    submitForm() {
      if (this.validateForm()) {
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    },
  },
};
</script>

<style scoped>

</style>
