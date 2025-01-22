<template>
  <div
    class="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white cursor-pointer"
  >
    <Header />
    <section class="min-h-screen flex items-center justify-center">
      <RouterView />
    </section>

    <!-- footer -->
    <footer class="text-center py-4 text-yellow-500 border-t border-gray-700">
      <p>With 🖤 from Lagos. &copy; {{ currentYear }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'

const currentYear = new Date().getFullYear()
</script>
