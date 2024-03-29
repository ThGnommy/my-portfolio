module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      rubik: "Rubik, sans-serif",
    },
    extend: {
      colors: {
        primary: "#F0E3CA",
        secondary: "#FF8303",
        "custom-dark": "#1B1A17",
        "my-brown": "#A35709",
        "black-primary": "#1B1A17",
      },
      screens: {
        csm: "900px",
        cxs: "400px",
      },
      keyframes: {
        lineChange: {
          "0%": {
            width: "2.5rem",
          },
          "25%": {
            width: "0rem",
          },
          "50%": {
            width: "0rem",
          },
          "100%": {
            width: "2.5rem",
          },
        },
        modalUp: {
          "0%": {
            transform: "translateX(-50%) translateY(300%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-50%)",
          },
        },
      },
      animation: {
        "move-up": "modalUp 1.5s ease-out forwards",
        "line-animation": "lineChange 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};
