<template>
  <RouterView />
  <ScrollToTopButton />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import ScrollToTopButton from '@/components/scrollToTopButton.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped></style>
