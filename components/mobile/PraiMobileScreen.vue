<template lang="pug">
.main-screen-mob
	.main-screen-mob-bg
		PraiMobileScreenBg
	.container
		.main-screen-mob-info
			h1.title Мобильная разработка с бесконечными возможностями
			.description Наши эксперты предлагают разработку мобильных приложений для вашего бизнеса. От идеи до запуска – мы создаём сложные и инновационные мобильные решения
			PraiUiButtons(text="Заказать разработку" class="green" @click="storeModal.openModalFeedback('Главный экран - моб. разработка')")
</template>

<script>
	import PraiMobileScreenBg from '/components/mobile/PraiMobileScreenBg.vue'
	import PraiUiButtons from "/components/ui/PraiUiButtons.vue";
	import {useModalStore} from "/store/modal";
	export default {
		components: { PraiMobileScreenBg, PraiUiButtons },
		data(){
			return{
				storeModal: useModalStore()
			}
		}
	}
</script>

<style lang="scss">
	.main-screen-mob{
		width: 100vw;
		max-width: 100%;
		height: 70vh;
		display: flex;
		align-items: center;
		position: relative;

		&-bg{
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
		}
		&-info{
			max-width: 60%;
			.title{
				font-size: 39px;
				font-weight: 600;
				line-height: 120%;
			}
			.description{
				font-size: 14px;
				margin: 24px 0 35px;
			}
		}
		@media(max-width: 768px){
			height: 100vh;
			&-info {
				max-width: none;
				.title{
					font-size: 28px;
				}
			}
		}
	}
</style>
