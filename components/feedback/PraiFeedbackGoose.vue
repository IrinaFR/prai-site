<template lang="pug">
.container
	.feedback
		.feedback-goose
			img(src="/img/feedback/goose.png" alt="Гусь")
		.feedback-form
			form
				.title-block.white
					.subtitle-card.uppercase(:class="props.class") Обратная связь
					h2.title.mb-0 Заказать звонок
				.description Оставьте номер телефона и мы вам перезвоним
				PraiFormFeedback(id="gooseFeedback" full-btn text="Связаться с нами" :title="`Блок с гусём на странице ${$route.fullPath}`" @send="$_feedback_goose_showSuccesModal" :class="$props.class")
			PraiFeedbackSocial(vertical)
.feedback-offset
</template>

<script setup>
	import PraiFormFeedback from "/components/feedback/PraiFormFeedback.vue";
	import PraiFeedbackSocial from "/components/feedback/PraiFeedbackSocial.vue";
	import {useModalStore} from "/store/modal";
	import {defineProps} from "vue";

	const props = defineProps({
		class: {
			type: String,
			default: 'blue'
		}
	})
	const storeModal = useModalStore()

	async function $_feedback_goose_showSuccesModal(){
		console.log('TODO success')
	}
</script>

<style lang="scss">
	.feedback{
		background: #0E0C15;
		display: flex;
		column-gap: 12px;
		justify-content: space-between;
		border-radius: $radius-small;
		margin-top: 140px;
		&-goose{
			flex-grow: 1;
			position: relative;
			min-height: 100%;
			img{
				max-width: 349px;
				position: absolute;
				bottom: 0;
				border-bottom-left-radius: $radius-small;
			}
		}
		&-form{
			max-width: 477px;
			padding: 30px;
			display: flex;
			justify-content: space-between;
			column-gap: 100px;
			.description{
				margin: 8px 0 16px;
				color: $dark-secondary-text;
				font-size: 14px;
			}
			input.dark{
				width: calc(100% - 32px);
			}
			.btn-full{
				width: 100%;
				margin-top: 16px;
			}
		}
		&-offset{
			width: 100%;
			height: 50px;
			background: $white;
		}
		@media(max-width: 862px){
			flex-direction: column-reverse;
			margin-top: 50px;
			&-goose{
				img{
					position: relative;
					margin-top: -105px;
					margin-bottom: -5px;
				}
			}
			&-form{
				max-width: 100%;
				flex-direction: column;
				row-gap: 24px;
				&-social{
					flex-direction: row;
					column-gap: 16px;
				}
			}
		}
		@media(max-width: 375px){
			&-goose img{
				max-width: 100%;
			}
		}
	}
</style>
