<template>
  <div class="">
    <div class="text-3xl text-center mb-20 animate-fade-in">Skills</div>
    <div ref="skillsContainer" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-32">
      <div
        v-for="(skill, index) in skills"
        :key="skill.name"
        class="relative flex flex-col items-center group opacity-0"
        :class="[`skill-item-${index}`]"
      >
        <div class="transform transition hover:scale-110">
          <component :is="skill.icon" class="w-16 h-16 mb-4 text-yellow-500 skill-icon" />
          <span class="text-center">{{ skill.name }}</span>
        </div>
        <!--  -->
        <div
          class="absolute bottom-full mb-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
        >
          <div
            class="bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-yellow-500/20 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            :class="{ 'w-[400px]': skill.details.length > 3 }"
          >
            <div
              class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800/95 border-r border-b border-yellow-500/20 transform rotate-45"
            ></div>

            <!-- <h3 class="text-yellow-500 font-bold mb-4 text-lg text-center">{{ skill.name }}</h3> -->

            <div v-if="skill.details.length <= 3" class="space-y-3">
              <div
                v-for="(item, itemIndex) in skill.details"
                :key="itemIndex"
                class="flex items-center space-x-3"
              >
                <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span class="text-white/90">{{ item }}</span>
              </div>
            </div>

            <div v-else class="grid grid-cols-2 gap-x-8 gap-y-3">
              <div
                v-for="(item, itemIndex) in skill.details"
                :key="itemIndex"
                class="flex items-center space-x-3"
              >
                <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span class="text-white/90">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  CodeBracketIcon,
  ServerIcon,
  ChartBarIcon,
  CloudIcon,
  CircleStackIcon,
} from '@heroicons/vue/24/solid'

const skillsContainer = ref(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('[class*="skill-item-"]').forEach((el) => {
          el.classList.add('animate-in')
        })
      } else {
        document.querySelectorAll('[class*="skill-item-"]').forEach((el) => {
          el.classList.remove('animate-in') // Reset animations when out of view
        })
      }
    },
    { threshold: 0.5 },
  )

  if (skillsContainer.value) {
    observer.observe(skillsContainer.value)
  }
})

onUnmounted(() => {
  if (observer && skillsContainer.value) {
    observer.unobserve(skillsContainer.value)
  }
  observer = null
})

const skills = ref([
  {
    name: 'Frontend',
    icon: CodeBracketIcon,
    details: ['Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Nuxt.js'],
  },
  {
    name: 'Backend',
    icon: ServerIcon,
    details: [
      'Node.js',
      'Nest.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'Python',
      'GO',
      'PHP',
      'TypeORM',
      'Socket.IO',
    ],
  },
  {
    name: 'Database',
    icon: CircleStackIcon,
    details: ['MySQL', 'NoSQL', 'Prisma', 'Redis'],
  },
  {
    name: 'Cloud',
    icon: CloudIcon,
    details: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    name: 'Analytics',
    icon: ChartBarIcon,
    details: ['June', 'Mixpanel'],
  },
])
</script>

<style scoped>
.skill-item-0.animate-in {
  animation: bounceIn 0.6s ease-out 0s forwards;
}
.skill-item-1.animate-in {
  animation: bounceIn 0.6s ease-out 0.2s forwards;
}
.skill-item-2.animate-in {
  animation: bounceIn 0.6s ease-out 0.4s forwards;
}
.skill-item-3.animate-in {
  animation: bounceIn 0.6s ease-out 0.6s forwards;
}
.skill-item-4.animate-in {
  animation: bounceIn 0.6s ease-out 0.8s forwards;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.9);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.skill-icon {
  transition: transform 0.3s ease;
}

.skill-icon:hover {
  animation: wiggle 1s ease-in-out;
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg) scale(1.1);
  }
  50% {
    transform: rotate(-15deg) scale(1.2);
  }
  75% {
    transform: rotate(15deg) scale(1.1);
  }
}
</style>
