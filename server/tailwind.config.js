/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify content paths
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#121212',
        'custom-rgb': 'rgb(123, 137, 232)', // Add the custom RGB color
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
        'slide-up': "slideUp .5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
