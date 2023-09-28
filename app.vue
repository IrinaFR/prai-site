<template lang="pug">
PraiHeader(v-if="$store.getters.getWidth>768")
PraiMobileHeader(v-else)
nuxt-page
PraiFooter
</template>
<script>
	import PraiHeader from "./components/header/PraiHeader.vue";
	import PraiMobileHeader from "./components/header/mobile/PraiMobileHeader.vue";
	import PraiFooter from "/components/footer/PraiFooter.vue";
	export default {
		components: { PraiHeader, PraiMobileHeader, PraiFooter },
		async mounted() {
			await this.$_prai_app_updateWidth()
			window.addEventListener('resize', this.$_prai_app_updateWidth);
		},
		methods: {
			$_prai_app_updateWidth() {
				this.$store.commit('setWidthScreen', +window.innerWidth)
			}
		}
	}

</script>
