import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      colors:{



        'custom-pink': '#f6cbd1',
        'custom-purple':'#EF95BF',
        'modal-backdrop': 'transparent',
        'custom-dark':'#635278',
        'pinkish':'#ef95bf'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: ["pastel"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    Theme: "light",

    modal: {
      backdrop: 'modal-backdrop', // Use the custom color
    },
  },
};
