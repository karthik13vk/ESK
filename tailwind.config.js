export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Bahamas Normal"', "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
        third: ['"Breathy Signature Personal Use"', "cursive"], // your custom font
      },
      keyframes: {
        wptb_squares: {
          "0%": {
            transform: "scale(1)",
            opacity: "0",
          },
          "20%": {
            transform: "scale(1.24)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(2.1)",
            opacity: "0",
          },
        },
      },
      animation: {
        wptb_squares: "wptb_squares 3.9s linear infinite",
      },
       screens: {
        custom992: '992px',
      },
    },
     colors: {
        gold: {
          DEFAULT: '#C68313',
        },
      },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
