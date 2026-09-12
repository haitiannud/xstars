// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'x-red': {
          DEFAULT: '#E50914',
          dark: '#C40812',
          darker: '#A3070F',
        },
        'x-black': {
          DEFAULT: '#0D0D0D',
          light: '#1A1A1A',
          lighter: '#2B2B2B',
        },
        'x-graphite': {
          DEFAULT: '#2E2E34',
          light: '#42424A',
          dark: '#1C1C20',
        },
        'x-white': {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAFA',
          muted: '#BDBDBD',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.4) 50%, rgba(13,13,13,1) 100%)',
        'red-glow': 'radial-gradient(ellipse at center, rgba(229,9,20,0.3) 0%, rgba(229,9,20,0) 70%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'premium': 'linear-gradient(135deg, #E50914 0%, #C40812 50%, #A3070F 100%)',
      },
      boxShadow: {
        'glow-red': '0 0 40px rgba(229, 9, 20, 0.3), 0 0 80px rgba(229, 9, 20, 0.1)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.15)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(229, 9, 20, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};