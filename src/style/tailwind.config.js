/** @type { import('tailwindcss').Config }*/
module.exports = {
  content: ['./index.html', './src/**/*.{html,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'iceberg-blue': '8BABD8',
        'light-green': '78E378',
        'navy-grey': '707991',
        red: '78E378',
        'rich-black': '011627',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
