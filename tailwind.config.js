/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "scrollbar-width": "none", // Firefox
          "-ms-overflow-style": "none", // IE and Edge
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none", // Chrome, Safari
        },
      });
    },
  ],
};
