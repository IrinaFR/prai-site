<template lang="pug">
nuxt-loading-indicator
nuxt-layout
	PraiHeader(v-if="storeUtils.getWidth>768")
	PraiMobileHeader(v-else)
	nuxt-page
	PraiFooter(v-if="$route.name!=='contacts'" )
	PraiUiCookies
	PraiModalFeedback
PraiUiNotifications
</template>
<script setup>
	const PraiHeader = defineAsyncComponent(() => import('/components/header/PraiHeader.vue'))
	const PraiMobileHeader = defineAsyncComponent(() => import('/components/header/mobile/PraiMobileHeader.vue'))
	const PraiFooter = defineAsyncComponent(() => import('/components/footer/PraiFooter.vue'))
	const PraiUiButtons = defineAsyncComponent(() => import('/components/ui/PraiUiButtons.vue'))
	const PraiModalFeedback = defineAsyncComponent(() => import('/components/modal/PraiModalFeedback.vue'))
	const PraiFormFeedback = defineAsyncComponent(() => import('/components/feedback/PraiFormFeedback.vue'))
	const PraiUiCookies = defineAsyncComponent(() => import('/components/ui/PraiUiCookies.vue'))
	const PraiUiNotifications = defineAsyncComponent(() => import('/components/ui/PraiUiNotifications.vue'))


	import {useUtilsStore} from "/store/utils";
	const storeUtils = useUtilsStore()
	import {useModalStore} from "/store/modal";
	const storeModal = useModalStore()
	import {useSiteStore} from "/store/site";
	const storeSite = useSiteStore()

	const { $makeRequest } = useNuxtApp()

	onMounted(async () => {
		await $_prai_app_updateWidth()
		window.addEventListener('resize', $_prai_app_updateWidth);
	})

	async function $_prai_app_loadSettings(){
		const res =  await $makeRequest('GET', 'settings')
		if(res&&!res.err){
			await storeSite.setNews(res.news)
			await storeSite.setCases(res.cases)
			await storeSite.setCounts(res.count_case, res.count_hack)
			return {
				news: res.news,
				cases: res.cases,
				count_case: res.count_case,
				count_hack: res.count_hack,
			}
		}
		return null
	}
	function $_prai_app_updateWidth() {
		storeUtils.setWidthScreen(+window.innerWidth)
	}

	console.log('%c Хочешь к нам в команду? \n info@prai.su', 'font-size:20px; font-weight:700; color:#0072FA;')


	await useAsyncData('settings', async () => {
		return await $_prai_app_loadSettings()
	})



	const route = useRoute()
	const baseUrl = useRuntimeConfig().public.baseUrl
	const defaultTitle = 'Разработка программных решений и информационных систем | ПРАЙ'
	const defaultDescription = 'Заказать разработку, создание, NLP, нейросетей, сайто, мобильных приложений | Цифровые решения для бизнеса и государства по всей России | Дизайн сайтов, мобильных приложений | Качественный подход и техническое обслуживание'
	// мета
	useHead({
		titleTemplate: (existTitle) => {
			return existTitle
				? `${existTitle} | ПРАЙ`
				: defaultTitle
		},
		link: [
			{
				rel: 'canonical',
				href: computed(() => baseUrl + route.fullPath.slice(0, -1)),
			},
		],
		meta: [
			{
				name: 'description',
				content: defaultDescription
			},
			{
				property: 'og:title',
				content: defaultTitle
			},
			{
				property: 'og:description',
				content: defaultDescription
			},
			{
				property: 'og:url',
				content: computed(() => baseUrl + route.fullPath.slice(0, -1))
			},
			{
				property: 'og:image',
				content: baseUrl + '/img/og/ogImage.png'
			},
			{
				property: 'og:locale',
				content: 'ru_RU'
			},
			{
				property: 'og:site_name',
				content: 'PRAI - компания разработчик нейросетей, веб и мобильных приложений'
			}
		]
	})

</script>
