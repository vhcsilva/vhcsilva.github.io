/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {}
    },
    colors: {
      background: '#0C0C0C',
      black: '#000000',
      white: '#FFFFFF',
      green: '#10CB8A',
      'green-opacity-25': 'rgba(16, 203, 138, .25)',
      'gray-200': '#595a5d',
      'gray-300': '#333437',
      gray: '#2d2f33',
      'gray-700': '#171819',
      'gray-900': '#17211f',
      red: '#d04322'
    }
  },
  plugins: []
}
