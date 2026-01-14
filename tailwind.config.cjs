module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // keep your default
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],

        // add figma navbar font
        avenir: ['"Avenir Next"', 'Avenir', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'set-bg': '#26262B',
        'set-bg-2': '#23252a',
        'muted': '#9ca3af',
        'muted-2': '#a1a1aa',
        'offwhite': '#f7f6f5',

        // optional exact-ish navbar/dropdown bg
        'nav-drop': '#1f2125',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',

        // figma button radius = 6px
        'nav': '6px',
      }
    }
  },
  plugins: [],
}
