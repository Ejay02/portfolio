<template>
  <div class="flex justify-center items-center mt-20">
    <div class="rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mb-8">
      <div class="flex flex-col lg:flex-row">
        <!-- Left Container -->
        <div class="hidden lg:flex flex-1 bg-sky-600 justify-center items-center p-8">
          <div class="text-center space-y-4">
            <h2 class="text-2xl font-bold text-white">Let's Chat</h2>
            <p class="text-white">
              You have a question, want to start a project, or simply want to connect.
            </p>
            <br />
            <p class="text-white">Feel free to send me a message in the contact form.</p>
            <div class="flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/ejakpovi/"
                class="text-white mr-4 hover:text-yellow-500 hover:scale-150"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Ejay02?tab=repositories"
                class="text-white hover:text-yellow-500 hover:scale-150"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Container -->
        <div class="flex flex-1 justify-center items-center bg-white p-8">
          <div class="w-full max-w-md space-y-4 mt-10 text-gray-600">
            <form @submit.prevent="submitForm">
              <!-- Name Input -->
              <input
                v-model="form.name"
                type="text"
                placeholder="Name *"
                autofocus
                @input="validateField('name')"
                :class="[getInputClass('name')]"
              />
              <p v-if="touched.name && errors.name" class="text-red-500 text-sm -mt-2 mb-2">
                Name is required
              </p>

              <!-- Email Input -->
              <input
                v-model="form.email"
                type="email"
                placeholder="Email *"
                @input="validateField('email')"
                :class="[getInputClass('email')]"
              />
              <p v-if="touched.email && errors.email" class="text-red-500 text-sm -mt-2 mb-2">
                Valid email is required
              </p>

              <!-- Phone Input -->
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Phone"
                class="bg-gray-200 w-full p-3 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
              />

              <!-- Message Textarea -->
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Message"
                class="bg-gray-200 w-full p-3 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
              ></textarea>

              <!-- Submit Button -->
              <div class="flex justify-end">
                <button type="submit" :disabled="!isFormValid" :class="getButtonClass">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Form data interface
interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

// Form state
const form = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  message: '',
})

// Touched state to track field interactions
const touched = ref<Record<keyof FormData, boolean>>({
  name: false,
  email: false,
  phone: false,
  message: false,
})

// Error tracking
const errors = ref<Record<keyof FormData, boolean>>({
  name: false,
  email: false,
  phone: false,
  message: false,
})

// Validate specific field
const validateField = (fieldName: keyof FormData) => {
  touched.value[fieldName] = true

  if (fieldName === 'name') {
    errors.value.name = form.value.name.trim() === ''
  } else if (fieldName === 'email') {
    errors.value.email = !isValidEmail(form.value.email)
  }
}

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

// Compute form validity
const isFormValid = computed(() => {
  return (
    !errors.value.name && !errors.value.email && form.value.name.trim() && form.value.email.trim()
  )
})

// Get input class based on field state
const getInputClass = (field: keyof FormData) => {
  return [
    'bg-gray-200 w-full p-3 mb-3 rounded focus:outline-none focus:ring-2',
    touched.value[field] && errors.value[field]
      ? 'border-2 border-red-500'
      : 'focus:ring-yellow-500',
  ].join(' ')
}

// Get button class
const getButtonClass = computed(() => {
  return [
    'uppercase text-sm py-3 px-6 rounded-lg',
    isFormValid.value
      ? 'bg-sky-500 text-white hover:opacity-80'
      : 'bg-gray-400 text-gray-200 cursor-not-allowed',
  ].join(' ')
})

// Form submission handler
const submitForm = () => {
  Object.keys(form.value).forEach((field) => {
    validateField(field as keyof FormData)
  })

  if (!isFormValid.value) return

  const mailtoLink = `mailto:e.jae02@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
    Object.entries(form.value)
      .map(([key, value]) => `${key}: ${value}`)
      .join('%0A'),
  )}`

  window.location.href = mailtoLink

  form.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  touched.value = {
    name: false,
    email: false,
    phone: false,
    message: false,
  }
}
</script>
