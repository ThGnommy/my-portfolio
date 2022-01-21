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
        "my-brown": "#A35709",
        "black-primary": "#1B1A17",
      },
    },
  },
  plugins: [],
};
