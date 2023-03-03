/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBlack: "#19191B",
                mainWhite: "#F4F4F5",
                customGray: "#B6B7BB",
            },
        },
    },
    plugins: [],
};
