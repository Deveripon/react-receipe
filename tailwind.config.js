/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    hover: "#27ae60",
                    DEFAULT: "#2ecc71",
                    active: "#27ae64",
                },
                textColor: {
                    heading: "#2ecc71",
                    subHeading: "#2c3e50",
                    paragraph: "#34495e",
                },
            },
            fontFamily: {
                heading: ["Rajdhani", "sans-serif"],
                subHeading: ["Play", "sans-serif"],
                paragraph: ["Quicksand", "sans-serif"],
            },
        },
    },
    plugins: [],
};
