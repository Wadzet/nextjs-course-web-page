import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#f3f7fc',
        'text-color': '#484a5e',
        'header-text-color': '#6d708b',
        'toggle-text-color': '#bdbec2',
        'white-color': 'whitesmoke',
        'plan-bg-color': '#ffffff',
        'plan-hover-color': '#686ede',
        'plan-shadow-color': 'rgba(79, 70, 229, 0.07)',
        'plan-border-color': '#e0e7ff',
      },
      gradientColorStops: {
        'plan-accent-gradient-start': '#a0a5f1',
        'plan-accent-gradient-end': '#686ede',
        'toggle-on-gradient-start': '#dfe0fd',
        'toggle-on-gradient-end': '#bec9fa',
        'toggle-off-gradient-start': '#a0a5f1',
        'toggle-off-gradient-end': '#686ede',
      },
    },
  },
  plugins: [],
};
export default config;
