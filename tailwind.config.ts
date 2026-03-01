import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'rgb(241 252 250)',
          100: 'rgb(206 244 239)',
          200: 'rgb(156 233 225)',
          300: 'rgb(94 217 204)',
          400: 'rgb(44 195 180)',
          500: 'rgb(14 135 123)',
          600: 'rgb(12 115 105)',
          700: 'rgb(9 86 78)',
          800: 'rgb(7 67 62)',
          900: 'rgb(5 49 45)'
        },
      },
    },
  },
  plugins: [],
}

export default config
