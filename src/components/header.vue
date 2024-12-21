<template>
  <header class="fixed w-full z-50 bg-black/50 backdrop-blur-md">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <div class="text-2xl font-bold animate-bounce-in">
        <span class="text-yellow-500">{{ displayedText }}</span>
        <span class="animate-blink">|</span>
      </div>
      <ul class="flex space-x-6">
        <li
          v-for="section in sections"
          :key="section"
          :class="[
            'transition transform hover:scale-110',
            activeSection === section.toLowerCase() ? 'text-yellow-500' : 'hover:text-yellow-500',
          ]"
        >
          <a :href="`#${section.toLowerCase()}`">{{ section }}</a>
        </li>
      </ul>
    </nav>
  </header>

  <!-- nav -->
  <section id="home" class="min-h-screen flex items-center justify-center">
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
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const displayedText = ref('')
const textToType = ref("Hi, I'm Ejiro Ejakpovi")
const subtitles = [
  'Full Stack Developer',
  'Occasional Open-Source Contributor',
  'Remote Work Advocate',
  'Driven by Curiosity',
]
const currentSubtitleIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = ref(100)
const deletingSpeed = ref(50)

const heroTitle = ref('Full Stack Developer')
const heroSubtitle = ref('Creating innovative web solutions with passion')

const sections = ['Home', 'Skills', 'Projects', 'Contact']
const activeSection = ref('home')

// Typing logic
const typeText = () => {
  const current = textToType.value
  const currentSubtitle = subtitles[currentSubtitleIndex.value]

  if (!isDeleting.value) {
    // Typing
    if (displayedText.value.length < current.length) {
      displayedText.value = current.slice(0, displayedText.value.length + 1)
    } else {
      // Start typing subtitle after a pause
      setTimeout(() => {
        isDeleting.value = true
      }, 1000)
    }
  } else {
    // Deleting
    if (displayedText.value.length > 0) {
      displayedText.value = displayedText.value.slice(0, -1)
    } else {
      // Move to next subtitle
      isDeleting.value = false
      currentSubtitleIndex.value = (currentSubtitleIndex.value + 1) % subtitles.length
      textToType.value = subtitles[currentSubtitleIndex.value]
    }
  }
}

// Add intersection observer for section detection
onMounted(() => {
  typingInterval = setInterval(typeText, isDeleting.value ? deletingSpeed.value : typingSpeed.value)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }

  const observer = new IntersectionObserver(callback, options)

  // Observe all sections
  sections.forEach((section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) observer.observe(element)
  })
})

let typingInterval: ReturnType<typeof setInterval>

onUnmounted(() => {
  clearInterval(typingInterval)
})
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 0.7s infinite;
}
</style>
