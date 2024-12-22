<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white cursor-pointer"
  >
    <!-- Header with Navigation -->

    <Header />
    <!-- home -->
    <section id="home" class="min-h-screen flex items-center justify-center">
      <div class="text-center animate-slide-up">
        <h1 class="text-5xl font-bold mb-4">
          {{ heroTitle }}
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          {{ heroSubtitle }}
        </p>
        <div class="flex justify-center space-x-4">
          <a
            href="#contact"
            class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition"
          >
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
    </section>

    <!-- Skills Section  -->
    <section id="skills" class="container mx-auto py-72">
      <Skills />
    </section>

    <!-- Projects Section  -->
    <section id="projects" class="container mx-auto py-40 p-10">
      <Projects />
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container mx-auto py-40">
      <Contact />
    </section>

    <footer id="footer" class="text-center py-6 text-yellow-500">
      <p>With 🖤 from Lagos. &copy; {{ currentYear }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Skills from './skills.vue'
import Header from './header.vue'
import Contact from './contact.vue'
import Projects from './projects.vue'
import { ref } from 'vue'

const heroTitle = ref('Full Stack Developer')
const heroSubtitle = ref('Creating innovative web solutions with passion')

const currentYear = new Date().getFullYear()
</script>

