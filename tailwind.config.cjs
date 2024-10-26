/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			heading: ['Noto Serif', 'sans'],
			body: ['Montserrat', 'sans-serif']
		},
		extend: {
			boxShadow: {
				custom: '0 0 0 0.25rem rgba(253, 186, 116, 0.5)',
				whitening: '0 0 0 0.25rem rgba(255, 255, 255, 0.5)'
			}
		}
	},

	plugins: [require('daisyui'), require('@tailwindcss/forms')]
};

module.exports = config;
