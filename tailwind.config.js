
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}", // Include all relevant file types
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
		animation: {
		  blob: "blob 7s infinite",
		},
		keyframes: {
		  blob: {
			"0%": {
			  transform: "translate(0px, 0px) scale(1)",
			},
			"33%": {
			  transform: "translate(30px, -50px) scale(1.1)",
			},
			"66%": {
			  transform: "translate(-20px, 20px) scale(0.9)",
			},
			"100%": {
			  transform: "translate(0px, 0px) scale(1)",
			},
		  },
		},
	  },
	},
	plugins: [],
  }