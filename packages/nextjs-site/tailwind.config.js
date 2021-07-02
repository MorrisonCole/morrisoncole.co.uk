module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      gridTemplateColumns: {
        content: "3fr 1fr min(85ch, 90%) 1fr 3fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
