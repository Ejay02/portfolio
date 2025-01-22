<template>
  <div class="relative min-h-screen bg-[#15161a]">
    <div class="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
    <div class="h-full bg text-white cursor-pointer">
      <Header />
      <section class="min-h-screen flex items-center justify-center">
        <RouterView />
      </section>

      <!-- footer -->
      <footer class="text-center py-4 text-yellow-500 border-t border-gray-700">
        <p>With 🖤 from Lagos. &copy; {{ currentYear }}</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'

const currentYear = new Date().getFullYear()
</script>

<style>

</style>
