module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Avenir Next"', 'Avenir', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        avenir: ['"Avenir Next"', 'Avenir', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'set-bg': '#26262B',
        'set-bg-2': '#23252A',
        'set-tan': '#E6C3A5',
        'footer-bg': '#2B2D32',
        'muted': '#9ca3af',
        'muted-2': '#a1a1aa',
        'offwhite': '#f7f6f5',
        'nav-drop': '#1f2125',
        'testimonial-purple': '#765070',
        'dot-active': '#1D1D22',
        'dot-inactive': '#D5D4D4',
        'play-icon': '#9D9CA2',
        'set-border': '#E5E5E5',
      },
      backgroundImage: {
        'split-dark-light': 'linear-gradient(180deg, #26262B 0%, #26262B 50%, #FEFEFE 50%, #FEFEFE 100%)',
        'split-cta': 'linear-gradient(180deg, #FEFEFE 0%, #FEFEFE 50%, #2B2D32 50%, #2B2D32 100%)',
        'logo-grad': 'linear-gradient(180deg, #F1D2B7 -594.2%, #D9B291 10594.8%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        'nav': '6px',
        'testimonial': '24px',
      },
      fontSize: {
        'nav': ['14px', { lineHeight: '25.76px', letterSpacing: '0.9px' }],
      },
      boxShadow: {
        'premium': '0 30px 80px rgba(0,0,0,0.45)',
        'btn': '0 2px 4px rgba(0,0,0,0.05)',
        'play': '0 18px 40px rgba(0,0,0,0.25)',
        'logo-ring': '0 0 0 1px rgba(255,255,255,0.06)',
      },
      maxWidth: {
        '1440': '1440px',
        '1180': '1180px',
      }
    }
  },
  plugins: [],
}
