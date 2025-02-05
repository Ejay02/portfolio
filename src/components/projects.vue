<template>
  <div class="">
    <h2 class="text-3xl text-center mb-12">Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8">
      <div
        v-for="(project, index) in projects"
        :key="project.name"
        class="opacity-0 transform translate-y-8 animate-fade-in"
        :style="{ animationDelay: `${index * 150}ms` }"
      >
        <div
          class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full relative"
        >
          <div class="relative h-48 sm:h-60 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.name"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold mb-2 line-clamp-2 text-left">{{ project.name }}</h3>
            <p class="text-gray-400 mb-4 line-clamp-2 flex-grow text-left">
              {{ project.description }}
            </p>
            <div class="flex space-x-4 justify-end">
              <a
                :href="project.githubLink"
                target="_blank"
                class="hover:text-yellow-500 transition-colors"
              >
                <i class="fa-brands fa-github fa-lg"></i>
              </a>
              <a
                :href="project.liveLink"
                target="_blank"
                class="hover:text-yellow-500 transition-colors"
              >
                <i class="fas fa-play-circle fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
    liveLink: 'quick-dash-restaurant.netlify.app',
  },
  {
    name: 'School Dashboard',
    description: 'Platform to manage and track academic activities.',
    image: '/lms.png',
    githubLink: 'https://github.com/Ejay02/school-management-frontend',
    liveLink: 'eduhub-portal.netlify.app',
  },
  {
    name: 'LMS',
    description: 'Learning platform for students and instructors.',
    image: '/edulms.png',
    githubLink: 'https://github.com/Ejay02/lms-frontend',
    liveLink: 'https://ej-lms.netlify.app',
  },
])
</script>
<style>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
