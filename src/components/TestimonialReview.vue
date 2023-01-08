<template>
  <article class="bg-neutral-100 py-16 px-8 md:py-24">
    <div class="items-center px-8 py-16 max-w-5xl mx-auto bg-neutral-50
        shadow-lg shadow-neutral-500/5">
      <p class="uppercase text-xs md:text-sm mb-4 font-medium
          tracking-widest opacity-50 text-center">
        Testimonial
      </p>
      <h2 class="font-serif font-medium text-4xl md:text-5xl mb-20 text-center">
        Guest Reviews
      </h2>
      <article class="text-center mb-16">
        <h3 class="before:content-[open-quote] after:content-[close-quote]
            text-xl mb-8 font-medium">
          Great hotel!
        </h3>
        <p class="text-neutral-900/50 mb-8">
          Wonderful and helpful staff and an excellent location!
        </p>
        <h4 class="font-medium text-neutral-900/70">
          Adam Levine
        </h4>
      </article>
      <button type="button" class="bg-neutral-800 hover:bg-neutral-900 ease duration-150
          text-neutral-50 w-48 mx-auto block px-4 py-2 mt-4" @click="this.modal.show">
        Write a Review
      </button>
    </div>
    <form id="review" tabindex="-1" aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto
          md:inset-0 h-modal md:h-full" @submit.prevent="submitForm">
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <div class="relative bg-neutral-50 shadow">
          <h3 class="text-3xl font-serif font-medium text-neutral-900 text-center p-4">
            Write your review
          </h3>
          <div class="p-6 space-y-6">
            <div class="flex flex-col">
              <label for="name" class="text-sm font-medium">Name</label>
              <input type="text" v-model="form.name" class="border px-4 py-2 mt-2
              focus:border-neutral-900 focus:ring-neutral-900">
              <p class="text-red-500 text-sm mt-2">{{ errors.name }}</p>
            </div>
            <div class="flex flex-col">
              <label for="name" class="text-sm font-medium">Title</label>
              <input type="text" v-model="form.title" class="border px-4 py-2 mt-2
              focus:border-neutral-900 focus:ring-neutral-900">
              <p class="text-red-500 text-sm mt-2">{{ errors.title }}</p>
            </div>
            <div class="flex flex-col mt-4">
              <label for="message" class="text-sm font-medium">Message</label>
              <textarea v-model="form.message" class="border px-4 py-2 mt-2
              focus:border-neutral-900 focus:ring-neutral-900"></textarea>
              <p class="text-red-500 text-sm mt-2">{{ errors.message }}</p>
            </div>
          </div>
          <div class="flex justify-end items-center p-6 space-x-2">
            <button type="button" class="bg-neutral-50 hover:bg-neutral-200 ease duration-150
                text-neutral-900 w-32 block px-4 py-2 mt-4" @click="this.modal.hide">
              Cancel
            </button>
            <button type="submit" class="bg-neutral-800 hover:bg-neutral-900 ease duration-150
                text-neutral-50 w-32 block px-4 py-2 mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </article>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Modal } from 'flowbite';

export default {
  name: 'TestimonialReview',
  data() {
    return {
      form: {
        name: '',
        title: '',
        message: '',
      },
      errors: {
        name: '',
        title: '',
        message: '',
      },
      modal: null,
    };
  },
  methods: {
    validateForm() {
      this.errors.name = '';
      this.errors.title = '';
      this.errors.message = '';

      if (!this.form.title) {
        this.errors.title = 'Title is required';
      }

      if (!this.form.name) {
        this.errors.name = 'Name is required';
      }

      if (!this.form.message) {
        this.errors.message = 'Message is required';
      }

      return this.errors.name === '' && this.errors.title === '' && this.errors.message === '';
    },
    submitForm() {
      if (this.validateForm()) {
        this.form.name = '';
        this.form.title = '';
        this.form.message = '';
        this.modal.hide();
      }
    },
  },
  mounted() {
    this.modal = new Modal(document.getElementById('review'), {
      backdrop: 'static',
    });
  },
};
</script>

<style scoped>

</style>
