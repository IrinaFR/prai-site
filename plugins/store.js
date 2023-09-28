import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			header: {
				logo: '#3843FF',
				opacity: 0.70,
				border: 'rgba(0, 114, 250, 0.18)',
				bgHeader: '255, 255, 255',
				colorHeader: '#010004',
			},
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
					link: '/veb-prilozheniya',
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
					title: 'UX/UI дизайн',
					link: '/',
					gradient: {
						stop_1: '#21617B',
						stop_2: '#152EB0',
					},
					icon: 'design.svg',
					desc: 'Наши дизайнеры создадут пользовательский интерфейс, который обеспечит интуитивную навигацию и приятный опыт для пользователей. Мы учтем принципы UX для максимизации удовлетворенности и лояльности клиентов'
				},
				{
					title: 'Интеграции',
					link: '/',
					gradient: {
						stop_1: '#7B2172',
						stop_2: '#B01531',
					},
					icon: 'integration.svg',
				},
				{
					title: 'Аудит производительности',
					link: '/',
					gradient: {
						stop_1: '#7B7721',
						stop_2: '#B04D15',
					},
					icon: 'audit.svg',
					desc: 'Мы проведем глубокий аудит вашего сайта для выявления узких мест и оптимизации производительности. Результаты аудита помогут улучшить скорость загрузки, удерживать пользователей и повысить конверсии'
				},
				{
					title: 'SEO-продвижение',
					link: '/',
					gradient: {
						stop_1: '#298100',
						stop_2: '#00777E',
					},
					icon: 'seo.svg',
					desc: 'Мы создадим стратегию SEO, оптимизируем ваш контент и структуру сайта, чтобы высоко ранжироваться в поисковых системах. Это привлечет больше органического трафика и увеличит видимость вашего бренда'
				},
				{
					title: 'Контекстная реклама',
					link: '/',
					gradient: {
						stop_1: '#ffffff',
						stop_2: '#748A92',
					},
					icon: 'context.svg',
					desc: 'Мы разработаем эффективные контекстные рекламные кампании, чтобы ваш сайт появлялся перед аудиторией, заинтересованной в вашем продукте или услуге. Это повысит кликабельность и привлечет целевых посетителей'
				},
				{
					title: 'Таргетированная реклама',
					link: '/',
					gradient: {
						stop_1: '#960000',
						stop_2: '#895A00',
					},
					icon: 'target.svg',
					desc: 'С помощью таргетированной рекламы мы точно определим вашу целевую аудиторию и доставим рекламу только им. Это повысит вероятность привлечения потенциальных клиентов, готовых совершить действие.'
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
			],
			width: 1440
		};
	},
	mutations: {
		setWidthScreen(state, width){
			state.width = width
		},
		setHeader(state, data){
			state.header = data
		}
	},
	getters: {
		getMainServices: state => {
			return state.mainServices
		},
		getOtherServices: state => {
			return state.otherServices
		},
		getAllServices: state => {
			return state.otherServices.concat(state.mainServices)
		},
		getOtherServicesWithoutIntegr: state => {
			return state.otherServices.filter(s => s.title !== 'Интеграции')
		},
		getOurProducts: state => {
			return state.ourProducts
		},
		getWidth: state => {
			return state.width
		},
		getHeader: state => {
			return state.header
		},
	}
});

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(store);
});
