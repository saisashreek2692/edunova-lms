/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#4F46E5",
          purple: "#7C3AED",
          pink: "#EC4899",
        }
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(to right, #4F46E5, #7C3AED, #EC4899)'
      }
    },
  },
  plugins: [],
};
