<template>
  <h2 class="text-3xl text-center mb-24 animate-fade-in">Skills</h2>
  <div class="grid grid-cols-4 gap-8">
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="flex flex-col items-center transform transition hover:scale-110"
    >
      <component :is="skill.icon" class="w-16 h-16 mb-4 text-yellow-500" />
      <span>{{ skill.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
} from '@heroicons/vue/24/solid'

const skills = ref([
  { name: 'Frontend', icon: CodeBracketIcon },
  { name: 'Backend', icon: ServerIcon },
  { name: 'Mobile Dev', icon: DevicePhoneMobileIcon },
  { name: 'Cloud', icon: CloudIcon },
])
</script>

<style scoped></style>
