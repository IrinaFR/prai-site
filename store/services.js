import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
	state: () => ({
		mainServices: [
			{
				id: 1,
				title: 'Нейросети (NLP)',
				desc: 'Работаем с естесственным языком. Создаем и внедряем решения в области машинного зрения',
				icon: 'ai.svg',
				link: '/razrabotka-nejrosetej',
				color: '#0072FA'
			},
			{
				id: 2,
				title: 'Веб-приложения',
				desc: 'Разбираемся в вашей задаче, разрабатываем и проектируем веб-сервисы под ключ, ведём сопровождение',
				icon: 'web.svg',
				link: '/web-prilozheniya',
				color: '#FA0096'
			},
			{
				id: 3,
				title: 'Мобильные приложения',
				desc: 'Исследования, дизайн и продуктовый подход, разработка, аналитика',
				icon: 'app.svg',
				link: '/mobilnaya-razrabotka',
				color: '#28AF07'
			}
		],
		otherServices: [
			{
				id: 6,
				title: 'UX/UI дизайн',
				link: '',
				gradient: {
					stop_1: '#21617B',
					stop_2: '#152EB0',
				},
				color: '#6485e9',
				icon: 'design.svg',
				desc: 'Наши дизайнеры создадут пользовательский интерфейс, который обеспечит интуитивную навигацию и приятный опыт для пользователей. Мы учтем принципы UX для максимизации удовлетворенности и лояльности клиентов'
			},
			{
				id: 4,
				title: 'Интеграции',
				link: '',
				gradient: {
					stop_1: '#7B2172',
					stop_2: '#B01531',
				},
				color: '#d92243',
				icon: 'integration.svg',
			},
			{
				id: 5,
				title: 'Аудит производительности',
				link: '',
				gradient: {
					stop_1: '#7B7721',
					stop_2: '#B04D15',
				},
				color: '#e9651a',
				icon: 'audit.svg',
				desc: 'Мы проведем глубокий аудит вашего сайта для выявления узких мест и оптимизации производительности. Результаты аудита помогут улучшить скорость загрузки, удерживать пользователей и повысить конверсии'
			},
			{
				id: 7,
				title: 'SEO-продвижение',
				link: '',
				gradient: {
					stop_1: '#298100',
					stop_2: '#00777E',
				},
				color: '#12c1cb',
				icon: 'seo.svg',
				desc: 'Мы создадим стратегию SEO, оптимизируем ваш контент и структуру сайта, чтобы высоко ранжироваться в поисковых системах. Это привлечет больше органического трафика и увеличит видимость вашего бренда'
			},
			{
				id: 8,
				title: 'Контекстная реклама',
				link: '',
				gradient: {
					stop_1: '#ffffff',
					stop_2: '#748A92',
				},
				color: '#a1a1a1',
				icon: 'context.svg',
				desc: 'Мы разработаем эффективные контекстные рекламные кампании, чтобы ваш сайт появлялся перед аудиторией, заинтересованной в вашем продукте или услуге. Это повысит кликабельность и привлечет целевых посетителей'
			},
			{
				id: 9,
				title: 'Таргетированная реклама',
				link: '',
				gradient: {
					stop_1: '#960000',
					stop_2: '#895A00',
				},
				color: '#dbc71b',
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
	}),
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
		getColorServiceById: (state) => id => {
			const service = state.getAllServices.filter(s => s.id === id)
			return service[0].color
		},
		getNameServiceById: state => id => {
			const service = state.getAllServices.filter(s => s.id === id)
			return service[0].title
		}
	}
})
