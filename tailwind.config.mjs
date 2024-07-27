import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
				title: ["The Nautigal", ...defaultTheme.fontFamily.sans],
				subtitle: ["Sacramento", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				lavande: "#9683EC",
			},
		},
	},
	plugins: [],
};
