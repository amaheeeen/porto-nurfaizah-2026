/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./work.html",      // <-- Tambahkan ini
    "./contact.html",   // <-- Tambahkan ini
    "./showcase.html",  // <-- Tambahkan ini
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.html",      // <-- Atau cara sapu jagat: semua file html
  ],
  theme: {
    extend: {
      colors: {
        'tech-dark': '#0f172a',
        'tech-accent': '#22d3ee', // Cyan-400
        'tech-card': '#1e293b',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}