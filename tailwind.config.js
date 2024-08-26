/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screen: {
        'xs': '0px',    // Custom breakpoint for 0px and above
        'sm': '640px',  // Small screens (640px and above)
        'md': '768px',  // Medium screens (768px and above)
        'lg': '1024px', // Large screens (1024px and above)
        'xl': '1280px', // Extra large screens (1280px and above)
      }
    },
  },
  plugins: [],
};
