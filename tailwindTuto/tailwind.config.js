/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#91d997",
                secondary: {
                    100: "#668ad4",
                    200: "#009dff",
                },
            },
            fontFamily: {
                myCustomFont: ['"Jacquard 12"'],
            },
        },
    },
    plugins: [],
};
