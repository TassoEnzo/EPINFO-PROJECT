/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Novo breakpoint para telas pequenas
        sm: "640px", // Breakpoint padrão
        md: "768px", // Breakpoint padrão
        lg: "1024px", // Breakpoint padrão
        xl: "1280px", // Breakpoint padrão
        "2xl": "1536px", // Breakpoint padrão
      },
    },
  },
  plugins: [],
}

