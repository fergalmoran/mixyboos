module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: [
        'responsive',
        'hover'
    ],
    plugins: [require('@tailwindcss/line-clamp')],
};
