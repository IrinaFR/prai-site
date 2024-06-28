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
<script>
	import PraiHeader from "./components/header/PraiHeader.vue";
	import PraiMobileHeader from "./components/header/mobile/PraiMobileHeader.vue";
	import PraiFooter from "/components/footer/PraiFooter.vue";
	import {useUtilsStore} from "/store/utils";
	import {useModalStore} from "/store/modal";
	import {useSiteStore} from "/store/site";
	import {useRequestStore} from "/store/request";
	import PraiUiButtons from "/components/ui/PraiUiButtons.vue";
	import PraiModalFeedback from "/components/modal/PraiModalFeedback.vue";
	import PraiFormFeedback from "/components/feedback/PraiFormFeedback.vue";
	import PraiUiCookies from "/components/ui/PraiUiCookies.vue";
	import PraiUiNotifications from "/components/ui/PraiUiNotifications.vue";
	export default {

		data(){
			return{
				storeUtils: useUtilsStore(),
				storeModal: useModalStore(),
				storeSite: useSiteStore(),
				storeRequest: useRequestStore()
			}
		},
		async mounted() {
			await this.$_prai_app_loadSettings()
			await this.$_prai_app_updateWidth()
			window.addEventListener('resize', this.$_prai_app_updateWidth);
		},
		methods: {
			async $_prai_app_loadSettings(){
				const res =  await this.storeRequest.request('GET', 'settings')
				if(res&&!res.err){
					await this.storeSite.setNews(res.news)
					await this.storeSite.setCases(res.cases)
					await this.storeSite.setCounts(res.count_case, res.count_hack)
				}
			},
			$_prai_app_updateWidth() {
				this.storeUtils.setWidthScreen(+window.innerWidth)
			},
		},
		created() {
			console.log('%c Хочешь к нам в команду? \n info@prai.su', 'font-size:20px; font-weight:700; color:#0072FA;')
		},
		components: {
			PraiHeader, PraiMobileHeader, PraiFooter,
			PraiUiButtons, PraiModalFeedback, PraiFormFeedback,
			PraiUiCookies, PraiUiNotifications
		},
	}

</script>
