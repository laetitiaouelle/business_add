/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        SatoshiLight: ["Satoshi-Light"],
        SatoshiRegular: ["Satoshi-Regular"],
        SatoshiMedium: ["Satoshi-Medium"],
        SatoshiBold: ["Satoshi-Bold"],
      },

    },
  },
  plugins: [],
}
