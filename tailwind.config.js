/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#95c0f4",
        skylight: "#f3f4f6",
        purple: "#c9b4dd",
        purplelight: "#c4b5fd",
        yellow: "#facc15", // changed to a visible yellow
        yellowlight: "#fcd34d",
        greenlight: "#c3ebda",
        green: "#c8ddd5",
        white: "#ffffff",
        lightyellow: "#fff9db", // added light yellow color
      },
    },
  },
  plugins: [],
};
