/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#4a4a4a',
          muted: '#8a8a8a',
        },
        paper: {
          DEFAULT: '#fafaf7',
          soft: '#f3f2ed',
        },
        accent: {
          DEFAULT: '#0f3d3e',
          hover: '#195657',
        },
        highlight: '#f4c542',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
