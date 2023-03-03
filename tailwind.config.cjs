/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBlack: "#19191b",
                mainWhite: "#f4f4f5",
            },
        },
    },
    plugins: [],
};
