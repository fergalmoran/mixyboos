const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            ...colors,
            mixyboos: '#E734AE',
        },
        extend: {
            fontFamily: {
                sans: ['Titillium Web', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: ['responsive', 'hover'],
    plugins: [require('@tailwindcss/line-clamp')],
};
