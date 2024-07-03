<template lang="pug">
.root-mobile
	PraiMobileScreen
	PraiUiListProducts(:products="products" class="green" subtitle="Виды приложений")
	PraiUiBenefits(:benefits="benefits" class="green" subtitle="Возможности")
	PraiUiIntegrations(class="green")
	PraiUiStep(class="green" :steps="steps")
	PraiUiStack(class="green")
	PraiUiCases(class="green")
	PraiFeedbackGoose(class="green")
</template>

<script setup>
	const PraiMobileScreen = defineAsyncComponent(() => import('/components/mobile/PraiMobileScreen.vue'))
	const PraiUiListProducts = defineAsyncComponent(() => import('/components/ui/PraiUiListProducts.vue'))
	const PraiUiBenefits = defineAsyncComponent(() => import('/components/ui/PraiUiBenefits.vue'))
	const PraiUiIntegrations = defineAsyncComponent(() => import('/components/ui/PraiUiIntegrations.vue'))
	const PraiUiStep = defineAsyncComponent(() => import('/components/ui/PraiUiStep.vue'))
	const PraiUiStack = defineAsyncComponent(() => import('/components/ui/PraiUiStack.vue'))
	const PraiUiCases = defineAsyncComponent(() => import('/components/ui/PraiUiCases.vue'))
	const PraiFeedbackGoose = defineAsyncComponent(() => import('/components/feedback/PraiFeedbackGoose.vue'))

	import {useHeaderStore} from "/store/header";
	import {onMounted} from "vue";
	const store = useHeaderStore()

	const defaultTitle = 'Разработка мобильного приложения - заказать для iOS, android'
	const defaultDescription = 'Создаём кроссплатформенные мобильные приложения: ✔️ Современный дизайн ✔️ Интеграция 1С'
	useHead({
		title: defaultTitle,
		meta: [
			{ name: 'description', content: defaultDescription },
			{ property: 'og:title', content: defaultTitle },
			{ property: 'og:description', content: defaultDescription },
			{ property: 'og:type', content: 'article' },
			{ property: 'article:author', content: 'Компания разработчик PRAI' },
			{ property: 'article:section', content: 'Мобильные приложения' },
			{ property: 'article:tag', content: 'Приложения для iOS' },
			{ property: 'article:tag', content: 'Приложения для Android' },
			{ property: 'article:published_time', content: '2024-07-01T19:24:06+00:00' },
			{ property: 'article:modified_time', content: '2024-07-01T19:24:06+00:00' },
		]
	})

	onMounted(() => {
		store.setHeader({
			logo: '#00C838',
			opacity: 0.78,
			border: 'rgba(0, 250, 55, 0.8)',
			bgHeader: '255, 255, 255,',
			colorHeader: '#010004',
		})
	})

	const products = [
		{
			title: 'Пользовательские приложения',
			desc: 'Разрабатываем интуитивные и привлекательные пользовательские интерфейсы, обеспечивая удовлетворение ваших клиентов.',
			icon: 'design.svg',
			color: '#FA0096'
		},
		{
			title: 'Корпоративные приложения',
			desc: 'Повышаем эффективность вашего бизнеса с помощью индивидуально настроенных корпоративных решений.',
			icon: 'crm.svg',
			color: '#5F00FA'
		},
		{
			title: 'Социальные платформы',
			desc: 'Создаем мощные социальные приложения, способствующие взаимодействию и сотрудничеству.',
			icon: 'chats.svg',
			color: '#0073FA'
		},
		{
			title: 'Мобильные электронные коммерции',
			desc: 'Реализуем надёжные мобильные магазины, обеспечивая удобство покупателей и повышение продаж.',
			icon: 'shop.svg',
			color: '#00BEFA'
		},
		{
			title: 'Платформы для образования',
			desc: 'Помогаем создавать образовательные приложения с инновационными методами обучения.',
			icon: 'education.svg',
			color: '#1FDE49'
		},
		{
			title: 'Здравоохранение и фитнес',
			desc: 'Разрабатываем мобильные решения для здравоохранения, медицинского мониторинга и фитнеса.',
			icon: 'health.svg',
			color: '#FAF000'
		},
		{
			title: 'Развлекательные приложения',
			desc: 'Придаём жизнь идее развлекательного приложения, увлекая аудиторию.',
			icon: 'games.svg',
			color: '#FA9600'
		},
		{
			title: 'Сервисы бронирования и заказа услуг',
			desc: 'Разработка систем бронирования, заказа билетов, услуг и столов в ресторанах для удовлетворения потребностей клиентов.',
			icon: 'ticket.svg',
			color: '#FA0000'
		},
		{
			title: 'Интеграция IoT',
			desc: 'Реализуем приложения, способные взаимодействовать с устройствами Интернета вещей для автоматизации и контроля.',
			icon: 'smart.svg',
			color: '#74DC8B'
		},
	]
	const benefits = [
		{
			title: 'Стек технологий',
			desc: 'Используем передовой стек, включая CapacitorJS, Ionic, Vue.js и Node.js, обеспечивая быструю разработку и высокую производительность.'
		},
		{
			title: 'Аналитика и метрики для эффективности',
			desc: 'Интегрируем различные инструменты аналитики, предоставляя вам ценные данные для принятия решений.'
		},
		{
			title: 'Полная интеграция',
			desc: 'Обеспечиваем интеграцию с различными сторонними сервисами и платформами, расширяя функциональность приложения.'
		},
		{
			title: 'Гибкость и масштабируемость',
			desc: 'Наш подход позволяет адаптироваться к изменяющимся потребностям проекта и легко масштабировать приложение по мере роста бизнеса.'
		},
		{
			title: 'Постоянная поддержка и обновления',
			desc: 'После запуска приложения мы продолжаем обеспечивать его поддержку, выпуская обновления и добавляя новые функции.'
		},
		{
			title: 'Высокая безопасность',
			desc: 'Реализуем надежные меры безопасности, включая защиту данных пользователей и соблюдение стандартов безопасности, обеспечивая доверие к приложению.'
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
