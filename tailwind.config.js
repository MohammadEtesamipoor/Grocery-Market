/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./public/**/*.html"],
    theme: {
        extend: {
            animation: {
                'bounce-1': 'bounce 1s ease-in-out 1',
                'pulse-1': 'pulse 1s ease-in-out 1',
            },
            backgroundImage: {
                'hero': " url('/assets/images/bg-hero-design-mobile.png')",
                'hero-main': " url('/assets/images/bg-design-hero-main.png')",
            },
            colors: {
                NestMartBrand1: '#3BB77E',
                NestMartBrand2: '#FDC040',
                NestMartBrandLight: '#81B13D',
                NestMartTextHeading: '#253D4E',
                NestMartTextBody: '#7E7E7E',
                NestMartBorder1: '#E5E5E5',
                NestMartBackground_grey1: '#F2F3F4',
                NestMartBackground_grey2: '#D7DEDB',
                NestMartDanger: '#FD6E6E',
                NestMartBorder3: '#BCE3C9',
                NestMartTextMuted: '#B6B6B6',
                NestMartBackgroundMuted: '#F5F5F5',
            }, fontFamily: {
                montserrat: ['var(--font-montserrat)'],
            },
            container: {
                center: true,
                padding: '1.5rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1632px'
                }
            }
        },
    }, plugins: [],
}
