/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'ohc-light': '#FDF8F4',
        'ohc-main': '#ff6501',
        'ohc-semi-light': '#FAE6D6',
        'ohc-dark-dark': '#0C1D37',
        'ohc-gray': '#D4D2D4',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
    container: {
      center: true,
      padding: '1rem 0',
      screens: {
        lg: '1124px',
        xl: '1200px',
        '2xl': '1560px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
