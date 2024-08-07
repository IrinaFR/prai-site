<template lang="pug">
.root-web
	PraiIndexScreenNew
	PraiUiContent
		PraiUiListProducts(:products="products" class="light-pink" subtitle="Типы сайтов")
		PraiUiBenefits(:benefits="benefits" class="light-pink" subtitle="Возможности")
		PraiUiIntegrations(class="light-pink")
		PraiUiStep(class="light-pink" :steps="steps")
		PraiUiStack(class="light-pink")
		PraiUiCases(class="light-pink")
		PraiFeedbackGoose(class="light-pink")
</template>

<script setup>
	const PraiUiContent = defineAsyncComponent(() => import('/components/ui/PraiUiContent.vue'))
	const PraiIndexScreenNew = defineAsyncComponent(() => import('/components/web/PraiIndexScreenNew.vue'))
	const PraiUiListProducts = defineAsyncComponent(() => import('/components/ui/PraiUiListProducts.vue'))
	const PraiUiBenefits = defineAsyncComponent(() => import('/components/ui/PraiUiBenefits.vue'))
	const PraiUiIntegrations = defineAsyncComponent(() => import('/components/ui/PraiUiIntegrations.vue'))
	const PraiUiStep = defineAsyncComponent(() => import('/components/ui/PraiUiStep.vue'))
	const PraiUiStack = defineAsyncComponent(() => import('/components/ui/PraiUiStack.vue'))
	const PraiUiCases = defineAsyncComponent(() => import('/components/ui/PraiUiCases.vue'))
	const PraiFeedbackGoose = defineAsyncComponent(() => import('/components/feedback/PraiFeedbackGoose.vue'))

	import {useHeaderStore} from "/store/header";
	const store = useHeaderStore()

	const defaultTitle = 'Создание сайта любой сложности «под ключ»'
	const defaultDescription = 'Заказать создание сайта любой сложности: ✔️ Современный дизайн ✔️ Интеграция 1С ✔️ Интернет-магазины ✔️ CRM система ✔️ Индивидуальные решения!'
	useHead({
		title: defaultTitle,
		meta: [
			{ name: 'description', content: defaultDescription },
			{ property: 'og:title', content: defaultTitle },
			{ property: 'og:description', content: defaultDescription },
			{ property: 'og:type', content: 'article' },
			{ property: 'article:author', content: 'Компания разработчик PRAI' },
			{ property: 'article:section', content: 'Веб приложения' },
			{ property: 'article:tag', content: 'CRM-системы' },
			{ property: 'article:tag', content: 'Интернет-магазины' },
			{ property: 'article:tag', content: 'Корпоративные сайты' },
			{ property: 'article:published_time', content: '2024-07-01T19:24:06+00:00' },
			{ property: 'article:modified_time', content: '2024-07-01T19:24:06+00:00' },
		]
	})


	onMounted(() => {
		store.setHeader({
			logo: '#ff4bb5',
			opacity: 0.78,
			border: 'rgba(250, 0, 150, 0.2)',
			bgHeader: '10, 10, 10,',
			colorHeader: '#ffffff',
		})
	})

	const products = [
		{
			title: 'Интерактивные платформы для электронной коммерции',
			desc: 'Мы разрабатываем мощные платформы для онлайн-продаж, обеспечивая высокую конверсию и удобство для покупателей.',
			icon: 'shop.svg',
			color: '#FA0096'
		},
		{
			title: 'Корпоративные порталы и внутренние системы',
			desc: 'Создание удобных и функциональных порталов для бизнеса с разветвленной структурой и внутренними системами управления.',
			icon: 'crm.svg',
			color: '#5F00FA'
		},
		{
			title: 'Социальные сети и коммуникационные платформы',
			desc: 'Разработка мощных социальных сетей и приложений для обмена сообщениями, поддерживающих миллионы пользователей.',
			icon: 'chats.svg',
			color: '#0073FA'
		},
		{
			title: 'Образовательные платформы и онлайн-курсы',
			desc: 'Создание современных платформ для обучения с возможностью управления курсами, тестирования и анализа успеваемости.',
			icon: 'education.svg',
			color: '#00BEFA'
		},
		{
			title: 'Сервисы бронирования и заказа услуг',
			desc: 'Разработка систем бронирования, заказа билетов, услуг и столов в ресторанах для удовлетворения потребностей клиентов.',
			icon: 'ticket.svg',
			color: '#1FDE49'
		},
		{
			title: 'Игровые платформы и развлекательные приложения',
			desc: 'Создание интерактивных игровых платформ и развлекательных приложений с уникальным контентом.',
			icon: 'games.svg',
			color: '#FAF000'
		},
		{
			title: 'Инструменты аналитики и управления данными',
			desc: 'Разработка инструментов для сбора, анализа и визуализации данных, позволяющих принимать обоснованные решения.',
			icon: 'stat.svg',
			color: '#FA9600'
		},
		{
			title: 'Пользовательские интерфейсы для IoT устройств',
			desc: 'Создание пользовательских интерфейсов для устройств Интернета вещей с учетом удобства использования.',
			icon: 'smart.svg',
			color: '#FA0000'
		},
		{
			title: 'Адаптивные веб-приложения для мобильных устройств',
			desc: 'Разработка приложений, которые идеально работают на различных устройствах, обеспечивая легкость использования.',
			icon: 'adaptive.svg',
			color: '#74DC8B'
		},
	]
	const benefits = [
		{
			title: 'Современные технологии',
			desc: 'Мы используем передовые инструменты, обеспечивая высокую производительность и отзывчивость веб-приложений.'
		},
		{
			title: 'Аналитика и метрики для эффективности',
			desc: 'Интегрируем различные инструменты аналитики, предоставляя вам ценные данные для принятия решений.'
		},
		{
			title: 'Server Side Rendering, SSR',
			desc: 'Обеспечиваем быструю загрузку и оптимизацию для поисковых систем, что способствует высокому SEO-рейтингу.'
		},
		{
			title: 'Подготовка под SEO',
			desc: 'Мы уделяем внимание деталям, оптимизируя ваше веб-приложение для высокого ранжирования в поисковых системах.'
		},
		{
			title: 'Интеграции с различными сервисами',
			desc: 'Мы создаем мощные приложения, способные взаимодействовать с разнообразными сторонними сервисами для обогащения функциональности.'
		},
		{
			title: 'Безопасность и производительность',
			desc: 'Обеспечиваем защиту ваших данных и стабильную работу приложения, соответствующие высоким стандартам безопасности и производительности.'
		},
	]
	const steps = [
		{
			title: 'Обсуждение и ТЗ',
			icon: 'task.svg',
			list: [
				'Встреча с заказчиком для понимания его потребностей и целей;',
				'Составление технического задания (ТЗ), определяющего функциональные и технические требования.'
			]
		},
		{
			title: 'Планирование',
			icon: 'clock.svg',
			list: [
				'Разбиение проекта на пользовательские истории или задачи;',
				'Оценка сложности каждой задачи с учётом затрат времени;',
				'Выбор приоритетных задач для первого спринта (итерации).'
			]
		},
		{
			title: 'Итерации разработки',
			icon: 'code.svg',
			list: [
				'Реализация задач из спринта, начиная с наивысшего приоритета;',
				'Ежедневные стендапы для обсуждения прогресса и решения возникающих вопросов;',
				'Демонстрация результатов заказчику и получение обратной связи.'
			]
		},
		{
			title: 'Тестирование, оптимизация и интеграция',
			icon: 'test.svg',
			list: [
				'Постоянное тестирование функционала для выявления ошибок и несоответствий требованиям;',
				'Оптимизация производительности и устранение выявленных недостатков;',
				'Интеграция компонентов и функционала приложения.'
			]
		},
		{
			title: 'Демонстрация и принятие',
			icon: 'screen.svg',
			list: [
				'Презентация полного функционала заказчику для окончательного ревью;',
				'Внесение последних корректировок и подготовка к запуску.'
			]
		},
		{
			title: 'Релиз и запуск',
			icon: 'prod.svg',
			list: [
				'Запуск веб-приложения в продакшн;',
				'Наблюдение за процессом стабилизации и реакция на возможные проблемы.'
			]
		},
		{
			title: 'Поддержка и обновления',
			icon: 'support.svg',
			list: [
				'Постоянная поддержка, реакция на обратную связь пользователей;',
				'Выпуск регулярных обновлений и добавление новых функций.',
			]
		},
	]
</script>

<style scoped lang="scss">
	.root-web{
		padding-top: 100vh;
	}
</style>
