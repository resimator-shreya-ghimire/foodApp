/** @type {import('tailwindcss').Config} */
export default {
  // Ensure the content array includes TypeScript files (.ts, .tsx)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Confirms scanning of all TS/TSX files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-blue-red': 'linear-gradient(to right, #ec2F4B, #009FFF)',
      },
    },
  },
  plugins: [],
}