module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Avenir Next"', 'Avenir', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        avenir: ['"Avenir Next"', 'Avenir', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
      },
      backgroundImage: {
        'split-dark-light': 'linear-gradient(180deg, #26262B 0%, #26262B 50%, #FEFEFE 50%, #FEFEFE 100%)',
        'split-cta': 'linear-gradient(180deg, #FEFEFE 0%, #FEFEFE 50%, #2B2D32 50%, #2B2D32 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        'nav': '6px',
        'testimonial': '20px',
      },
      fontSize: {
        'nav': ['14px', { lineHeight: '25.76px', letterSpacing: '0.9px' }],
      }
    }
  },
  plugins: [],
}
