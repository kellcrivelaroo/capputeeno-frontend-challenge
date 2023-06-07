/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        logo: 'var(--font-logo)',
      },
      width: {
        container: '1120px',
      },
      maxWidth: {
        container: '1120px',
      },
      minWidth: {
        container: '1120px',
      },
    },
    colors: {
      brand: {
        logo: '#5D5D6D',
        blue: '#115D8C',
        orange: '#F25D27',
      },
      gray: {
        light: '#737380',
        dark: '#41414D',
        bg: '#f0f0f5',
        input: '#F3F5F6',
        button: '#617480',
        darkest: '#09090A',
        div: '#DCE2E5',
        pagination: '#E9E9F0',
      },
      cart: {
        orange: '#FFA585',
        red: '#DE3838',
        green: '#51B853',
      },
      white: '#FFFFFF',
      black: '#000000',
      transparent: '#00000000',
    },
  },
  plugins: [],
}
