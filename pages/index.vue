<template lang="pug">
.root-index
	PraiIndexScreen
	PraiUiContent
		.bg-black
			PraiIndexMainServices
			PraiUiServices
			PraiUiButtons.mx-auto(text="Рассчитать стоимость")
		PraiUiIntegrations(class="blue")
		PraiUiCases
		PraiNewsList
		PraiIndexAbout
		PraiIndexHacks
		PraiUiFaq
		PraiUiFeedback
</template>

<script>
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
	import PraiUiFeedback from "/components/ui/PraiUiFeedback.vue";

	export default {
		created() {
			this.$store.commit('setHeader', {
				logo: '#3843FF',
				opacity: 0.70,
				border: 'rgba(0, 114, 250, 0.18)',
				bgHeader: '255, 255, 255,',
				colorHeader: '#010004',
			})
		},
		components: {
			PraiIndexScreen, PraiUiContent, PraiIndexMainServices, PraiUiServices, PraiUiButtons,
			PraiUiIntegrations, PraiUiCases, PraiNewsList, PraiIndexAbout, PraiIndexHacks, PraiUiFaq,
			PraiUiFeedback
		}
	}
</script>
