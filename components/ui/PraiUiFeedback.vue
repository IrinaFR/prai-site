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
				input(placeholder="+7 999 000-00-00")
				PraiUiButtons.btn-full(text="Связаться с нами" :class="props.class")
				.tip(:class="props.class") Отправляя форму, вы соглашаетесь с
					a(href="/") политикой конфинденциальности
			.feedback-form-social
				a.icon.vk(href="/")
					img(src="/img/feedback/vk.svg" alt="icon")
				a.icon.telegram(href="/")
					img(src="/img/feedback/telegram.svg" alt="icon")
				a.icon.whatsapp(href="/")
					img(src="/img/feedback/whatsapp.svg" alt="icon")
</template>

<script setup>
	import PraiUiButtons from '/components/ui/PraiUiButtons.vue'
	import {defineProps} from "vue";

	const props = defineProps({
		class: {
			type: String,
			default: 'blue'
		}
	})
</script>

<style lang="scss">
	.feedback{
		background: #0E0C15;
		display: flex;
		column-gap: 12px;
		justify-content: space-between;
		border-radius: $radius-small;
		margin: 140px 0 50px;
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
			input{
				width: calc(100% - 32px);
			}
			.btn-full{
				width: 100%;
				margin-top: 16px;
			}
			&-social{
				display: flex;
				flex-direction: column;
				row-gap: 16px;
				.icon{
					border-radius: 13px;
					width: 48px;
					height: 48px;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
					background: $bg-block-black;
					padding: 1px;
					transition: background $anim-small;
					&::after{
						content: '';
						border-radius: 13px;
						width: 48px;
						height: 48px;
						background: $bg-block-black;
						display: flex;
						align-items: center;
						justify-content: center;
						position: absolute;
					}
					img{
						position: relative;
						z-index: 1;
						max-width: 24px;
						max-height: 24px;
					}
					&.vk:hover{
						background: linear-gradient(180deg, #212F7B 0%, rgba(0, 117, 255, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
					}
					&.telegram:hover{
						background: linear-gradient(180deg, #21457B 0%, rgba(0, 209, 255, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
					}
					&.whatsapp:hover{
						background: linear-gradient(180deg, #237B21 0%, rgba(0, 255, 10, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
					}
					@media(max-width: 862px){
						&.vk{
							background: linear-gradient(180deg, #212F7B 0%, rgba(0, 117, 255, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
						}
						&.telegram{
							background: linear-gradient(180deg, #21457B 0%, rgba(0, 209, 255, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
						}
						&.whatsapp{
							background: linear-gradient(180deg, #237B21 0%, rgba(0, 255, 10, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
						}
					}
				}
			}
		}
		@media(max-width: 862px){
			flex-direction: column-reverse;
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
