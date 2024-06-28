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
	import PraiIndexScreen from "/components/index/PraiIndexScreen.vue";
	import PraiUiContent from "/components/ui/PraiUiContent.vue";
	import PraiIndexMainServices from "/components/index/PraiIndexMainServices.vue";
	import PraiUiServices from "/components/ui/PraiUiServices.vue";
	import PraiUiButtons from "/components/ui/PraiUiButtons.vue";
	import PraiUiIntegrations from "/components/ui/PraiUiIntegrations.vue";
	import PraiUiCases from "/components/ui/PraiUiCases.vue";
	import PraiNewsList from "/components/news/PraiNewsList.vue";
	import PraiIndexAbout from "/components/index/PraiIndexAbout.vue";
	import PraiIndexHacks from "/components/index/PraiIndexHacks.vue";
	import PraiUiFaq from "/components/ui/PraiUiFaq.vue";
	import PraiFeedbackGoose from "/components/feedback/PraiFeedbackGoose.vue";

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
