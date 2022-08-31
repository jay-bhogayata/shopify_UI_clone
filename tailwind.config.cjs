/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myDark: "#6B7177",
        myFont: "#212326",
        regulerFont: "#42474c",
        hoverFont: "#212326",
        myLight: "#FBF7ED",
        myGreen: "#008060",
        myDarkgreen: "#004c3f",
        myDarkgreen2: "#002E25",
        myBg: "#f3fcf4",
        myFootercl: "#B6BABF",
      },
    },
    screens: {
      sm: "480px",
      md: "688px",
      lg: "1065px",
      xl: "1440px",
    },
  },
  plugins: [],
};
