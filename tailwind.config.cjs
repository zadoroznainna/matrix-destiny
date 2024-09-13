/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			heading: ['Noto Serif', 'sans'],
			body: ['Montserrat', 'sans-serif']
		},
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
