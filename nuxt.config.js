import dotenv from 'dotenv'
dotenv.config()
export default defineNuxtConfig({
	ssr: true,
	build: {
		transpile: ['gsap'],
		// extractCSS: true, // разбивает css в отдельны файл, для кэширования
		terser: {
			terserOptions: {
				compress: {
					drop_console: true // удаляет консоли
				}
			}
		}
	},
	render: {
		static: {
			// срок кэширования статических файлов
			maxAge: 60 * 60 * 24 * 7,
		},
		// csp: {
		// 	policies: {
		// 		'default-src': ["'self'"],
		// 		'img-src': ['https:', 'https://team.prai.su', 'https://core-renderer-tiles.maps.yandex.net', 'https://yandex.ru', 'data:'],
		// 		'script-src': ["'self'", "'unsafe-inline'"],
		// 		'style-src': ["'self'"],
		// 		"content-src": ["'self'", 'https://team.prai.su', 'data:', ' https://core-renderer-tiles.maps.yandex.net', 'https://yandex.ru', 'https://api-maps.yandex.ru'],
		// 		'object-src': ["'self'", 'none']
		// 	}
		// }
	},
	router: {
		// Предзагрузка страниц до того как пользователь перейдёт на неё
		prefetchLinks: true,
	},
	routeRules: {
		'/services': { redirect: '/services/razrabotka-nejrosetej' }
	},
	experimental: {
		defaults: {
			nuxtLink: {
				trailingSlash: 'append'
			}
		}
	},
	runtimeConfig: {
		app: {
			apiServer: process.env.NUXT_API_SERVER,
			apiServerImg: process.env.NUXT_API_SERVER_IMG,
			apiKeyYandexMaps: process.env.NUXT_API_YANDEX_MAPS,
			port: process.env.PORT
		},
		public: {
			baseUrl: process.env.NUXT_PUBLIC_PATH,
			apiServer: process.env.NUXT_API_SERVER,
			apiServerImg: process.env.NUXT_API_SERVER_IMG,
		}
	},
	app:{
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [
				{
					property: 'og:type',
					content: 'website'
				},
				{
					'http-equiv': 'Content-Security-Policy',
					content: "script-src 'self' https://team.prai.su https://www.googletagmanager.com data: blob: https://api-maps.yandex.ru https://yastatic.net 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https://team.prai.su data: https://core-renderer-tiles.maps.yandex.net https://yandex.ru; connect-src 'self' https://team.prai.su https://yastatic.net data: https://core-renderer-tiles.maps.yandex.net https://yandex.ru https://api-maps.yandex.ru;"
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon.svg',
				},
			]
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
		},
		resolve: {
			alias: {
				'#build/store': '',
				'#build/utils': '',
				'#build/components': '',
			},
		}
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => {
				return tag.toLocaleLowerCase().includes('lineargradien')
			}
		}
	},
	// site: { // Настройки @muxtjs/seo
	// 	url: process.env.NUXT_PUBLIC_PATH,
	// },
	image: { // Настройки @nuxt/image
		provider: 'ipx',
		formats: ['webp', 'jpg', 'png', 'gif'],
		static: {
			dir: 'img',
		},
		// cache: { // 23 часа
		// 	maxAge: 60 * 60 * 23,
		// },
	},
	css: ['~/style/style.scss'],
	modules: [
		'@pinia/nuxt',
		'@zadigetvoltaire/nuxt-gtm',
		'@nuxt/image',
		'nuxt-swiper',
		'vue-yandex-maps/nuxt',
		"@nuxtjs/sitemap",
		'@nuxtjs/robots'
		// '@nuxtjs/seo'
	],
	robots: {
		UserAgent: '*',
	},
	yandexMaps: {
		apikey: process.env.NUXT_API_YANDEX_MAPS,
	},
	plugins: [
		'~/plugins/axios.js',
		'~/plugins/request.js'
	],
	gtm: {
		id: 'GTM-NF3F9PH6',
	},
	sourcemap: {
		server: false,
		client: false
	},
	devtools: { enabled: true },
	site: {
		url: 'https://team.prai.su',
	},
	sitemap: {
		hostname: 'https://team.prai.su', // Замените на ваш домен
		routes: async () => {
			// Тут надо дописать, чтобы ссылки на новости и кейсы добавлялись. Это есть в документации плагина
			return [
				'/page1',
				'/page2',
				'/dynamic-page/1',
				'/dynamic-page/2'
			];
		},
		gzip: true, // Включает сжатие карты сайта
		changefreq: 'daily', // Частота обновления страниц
		priority: 1.0, // Приоритет страниц
		// Вы можете добавить другие настройки здесь
	}
})
