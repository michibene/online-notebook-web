/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBlack: "#19191B",
                mainWhite: "#F4F4F5",
                customGray: "#B6B7BB",
                customGrayLight: "#E0E0E6",
                noteBlue: "#4A9FFF",
                noteGreen: "#00C39A",
                noteYellow: "#FFD155",
            },
        },
    },
    plugins: [],
};
