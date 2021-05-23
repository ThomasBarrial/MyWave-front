module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coral: {
          default: 'hsl(360, 78%, 68%)',
          dark: 'hsl(360, 78%, 08%)',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        form: '75vh',
      },
    },
  },
  variants: {},
  plugins: [],
};
