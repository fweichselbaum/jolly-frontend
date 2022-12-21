/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				cardsdark: {
					'primary': '#BA000D',
					'secondary': '#A19D9E',
					'accent': '#E9E9E9',
					'neutral': '#1c1917',
					'base-100': '#292524',
					'info': '#E9E9E9',
					'success': '#a3e635',
					'warning': '#E19B0E',
					'error': '#FA6547',
				},
			},
			{
				cardslight: {
					'primary': '#BA000D',
					'secondary': '#A19D9E',
					'accent': '#292524',
					'neutral': '#1c1917',
					'base-100': '#E9e9e9',
					'info': '#292524',
					'success': '#65a30d',
					'warning': '#eab308',
					'error': '#dc2626',
				},
			},
			'dark',
			'light',
		],
	},
	plugins: [require('daisyui')],
};
