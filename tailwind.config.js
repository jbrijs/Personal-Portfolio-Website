/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "#0C111D",
        lb: "#65AFFF",
        lgreen: "#7BA387",
        mgreen: "#649071",
        greyb: "#6D9CC5",
        mb: "#355782",
      },
    },
  },
  plugins: [],
};
