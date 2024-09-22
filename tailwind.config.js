/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '850px',
      },
      boxShadow: {
        'light-blue': '0 4px 8px rgba(173, 216, 230, 0.3)',
        'darker-blue': '0 4px 8px rgba(0, 101, 140, 0.3)',  // Custom light blue shadow
      },
      colors: {
        'navbar': '#4A5568',
        'topbar': '#2C7A7B',

        'deep-blue': '#003366',
        'light-blue': '#E0F7FA',
        'light-blue-hover': '#B2EBF2',   // Darker shade for hover
        'light-blue-active': '#80DEEA',
        'light-blue-active-pro': '#6CCAD9',
        'emerald-green': '#2E7D32',
        'coral': '#FF6F61',
        'light-gray': '#F5F5F5',
        'dark-gray': '#424242',
        'gray': '#B0BEC5',
        'gray-100': '#f3f4f6',
        'light-gray-hover': '#E0E0E0',
        'light-gray-active': '#BDBDBD',
        'midnight-blue': '#002244',
        'aqua': '#00FFFF',
        'sea-green': '#20B2AA',
        'sunset-orange': '#FF4500',
        'lavender': '#E6E6FA',
        'sand': '#C2B280',
        'charcoal': '#333333',
        'rose': '#FF007F',
        'soft-yellow': '#FFF9C4',
        'sky-blue': '#87CEEB',
      },
    },
  },
  plugins: [],
};
