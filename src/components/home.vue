<template>
  <div class="text-center animate-slide-up">
    <h1 class="text-5xl font-bold mb-4">
      {{ heroTitle }}
    </h1>
    <p class="text-xl text-gray-300 mb-8">
      {{ heroSubtitle }}
    </p>
    <div class="flex justify-center space-x-4">
      <a href="#contact" class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition">
        Contact Me
      </a>
      <a
        href="/public/ej_resume.pdf"
        target="_blank"
        class="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
      >
        Download CV
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const heroTitle = ref('Full Stack Developer')
const heroSubtitle = ref('Creating innovative web solutions with passion')
</script>

<style scoped></style>
