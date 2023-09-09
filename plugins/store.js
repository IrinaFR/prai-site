import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			mainServices: [
				{
					title: 'Нейросети (NLP)',
					desc: 'Работаем с естесственным языком. Создаем и внедряем решения в области машинного зрения',
					icon: 'ai.svg',
					link: '/',
					color: '#0072FA'
				},
				{
					title: 'Веб-приложения',
					desc: 'Разбираемся в вашей задаче, разрабатываем и проектируем веб-сервисы под ключ, ведём сопровождение',
					icon: 'web.svg',
					link: '/',
					color: '#FA0096'
				},
				{
					title: 'Мобильные приложения',
					desc: 'Исследования, дизайн и продуктовый подход, разработка, аналитика',
					icon: 'app.svg',
					link: '/',
					color: '#28AF07'
				}
			],
			otherServices: [
				{
					title: 'Интеграции',
					link: '/'
				},
				{
					title: 'Аудит производительности',
					link: '/'
				},
				{
					title: 'UX/UI дизайн',
					link: '/'
				},
				{
					title: 'SEO-продвижение',
					link: '/'
				},
				{
					title: 'Контекстная реклама',
					link: '/'
				},
				{
					title: 'Таргетированная реклама',
					link: '/'
				}
			],
			ourProducts: [
				{
					title: 'PRAI',
					desc: 'Работаем с естесственным языком. Создаем и внедряем решения в области машинного зрения',
					icon: 'ai.svg',
					link: '/',
					color: '#48D118'
				},
				{
					title: '42 test',
					desc: 'Сервис для обучения алгоритмам',
					icon: 'web.svg',
					link: '/',
					color: '#0082FA'
				}
			]
		};
	},
	mutations: {
	},
	getters: {
		getMainServices: state => {
			return state.mainServices
		},
		getOtherServices: state => {
			return state.otherServices
		},
		getOurProducts: state => {
			return state.ourProducts
		},
	}
});

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(store);
});
