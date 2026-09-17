/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05070d',
          900: '#080b14',
          800: '#0c111c',
          700: '#121826',
          600: '#1a2233',
        },
        neon: {
          blue: '#4d9fff',
          cyan: '#5ce1e6',
          purple: '#8b7cff',
          violet: '#c084fc',
          mint: '#5eead4',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(77, 159, 255, 0.18)',
        'glow-purple': '0 0 40px rgba(139, 124, 255, 0.18)',
        card: '0 18px 50px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(125, 160, 220, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(125, 160, 220, 0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(0.85)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'orbit-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'pulse-dot': 'pulseDot 1.8s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        blink: 'blink 1s step-end infinite',
        orbit: 'orbit-spin 24s linear infinite',
      },
    },
  },
  plugins: [],
};
