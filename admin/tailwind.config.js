/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ff512f",
                secondary: "#ff7e5f",
                accent: "#feb47b",
                "red-dark": "#b31217",
                "red-mid": "#e52d27",
                "midnight": "#0a0a0a",
            },
            backgroundImage: {
                'brand-gradient': "linear-gradient(135deg, #b31217, #e52d27, #ff512f)",
                'secondary-gradient': "linear-gradient(135deg, #ff7e5f, #feb47b)",
                'midnight-gradient': "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
