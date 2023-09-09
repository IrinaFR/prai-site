<template lang="pug">
PraiHeader(v-if="widthWindow>768")
PraiMobileHeader(v-else)
nuxt-page
</template>
<script>
	import PraiHeader from "./components/header/PraiHeader.vue";
	import PraiMobileHeader from "./components/header/mobile/PraiMobileHeader.vue";
	export default {
		components: { PraiHeader, PraiMobileHeader },
		data(){
			return{
				widthWindow: 0
			}
		},
		mounted() {
			this.$_prai_app_updateWidth();
			window.addEventListener('resize', this.$_prai_app_updateWidth);
		},
		methods: {
			$_prai_app_getWidth(){
				return this.widthWindow
			},
			$_prai_app_updateWidth() {
				this.widthWindow = +window.innerWidth
			}
		}
	}

</script>
