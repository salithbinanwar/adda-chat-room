module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '20rem',
        xl: '25rem',
        '2xl': '10rem',
      },
    }
  },
  plugins: [],
}