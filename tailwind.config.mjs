/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '2rem 0 2rem 0',
        'custom2': '1rem 0 1rem 0',
        'custom3': '0rem 4rem 0rem 4rem',
        'custom4': '4rem 0rem 4rem 0rem',
        'custom5': '0rem 4rem 0rem 4rem',
        'custom6': '4rem 0rem 4rem 0rem',
        'custom7': '0rem 4rem 0rem 4rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        philosopher: ['var(--font-philosopher)'],
        'crimson-pro': ['var(--font-crimson-pro)'],
      },
    },
  },
  plugins: [],
};
