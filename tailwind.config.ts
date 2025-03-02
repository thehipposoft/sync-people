import {heroui} from '@heroui/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
            'bg-primary': '#FAFAFB',
            'primary-text': '#1A335D',
            'purple': '#7052E5',
            'green' : '#0095A9',
        },
        fontFamily: {
            "regular": ['var(--font-poppins-regular)'],
            "bold": ['var(--font-poppins-bold)'],
            "open-sans": ['var(--font-open-sans-regular)'],
        },
    },
  },
  darkMode: "class",
 plugins: [heroui()],
}
export default config
