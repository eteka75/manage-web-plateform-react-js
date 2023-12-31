/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1240px',

    },
    extend: {
        colors:{
            brightRed:'hsl(12,88%,59%)',
            brightRedLight:'hsl(12,88%,69%)',
            brightRedLightSupLight:'hsl(12,88%,95%)',
            darkBlue:'hsl(228, 39%, 23%)',
            darkGrayishBlue:'hsl(227, 12%, 61%)',
            veryDarkBlue:'hsl(233, 12%, 13%)',
            veryPaleRed:'hsl(13, 100%, 98%)',
            veryLightGray:'hsl(0, 0%, 98%)'
        }
    },
  },
  plugins: [],
}

