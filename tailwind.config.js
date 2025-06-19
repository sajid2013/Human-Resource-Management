/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#c3ebda",
        skylight: "#edf9fd",
        purple: "#cfceff",
        purplelight: "#f1f0ff",
        yellow: "#fae27c",
        yellowlight: "#fefce8",
      },
    },
  },
  plugins: [],
};
