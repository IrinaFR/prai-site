<template lang="pug">
.root-index
	PraiIndexScreen
	PraiUiContent
		.bg-black
			PraiIndexMainServices
			PraiUiServices
			PraiUiButtons.mx-auto(text="Рассчитать стоимость" @click="storeModal.openModalFeedback('Блок услуг на главной')")
		PraiUiIntegrations(class="blue")
		PraiUiCases
		PraiNewsList
		PraiIndexAbout
		.container
			.title-block.mt-50.center
				.description Наша команда активно участвует в хакатонах по искусственному интеллекту и не раз завоёвывала призовые места. Наши успехи в хакатонах подтверждают нашу способность к инновациям, быстрому прототипированию и решению сложных задач. Мы настроены на достижение результатов и готовы разработать продукт, который точно соответствует вашим потребностям и задачам.
		PraiIndexHacks
		PraiUiFaq
		PraiFeedbackGoose
</template>

<script setup>
	const PraiIndexScreen = defineAsyncComponent(() => import('/components/index/PraiIndexScreen.vue'))
	const PraiUiContent = defineAsyncComponent(() => import('/components/ui/PraiUiContent.vue'))
	const PraiIndexMainServices = defineAsyncComponent(() => import('/components/index/PraiIndexMainServices.vue'))
	const PraiUiServices = defineAsyncComponent(() => import('/components/ui/PraiUiServices.vue'))
	const PraiUiButtons = defineAsyncComponent(() => import('/components/ui/PraiUiButtons.vue'))
	const PraiUiIntegrations = defineAsyncComponent(() => import('/components/ui/PraiUiIntegrations.vue'));
	const PraiUiCases = defineAsyncComponent(() => import('/components/ui/PraiUiCases.vue'))
	const PraiNewsList = defineAsyncComponent(() => import('/components/news/PraiNewsList.vue'))
	const PraiIndexAbout = defineAsyncComponent(() => import('/components/index/PraiIndexAbout.vue'))
	const PraiIndexHacks = defineAsyncComponent(() => import('/components/index/PraiIndexHacks.vue'))
	const PraiUiFaq = defineAsyncComponent(() => import('/components/ui/PraiUiFaq.vue'))
	const PraiFeedbackGoose = defineAsyncComponent(() => import('/components/feedback/PraiFeedbackGoose.vue'))

	import {useHeaderStore} from "/store/header";
	const store = useHeaderStore()

	import {useModalStore} from "/store/modal";
	import {onMounted} from "vue";
	const storeModal = useModalStore()

	onMounted(() => {
		store.setHeader({
			logo: '#3843FF',
			opacity: 0.70,
			border: 'rgba(0, 114, 250, 0.5)',
			bgHeader: '255, 255, 255,',
			colorHeader: '#010004'
		})
	})
</script>

<style scoped lang="scss">
	.root-index{
		padding-top: 100vh;
	}
</style>
