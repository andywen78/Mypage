/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0f1c',
          soft: '#3b4252',
          muted: '#7a8699',
        },
        paper: {
          DEFAULT: '#fafaf7',
          soft: '#f2f1eb',
          grid: '#e7e6df',
        },
        accent: {
          DEFAULT: '#0f3d3e',
          hover: '#145758',
        },
        tech: {
          DEFAULT: '#2563eb',
          glow: '#3b82f6',
        },
        status: {
          live: '#10b981',
          pending: '#f59e0b',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Consolas"', 'monospace'],
      },
      maxWidth: {
        content: '76rem',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle, #d9d8cf 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
