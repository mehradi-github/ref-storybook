import type { Config } from 'tailwindcss';
import { colors, white, black, transparent, currentColor } from './src/tokens/colors';
export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      transparent,
      currentColor,
    },
  },
  plugins: [],
} satisfies Config;
