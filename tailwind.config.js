/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#004225',
        cream: '#F5EFE7',
        copper: '#B46A34',
        charcoal: '#2A2E2F',
        taupe: '#8E7F74',
      },
    },
  },
  plugins: [],
}
