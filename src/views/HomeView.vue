<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white cursor-pointer"
  >
    <!-- Header with Navigation -->
    <Header />
    <!-- home -->
    <section id="home" ref="homeSection" class="min-h-screen flex items-center justify-center">
      <Home />
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
    <section id="contact" class="container mx-auto pt-36">
      <Contact />
    </section>
    <hr class="border-t border-gray-700 mt-2" />

    <footer id="footer" class="text-center py-4 text-yellow-500">
      <p>With 🖤 from Lagos. &copy; {{ currentYear }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Home from '@/components/home.vue'
import Skills from '@/components/skills.vue'
import Header from '@/components/header.vue'
import Contact from '@/components/contact.vue'
import Projects from '@/components/projects.vue'

const currentYear = new Date().getFullYear()
const homeSection = ref<HTMLElement | null>(null)

onMounted(() => {
  // Ensure we start at the top of the page when component mounts
  window.scrollTo(0, 0)

  // If there's a hash in the URL, wait a bit and scroll to that section
  // if (window.location.hash) {
  //   setTimeout(() => {
  //     const element = document.querySelector(window.location.hash)
  //     element?.scrollIntoView({ behavior: 'smooth' })
  //   }, 1)
  // } else {
  //   // If no hash, make sure we're at the top
  //   homeSection.value?.scrollIntoView({ behavior: 'auto' })
  // }
})
</script>
