module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        beige: '#f5f2eb',
        'beige-dark': '#e6e2d8',
        'beige-darker': '#dcd8ce',
        green: '#e8f0e8',
        'green-dark': '#dcebdc',
        'green-darker': '#d0e0d0',
        'text-main': '#2d3748', // gray-800
        'text-secondary': '#4a5568', // gray-700
      },
      screens: {
        xs: '480px',
      },
      keyframes: {
        slideInDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-in-down': 'slideInDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
      },
    },
  },
  variants: {},
  plugins: [],
};
