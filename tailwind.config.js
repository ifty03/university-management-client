/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#1FB2A6",

        secondary: "#D926A9",

        accent: "#1FB2A6",

        neutral: "#191D24",

        "base-100": "#2A303C",

        info: "#3ABFF8",

        success: "#16a34a",

        warning: "#FBBD23",

        error: "#F87272",
      },
    },
  ],

  plugins: [require("daisyui")],
};
