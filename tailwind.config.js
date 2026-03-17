/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyberBg: "#050816",
        cyberPanel: "#0a0f1f",
        neonBlue: "#38bdf8",
        neonPurple: "#a855f7",
        neonGreen: "#22c55e"
      },
      boxShadow: {
        neon: "0 0 20px rgba(56,189,248,0.7)",
        "neon-purple": "0 0 20px rgba(168,85,247,0.7)"
      }
    }
  },
  plugins: []
};

