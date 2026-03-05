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
        xl: '1rem',
        '2xl': '1.5rem'
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.05)'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #4F46E5, #7C3AED, #EC4899)'
      }
    },
  },
  plugins: [],
};
