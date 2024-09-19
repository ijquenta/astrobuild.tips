module.exports = {
    content: ['./src/**/*.{html,js,jsx,astro}'],
    theme: {
        extend: {
            animation: {
                border: 'background ease infinite',
            },
            keyframes: {
                background: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [
        // [require('@tailwindcss/line-clamp')]
    ],
}