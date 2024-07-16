import type { Config } from "tailwindcss";






const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,js x,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-purple': '#320D3E',
        'custom-yellow' : '#FFC973',
        'custom-pink' : '#C859BA'
      },
    },
  },
  plugins: [],
};
export default config;
