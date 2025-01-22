/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out ',
        'slide-up': 'slideUp 0.7s ease-out',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '70%': { transform: 'scale(0.9)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '10%, 90%': { transform: 'translateX(-1px)' },
          '20%, 80%': { transform: 'translateX(2px)' },
          '30%, 50%, 70%': { transform: 'translateX(-4px)' },
          '40%, 60%': { transform: 'translateX(4px)' },
        },
      },
    },
  },

  plugins: [],
}
