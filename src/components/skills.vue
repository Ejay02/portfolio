<template>
  <h2 class="text-3xl text-center mb-24 animate-fade-in">Skills</h2>
  <div class="grid grid-cols-5 gap-8">
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="relative flex flex-col items-center group"
    >
      <div class="transform transition hover:scale-110">
        <component :is="skill.icon" class="w-16 h-16 mb-4 text-yellow-500" />
        <span class="text-center">{{ skill.name }}</span>
      </div>

      <!-- Enhanced Hover Card -->
      <div
        class="absolute bottom-full mb-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
      >
        <div
          class="bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 min-w-[250px] border border-yellow-500/20 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
        >
          <!-- Arrow pointing down -->
          <div
            class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800/95 border-r border-b border-yellow-500/20 transform rotate-45"
          ></div>

          <h3 class="text-yellow-500 font-bold mb-4 text-lg">{{ skill.name }}</h3>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in skill.details"
              :key="index"
              class="flex items-center space-x-3 translate-x-0 opacity-0"
              :class="[`hover-slide-item-${index}`]"
            >
              <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span class="text-white/90">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  CodeBracketIcon,
  ServerIcon,
  ChartBarIcon,
  CloudIcon,
  CircleStackIcon,
} from '@heroicons/vue/24/solid'

const skills = ref([
  {
    name: 'Frontend',
    icon: CodeBracketIcon,
    details: ['Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Nuxt.js'],
  },
  {
    name: 'Backend',
    icon: ServerIcon,
    details: ['Node.js', 'Nest.js', 'Express.js', 'REST APIs', 'GraphQL', 'Python', 'GO', 'PHP'],
  },
  {
    name: 'Database',
    icon: CircleStackIcon,
    details: ['MongoDB', 'PostgreSQL', 'Prisma', 'Redis'],
  },
  {
    name: 'Cloud',
    icon: CloudIcon,
    details: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Serverless'],
  },
  {
    name: 'Analytics',
    icon: ChartBarIcon,
    details: ['June', 'Mixpanel'],
  },
])
</script>

<style scoped>
/* Generate classes for the first 10 items (adjust if needed) */
.group:hover .hover-slide-item-0 {
  animation: slideIn 0.3s ease-out 0s forwards;
}
.group:hover .hover-slide-item-1 {
  animation: slideIn 0.3s ease-out 0.1s forwards;
}
.group:hover .hover-slide-item-2 {
  animation: slideIn 0.3s ease-out 0.2s forwards;
}
.group:hover .hover-slide-item-3 {
  animation: slideIn 0.3s ease-out 0.3s forwards;
}
.group:hover .hover-slide-item-4 {
  animation: slideIn 0.3s ease-out 0.4s forwards;
}
.group:hover .hover-slide-item-5 {
  animation: slideIn 0.3s ease-out 0.5s forwards;
}
.group:hover .hover-slide-item-6 {
  animation: slideIn 0.3s ease-out 0.6s forwards;
}
.group:hover .hover-slide-item-7 {
  animation: slideIn 0.3s ease-out 0.7s forwards;
}
.group:hover .hover-slide-item-8 {
  animation: slideIn 0.3s ease-out 0.8s forwards;
}
.group:hover .hover-slide-item-9 {
  animation: slideIn 0.3s ease-out 0.9s forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-1rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Reset animation when not hovering */
.group:not(:hover) li {
  opacity: 0;
  transform: translateX(-1rem);
}
</style>
