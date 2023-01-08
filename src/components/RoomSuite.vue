<template>
  <article class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center mx-auto">
    <div class="lg:px-16 mb-8 md:mb-0 py-20 lg:py-8 lg:max-w-2xl w-full mx-auto lg:ml-auto lg:mr-0">
      <p class="uppercase text-xs md:text-sm mb-4 font-medium tracking-widest opacity-50
          text-center lg:text-left mb-4" data-aos="fade-down">
        Discover
      </p>
      <h2 class="font-serif font-medium text-4xl md:text-5xl mb-16 text-center lg:text-left"
          data-aos="fade-down">
        Rooms & Suites
      </h2>
      <ul class="grid md:grid-cols-2 lg:grid-cols-1 w-full lg:max-h-52
          lg:overflow-y-scroll scrollbar" data-aos="fade-up">
        <li class="flex items-center p-3 ease duration-150
            hover:bg-neutral-200 hover:cursor-pointer" :class="room.active ? 'bg-neutral-200' : ''"
            v-for="room in rooms" :key="room.id" @click="() => setActiveRoom(room)">
          <img :src="room.image" :alt="room.name" class="w-32 h-20 object-cover">
          <div class="ml-6">
            <h3 class="font-serif font-medium text-lg mb-4">
              {{ room.name }}
            </h3>
            <p class="text-sm">
              <span class="text-neutral-900/50">
                Starting from
              </span>
              <strong class="font-medium">
                ${{ room.price }}/Night
              </strong>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <img src="" alt="" class="h-[32rem] w-[48rem] object-cover hidden lg:block" ref="image"
         data-aos="fade-left">
  </article>
</template>

<script>
import royalMonceauSuite from '../assets/rooms/royal-monceau-suite.jpg';
import penthouseSuite from '../assets/rooms/penthouse-suite.jpg';
import signatureSuite from '../assets/rooms/signature-suite.jpg';
import studioRoom from '../assets/rooms/studio-room.jpg';

export default {
  name: 'RoomSuite',
  data() {
    return {
      rooms: [{
        id: 1,
        name: 'Royal Monceau Suite',
        image: royalMonceauSuite,
        price: 16999,
        active: true,
      }, {
        id: 2,
        name: 'Penthouse Suite',
        image: penthouseSuite,
        price: 9999,
        active: false,
      }, {
        id: 3,
        name: 'Signature Suite',
        image: signatureSuite,
        price: 3999,
        active: false,
      }, {
        id: 4,
        name: 'Studio Room',
        image: studioRoom,
        price: 1999,
        active: false,
      }],
    };
  },
  methods: {
    setActiveRoom(room) {
      this.rooms.forEach((each) => {
        // eslint-disable-next-line no-param-reassign
        each.active = false;
      });
      // eslint-disable-next-line no-param-reassign
      room.active = true;
      this.$refs.image.src = room.image;
    },
  },
  mounted() {
    this.$refs.image.src = this.rooms[0].image;
  },
};
</script>

<style scoped>

</style>
