/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html,jsx,tsx}', '*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1240px',
      xl: '1440px',
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.9375rem', // 15px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.5rem', // 24px
      '2xl': '1.75rem', // 28px
      '3xl': '2rem', // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '3rem', // 48px
      '6xl': '4.5rem', // 72px
    },
    extend: {
      colors: {
        'dark-cyan': 'hsl(179 81% 29%)',
        'dark-grey-blue': 'hsl(215, 19%, 25%)',
        'pale-orange': 'hsl(25, 94%, 86%)',
        'light-cream': 'hsl(43, 78%, 98%)',
        grey: 'hsl(215, 5%, 54%)',

        'body-light': 'hsl(43 78% 98%)',
        'body-dark': 'hsl(215, 19%, 25%)',
        'body-highlight': 'hsl(179 81% 29%)',

        'heading-light': 'hsl(43 78% 98%)',
        'heading-dark': 'hsl(215, 19%, 25%)',
        'heading-grey': 'hsl(215, 5%, 54%)',

        'bg-primary': 'hsl(179 81% 29%)',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        body: ['Barlow', 'sans-serif'],
        heading: ['Fraunces', 'serif'],
      },

      fontWeight: {
        black: 900,
        bold: 700,
        base: 400,
      },
      lineHeight: {
        relaxed: 1.66667,
        base: 1.625,
      },
      backgroundImage: {
        quality: 'url(assets/about/desktop/bg-quality.png)',
      },
      gridTemplateColumns: {
        custom: '255px 730px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
