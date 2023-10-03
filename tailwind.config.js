/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      cursor: {
        default: 'url(/public/img/cursor.png), default',
        pointer: 'url(/public/img/pointer.png), pointer',
        grab: 'url(/public/img/disabled.png), grab',
      },
      fontFamily: {
        'monteserrat': ['Montserrat', 'sans-serif'],
        'monteserrat-alt': ['Montserrat Alternates', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

