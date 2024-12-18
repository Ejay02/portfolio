import { useRouter } from 'vue-router'

export function scrollToTop() {
  const router = useRouter()

  // First, scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  // Remove the hash fragment from the URL
  if (window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname)
  }
}
