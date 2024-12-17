<template>
  <RouterView />
  <ScrollToTopButton />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ScrollToTopButton from '@/components/scrollToTopButton.vue'

const route = useRoute()

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped></style>
