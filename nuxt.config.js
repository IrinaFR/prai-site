// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	typescript: {
		strict: false
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
	sourcemap: {
		server: false,
		client: false
	},
	devtools: { enabled: true },
})
