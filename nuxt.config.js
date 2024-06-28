// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	build: {
		transpile: ['gsap'],
	},
	runtimeConfig: {
		app: {
			apiServer: process.env.NUXT_API_SERVER,
			apiServerImg: process.env.NUXT_API_SERVER_IMG
		},
		public: {
			baseUrl: process.env.NUXT_PUBLIC_PATH
		}
	},
	app:{
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'ПРАЙ',
			description: 'Разработка сайтов, мобильных приложений, нейросетей (NLP) любой сложности по Краснодару и всей России'
		},
		script: [
			{src: '/script/gtm.js'}
		]
		// pageTransition: { name: 'page', mode: 'out-in' }
	},
	typescript: {
		strict: false
	},
	devServer: {
		url: 'http://127.0.0.1',
		port: '3000'
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/style/_variables.scss"; @import "@/style/_mixins.scss";'
				}
			}
		}
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => {
				return tag.toLocaleLowerCase().includes('lineargradien')
			}
		}
	},
	css: ['~/style/style.scss'],
	modules: [
		'@pinia/nuxt',
		'@zadigetvoltaire/nuxt-gtm',
	],
	gtm: {
		id: 'GTM-NF3F9PH6',
	},
	sourcemap: {
		server: false,
		client: false
	},
	devtools: { enabled: true },
})
