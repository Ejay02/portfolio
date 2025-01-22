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
          :key="section.name"
          :class="[
            'transition transform hover:scale-110',
            activeSection === section.route ? 'text-yellow-500' : 'hover:text-yellow-500',
          ]"
        >
          <router-link
            :to="section.route"
            class="capitalize"
            @click="activeSection = section.route"
          >
            {{ section.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
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

const sections = [
  { name: 'Home', route: '/' },
  { name: 'Skills', route: '/skills' },
  { name: 'Projects', route: '/projects' },
  { name: 'Contact', route: '/contact' },
]
const activeSection = ref(sections[0].route)

// Typing logic
const typeText = () => {
  const current = textToType.value

  if (!isDeleting.value) {
    if (displayedText.value.length < current.length) {
      displayedText.value = current.slice(0, displayedText.value.length + 1)
    } else {
      setTimeout(() => {
        isDeleting.value = true
      }, 1000)
    }
  } else {
    if (displayedText.value.length > 0) {
      displayedText.value = displayedText.value.slice(0, -1)
    } else {
      isDeleting.value = false
      currentSubtitleIndex.value = (currentSubtitleIndex.value + 1) % subtitles.length
      textToType.value = subtitles[currentSubtitleIndex.value]
    }
  }
}

let typingInterval: ReturnType<typeof setInterval>

onMounted(() => {
  typingInterval = setInterval(typeText, isDeleting.value ? deletingSpeed.value : typingSpeed.value)
})

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
