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
        'header-text': '#6d708b',
        'toggle-color': '#bdbec2',
        'white-color': 'whitesmoke',
        'plan-bg-color': '#ffffff',
        'plan-hover-color': '#686ede',
        'plan-shadow-color': 'rgba(79, 70, 229, 0.07)',
        'plan-border-color': '#e0e7ff',
      },
      gradientColorStops: {
        'plan-start': '#a0a5f1',
        'plan-end': '#686ede',
        'toggle-on-start': '#dfe0fd',
        'toggle-on-end': '#bec9fa',
        'toggle-off-start': '#a0a5f1',
        'toggle-off-end': '#686ede',
      },
      boxShadow: {
        'plan-shadow': '15px 20px 30px rgba(79, 70, 229, 0.07)',
      },
    },
  },
  plugins: [],
};
export default config;
