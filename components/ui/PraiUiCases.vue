<template lang="pug">
.bg-black
	.container
		.row-cases
			.gradient_1
			.gradient_2
			.col-cases
				.title-block.white
					.subtitle-card.uppercase(:class="$props.class") Кейсы
					h2.title Выполненные проекты
				PraiUiCardCase(:data="storeSite.cases[0]" v-if="storeSite.cases.length" )
				.card-feedback(v-if="store.getWidth > 600")
					.title Обсудить проект или пригласить в тендер
					.description Оставьте номер телефона и мы вам перезвоним
					PraiFormFeedback.full(id="casePageFeedback" full-btn text="Связаться с нами" :title="'Блок кейсов на главной странице - ' + $route.fullPath" :class="$props.class")
					//label.loadFile(for="feedbackPinFile")
					//	input.d-none#feedbackPinFile(type="file")
					//	img(src="/img/form/document.svg")
					//	| Прикрепить файл
			.col-cases
				PraiUiCardCase(:data="storeSite.cases[1]" v-if="storeSite.cases.length")
				PraiUiCardCase(:data="storeSite.cases[2]" v-if="storeSite.cases.length")
				.card-feedback.mob
					.title Обсудить проект или пригласить в тендер
					.description Оставьте номер телефона и мы вам перезвоним
					PraiFormFeedback.full(id="casePageFeedbackMob" full-btn :title="'Блок кейсов на странице - ' + $route.fullPath" text="Связаться с нами" :class="$props.class")
						//label.loadFile(for="feedbackPinFile")
						//	input.d-none#feedbackPinFile(type="file")
						//	img(src="/img/form/document.svg")
						//	| Прикрепить файл
		PraiUiButtons.mx-auto.mt-40(text="Смотреть все кейсы" :class="$props.class" @click="$router.push('/cases')")

</template>

<script>
	import {useUtilsStore} from "/store/utils";
	import {useSiteStore} from "/store/site";
	import {useModalStore} from "/store/modal";
	export default {
		components: {
			PraiUiCardCase: defineAsyncComponent(() => import('/components/ui/PraiUiCardCase.vue')),
			PraiUiButtons: defineAsyncComponent(() => import('/components/ui/PraiUiButtons.vue')),
			PraiFormFeedback: defineAsyncComponent(() => import('/components/feedback/PraiFormFeedback.vue'))
		},
		props: {
			class: {
				type: String,
				default: 'blue'
			}
		},
		data(){
			return{
				store: useUtilsStore(),
				storeSite: useSiteStore(),
				storeModal: useModalStore()
			}
		},
	}
</script>

<style scoped lang="scss">
	.row-cases{
		display: flex;
		gap: 16px;
		position: relative;
		@media(max-width: 600px){
			flex-direction: column;
		}
		.col-cases{
			display: flex;
			flex: 0 50%;
			flex-direction: column;
			row-gap: 16px;
		}
		.gradient_1 {
			position: absolute;
			width: 270px;
			background: linear-gradient(180deg, #073C8A 0%, #7644B6 100%);
			filter: blur(44px);
			height: 530px;
			transform: rotate(306deg);
			left: auto;
			right: 20%;
			top: 160px;
			border-top-left-radius: 150px;
			border-bottom-right-radius: 350px;
			z-index: 0;
			@media(max-width: 768px) {
				display: none;
			}
		}
		.gradient_2 {
			position: absolute;
			width: 270px;
			background: linear-gradient(180deg, #073C8A 0%, #7644B6 100%);
			filter: blur(44px);
			height: 530px;
			transform: rotate(256deg);
			left: 25%;
			bottom: -170px;
			border-top-left-radius: 150px;
			border-bottom-right-radius: 350px;
			z-index: 0;
			@media(max-width: 768px) {
				display: none;
			}
		}
	}
	.card-feedback{
		flex-grow: 1;
		padding: 30px;
		background: $bg-block-black;
		border-radius: $radius-small;
		border: solid 1px $dark-border;
		display: flex;
		flex-direction: column;
		row-gap: 12px;
		position: relative;
		z-index: 1;
		&.mob{
			display: none;
			padding: 20px;
			@media(max-width: 601px){
				display: flex;
			}
		}
		.title{
			font-size: 19px;
			font-weight: 600;
			color: $white;
		}
		.description{
			flex-grow: 1;
			font-size: 14px;
			color: $dark-secondary-text;
		}
		.loadFile{
			margin-top: 16px;
		}
	}
</style>
