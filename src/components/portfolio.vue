<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white cursor-pointer"
  >
    <!-- Header with Navigation -->
    <Header />

    <!-- Skills Section  -->
    <section id="skills" class="container mx-auto py-52">
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

    <footer class="text-center py-6 text-yellow-500">
      <p>With 🖤 from Lagos. &copy; {{ currentYear }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Skills from './skills.vue'
import Header from './header.vue'
import Contact from './contact.vue'
import Projects from './projects.vue'

const currentYear = new Date().getFullYear()
</script>
