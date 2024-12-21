<template>
  <div class="flex justify-center items-center">
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
          <div class="w-full max-w-md space-y-4 mt-10">
            <form @submit.prevent="submitForm">
              <!-- Name Input -->
              <input
                v-model="form.name"
                type="text"
                placeholder="Name *"
                autofocus
                @input="validateField('name')"
                :class="[
                  'bg-gray-200 w-full p-3 mb-3 rounded focus:outline-none focus:ring-2 cursor-pointer',
                  touched.name && errors.name ? 'border-2 border-red-500' : 'focus:ring-yellow-500',
                ]"
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
                :class="[
                  'bg-gray-200 w-full p-3 mb-3 rounded focus:outline-none focus:ring-2 cursor-pointer',
                  touched.email && errors.email
                    ? 'border-2 border-red-500'
                    : 'focus:ring-yellow-500',
                ]"
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
                <button
                  type="submit"
                  :disabled="!isFormValid"
                  :class="[
                    'uppercase text-sm py-3 px-6 rounded-lg',
                    isFormValid
                      ? 'bg-sky-500 text-white hover:opacity-80'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed',
                  ]"
                >
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

// Touched state to track which fields have been interacted with
const touched = ref({
  name: false,
  email: false,
})

// Error tracking
const errors = ref({
  name: false,
  email: false,
})

// Validate specific field
const validateField = (fieldName: keyof typeof form.value) => {
  // Mark the field as touched
  touched.value[fieldName] = true

  // Validate based on field name
  if (fieldName === 'name') {
    errors.value.name = form.value.name.trim() === ''
  } else if (fieldName === 'email') {
    errors.value.email = !isValidEmail(form.value.email)
  }
}

// Validate form
const isFormValid = computed(() => {
  return form.value.name.trim() !== '' && isValidEmail(form.value.email)
})

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

// Form submission handler
const submitForm = () => {
  // Validate all fields before submission
  touched.value.name = true
  touched.value.email = true

  validateField('name')
  validateField('email')

  // Check form validity
  if (!isFormValid.value) {
    return
  }

  // Construct mailto link
  const mailtoLink = `mailto:e.jae02@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(form.value.name)}%0A%0AEmail: ${encodeURIComponent(form.value.email)}0A%0APhone: ${encodeURIComponent(form.value.phone)}%0A%0AMessage: ${encodeURIComponent(form.value.message)}`

  // Open default email client
  window.location.href = mailtoLink

  // Scroll to top after submission
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // Reset form and touched state
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
  touched.value = {
    name: false,
    email: false,
  }
}
</script>
