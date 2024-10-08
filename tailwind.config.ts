import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-roboto)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      blue: 'hsl(var(--blue))',
      white: 'hsl(var(--white))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        hover: 'hsl(var(--primary-hover))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      success: {
        DEFAULT: 'hsl(var(--success))',
        foreground: 'hsl(var(--success-foreground))',
      },
      warning: {
        DEFAULT: 'hsl(var(--warning))',
        foreground: 'hsl(var(--warning-foreground))',
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))',
      },
    },
    borderRadius: {
      full: 'var(--radius-full)',
      lg: 'var(--radius-lg)',
      md: 'var(--radius-md)',
      sm: 'var(--radius-sm)',
      xs: 'var(--radius-xs)',
      otp: 'var(--radius-otp)',
    },
    boxShadow: {
      md: 'var(--shadow)',
    },

    extend: {
      spacing: {
        '4.5': '1.125rem',
      },
      fontSize: {
        xxs: [
          '0.6875rem',
          {
            lineHeight: '0.825rem',
          },
        ],
        xl: [
          '1.0625rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '0.02em',
          },
        ],
      },
      backgroundImage: {
        'dialog-triangle': 'url("/dialog-triangle-icon.svg")',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [tailwindAnimate],
}
export default config
