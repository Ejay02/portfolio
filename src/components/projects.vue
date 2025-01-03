<template>
  <h2 class="text-3xl text-center mb-12">Projects</h2>

  <Carousel v-bind="config" class="px-4 md:px-8">
    <Slide v-for="project in projects" :key="project.name">
      <div
        class="carousel__item bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl m-2 h-full flex flex-col"
      >
        <div
          class="relative sm:w-80 md:w-96 lg:w-full h-48 sm:h-60 md:h-72 lg:h-60 aspect-video overflow-hidden"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-bold mb-2 line-clamp-2 text-left">{{ project.name }}</h3>
          <p class="text-gray-400 mb-4 line-clamp-2 flex-grow text-left">
            {{ project.description }}
          </p>
          <div class="flex space-x-4 justify-end">
            <a :href="project.githubLink" target="_blank" class="hover:text-yellow-500">
              <i class="fa-brands fa-github fa-lg"></i>
            </a>
            <a :href="project.liveLink" target="_blank" class="hover:text-yellow-500">
              <i class="fas fa-play-circle fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const config = {
  autoplay: 5000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  itemsToShow: 3,

  transition: 500,
}

const projects = ref([
  {
    name: 'E-Commerce App',
    description:
      'A mock e-commerce platform that provides users with a seamless shopping experience.',
    image: '/eCom.png',
    githubLink: 'https://github.com/Ejay02/eCommerce-FE',
    liveLink: 'https://buyzone-demo.netlify.app/',
  },
  {
    name: 'E-Commerce Admin',
    description: 'Admin dashboard for mock e-commerce platform.',
    image: '/eCom_admin.png',
    githubLink: 'https://github.com/Ejay02/eCommerce-Admin',
    liveLink: 'https://buyzone-admin-dashboard.netlify.app/',
  },
  {
    name: 'Movie App',
    description: 'Movie app which showcases the latest movies and their trailers.',
    image: '/movie.png',
    githubLink: 'https://github.com/Ejay02/full-movie-app',
    liveLink: 'https://latest-movie-app-ej.netlify.app/',
  },
  {
    name: 'Restaurant Service',
    description: 'Quick Dash is a fast and user-friendly food-ordering website.',
    image: '/restaurant.png',
    githubLink: 'https://github.com/Ejay02/food_delivery_fe',
    liveLink: 'https://quick-dash.netlify.app',
  },
  {
    name: 'Restaurant Admin',
    description: 'Admin dashboard for food-ordering website.',
    image: '/rest_admin.png',
    githubLink: 'https://github.com/Ejay02/restaurant_dash',
    liveLink: 'https://quick-dash-restaurant.netlify.app',
  },
  {
    name: 'School Dashboard',
    description: 'Platform to manage and track academic activities.',
    image: '/schoolDash.png',
    githubLink: 'https://github.com/Ejay02/school-dashboard-ui',
    liveLink: 'https://eduhub-portal.netlify.app',
  },
])
</script>

<style>
.carousel__icon {
  color: #facc15;
  padding: 5px;
  font-size: 85rem;
}

.carousel__icon:hover {
  color: #b7994d;
}
</style>
