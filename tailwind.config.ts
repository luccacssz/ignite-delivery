import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
      },
      colors: {
        product: {
          'yellow-dark': '#C47F17',
          yellow: '#DBAC2C',
          'yellow-light': '#F1E9C9',
          'purple-dark': '#4B2995',
          purple: '#8047F8',
          'purple-light': '#EBE5F9',
        },
        base: {
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4D',
          label: '#8D8686',
          hover: '#D7D5D5',
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2',
          background: '#FAFAFA',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}

export default config
