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
				PraiUiCardCase
				.card-feedback(v-if="$store.getters.getWidth > 600")
					.title Обсудить проект или пригласить в тендер
					.description Оставьте номер телефона и мы вам перезвоним
					form
						input(placeholder="+7 999 000-00-00")
						PraiUiButtons(text="Связаться с нами" :class="$props.class + ' btn-full'")
						label.loadFile(for="feedbackPinFile")
							input.d-none#feedbackPinFile(type="file")
							img(src="/img/form/document.svg")
							| Прикрепить файл
						.tip(:class="$props.class") Отправляя форму, вы соглашаетесь с
							a(href="/") политикой конфинденциальности
			.col-cases
				PraiUiCardCase
				PraiUiCardCase
				.card-feedback.mob
					.title Обсудить проект или пригласить в тендер
					.description Оставьте номер телефона и мы вам перезвоним
					form
						input(placeholder="+7 999 000-00-00")
						PraiUiButtons(text="Связаться с нами" :class="$props.class + ' btn-full'")
						label.loadFile(for="feedbackPinFile")
							input.d-none#feedbackPinFile(type="file")
							img(src="/img/form/document.svg")
							| Прикрепить файл
						.tip(:class="$props.class") Отправляя форму, вы соглашаетесь с
							a(href="/") политикой конфинденциальности
		PraiUiButtons.mx-auto.mt-40(text="Смотреть все кейсы" :class="$props.class")

</template>

<script>
	import PraiUiCardCase from '/components/ui/PraiUiCardCase.vue'
	import PraiUiButtons from '/components/ui/PraiUiButtons.vue'
	export default {
		components: { PraiUiCardCase, PraiUiButtons },
		props: {
			class: {
				type: String,
				default: 'blue'
			}
		}
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
		form {
			input{
				width: calc(100% - 32px);
			}
			.btn-full{
				width: 100%;
				margin: 16px 0;
			}
		}
	}
</style>
