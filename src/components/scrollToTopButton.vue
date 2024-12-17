<template>
  <button
    v-if="isVisible"
    class="scroll-to-top fixed bottom-5 right-5 w-14 h-14 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center transition-opacity duration-300 hover:opacity-100"
    @click="scrollToTop"
  >
    <i class="fa fa-chevron-up text-white text-xl"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { scrollToTop } from '@/utils/scrollToTop'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
