import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Logo gradient: koyu royal lacivert → parlak mavi
        navy: {
          DEFAULT: '#16399E', // logodaki ana royal lacivert
          dark: '#0A1F5F', // logonun en koyu sol-üst tonu
          light: '#2956C5', // logonun parlak sağ-alt tonu
        },
        brand: {
          red: '#c8102e',
          'red-dark': '#a30d25',
        },
        whatsapp: {
          DEFAULT: '#25d366',
          dark: '#1ebe5b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 4px 16px rgba(22, 57, 158, 0.08)',
        lg2: '0 12px 40px rgba(22, 57, 158, 0.14)',
      },
      animation: {
        'pulse-wa': 'pulse-wa 2s infinite',
      },
      keyframes: {
        'pulse-wa': {
          '0%, 100%': {
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.4)',
          },
          '50%': {
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 14px rgba(37, 211, 102, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
