/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00e6ff',
        'neon-pink': '#ff0096',
        'neon-purple': '#9600ff',
        'gameboy-green': '#0f380f',
        'gameboy-light-green': '#306230',
        'gameboy-dark': '#0a290a',
        'terminal-green': '#00ff00',
        'synthwave-dark': '#120b2e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'noise': 'noise 0.5s steps(8, end) infinite alternate',
        'flicker': 'flicker 0.3s infinite alternate',
        'blink': 'blink 1s step-end infinite',
        'typing': 'typing 2s steps(30, end)',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
      },
      fontFamily: {
        'pixel': ['"PixelFont"', '"VCR"', 'monospace'],
        'vcr': ['"VCR"', 'monospace'],
      },
      dropShadow: {
        'neon-blue': '0 0 10px rgba(0, 230, 255, 0.7)',
        'neon-pink': '0 0 10px rgba(255, 0, 230, 0.7)',
      },
    },
  },
  plugins: [],
};