/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-orange":
          "linear-gradient(180deg, rgba(243, 148, 38, 0.35) 0%, rgba(245, 158, 11, 0) 100%)",
        "shapes": "url('/shapes.svg')",
      },
      padding: {
        square: '100%', // Aspect ratio 1:1
      },
    },
  },
  plugins: [],
};
