import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: 'class', 
  theme: {
    colors:{
      'transparent':'transparent',
      'white':'#ffffff',
      'black' : '#000112',
      'veryDarkGray':'#20212C',
      'darkGray':'#2B2C37',
      'lines':'#E4EBFA',
      'mediumGray':'#828FA3',
      'lightGray':'#F4F7FD',
      'mainPurple':'#A729F5',
      'secondaryPurple':'#A8A4FF',
      'mainRed':'#EA5555',
      'secondaryRed':'#FF9898',
      'darkNavy':'#313E51',
      'navy':'#3B4D66'
    },
    extend: {
      backgroundImage: {
        'light-background': "url('/pattern-background-desktop-light.svg)",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        // Simple 16 row grid
        '20': 'repeat(20, minmax(0, 1.25em))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
} satisfies Config;
