// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: {
		strict: false
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/style/_variables.scss";'
				}
			}
		}
	},
	css: ['~/style/style.scss'],
	devtools: { enabled: true },
})
