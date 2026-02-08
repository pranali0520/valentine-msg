// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideFade: {
          "0%": { transform: "translateY(0%)" },

          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "slide-fade": "slideFade 70s linear infinite",
      },
    },
  },
  plugins: [],
};
