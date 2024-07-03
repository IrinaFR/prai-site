import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
	state: () => ({
		mainServices: [
			{
				id: 1,
				title: 'Нейросети (NLP)',
				desc: 'Работаем с естесственным языком. Создаём и внедряем решения в области машинного зрения',
				icon: 'ai.svg',
				link: '/services/razrabotka-nejrosetej',
				color: '#0072FA'
			},
			{
				id: 2,
				title: 'Веб-приложения',
				desc: 'Разбираемся в вашей задаче, разрабатываем и проектируем веб-сервисы под ключ, ведём сопровождение',
				icon: 'web.svg',
				link: '/services/web-prilozheniya',
				color: '#FA0096'
			},
			{
				id: 3,
				title: 'Мобильные приложения',
				desc: 'Исследования, дизайн и продуктовый подход, разработка, аналитика',
				icon: 'app.svg',
				link: '/services/mobilnaya-razrabotka',
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
					stop_2: '#152EB0CA',
				},
				color: '#6485e9',
				icon: 'design.svg',
				desc: 'Наши дизайнеры создадут пользовательский интерфейс, который обеспечит интуитивную навигацию и приятный опыт для пользователей. Мы учтём принципы UX для максимизации удовлетворённости и лояльности клиентов'
			},
			{
				id: 4,
				title: 'Интеграции',
				link: '',
				gradient: {
					stop_1: '#7B2172',
					stop_2: '#B01531CA',
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
					stop_2: '#B04D15CA',
				},
				color: '#e9651a',
				icon: 'audit.svg',
				desc: 'Мы проведём глубокий аудит вашего сайта для выявления узких мест и оптимизации производительности. Результаты аудита помогут улучшить скорость загрузки, удерживать пользователей и повысить конверсии'
			},
			{
				id: 7,
				title: 'SEO-продвижение',
				link: '',
				gradient: {
					stop_1: '#298100',
					stop_2: '#00777ECA',
				},
				color: '#12c1cb',
				icon: 'seo.svg',
				desc: 'Мы создадим стратегию SEO, оптимизируем ваш контент и структуру сайта, чтобы высоко ранжироваться в поисковых системах. Это привлечёт больше органического трафика и увеличит видимость вашего бренда'
			},
			{
				id: 8,
				title: 'Контекстная реклама',
				link: '',
				gradient: {
					stop_1: '#ffffff',
					stop_2: '#748A92CC',
				},
				color: '#a1a1a1',
				icon: 'context.svg',
				desc: 'Мы разработаем эффективные контекстные рекламные кампании, чтобы ваш сайт появлялся перед аудиторией, заинтересованной в вашем продукте или услуге. Это повысит кликабельность и привлечёт целевых посетителей'
			},
			{
				id: 9,
				title: 'Таргетированная реклама',
				link: '',
				gradient: {
					stop_1: '#960000',
					stop_2: '#895A00CA',
				},
				color: '#dbc71b',
				icon: 'target.svg',
				desc: 'С помощью таргетированной рекламы мы точно определим вашу целевую аудиторию и доставим рекламу только им. Это повысит вероятность привлечения потенциальных клиентов, готовых совершить действие'
			}
		],
		ourProducts: [
			{
				title: 'PRAI',
				desc: 'Искусственный интеллект по связям с общественностью',
				icon: 'prai.webp',
				link: 'https://prai.su',
				color: '#fff'
			},
			{
				title: 'Grade AI',
				desc: 'Сервис для оценки достаточности и удобства городской инфраструктуры',
				icon: 'gradeai.webp',
				link: 'http://gradeai.ru',
				color: '#fff'
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
