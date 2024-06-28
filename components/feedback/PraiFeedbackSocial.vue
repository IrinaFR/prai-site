<template lang="pug">
.feedback-form-social(:class="{vertical}")
	a.icon.mail(href="mailto:info@prai.su")
		img(src="/img/feedback/mail.svg" alt="icon")
	a.icon.call(href="tel:+79952260738")
		img(src="/img/feedback/call.svg" alt="icon")
	a.icon.telegram(href="https://t.me/Klimova_Mariya" target="_blank")
		img(src="/img/feedback/telegram.svg" alt="icon")
</template>

<script>
	export default {
		props: {
			vertical: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.feedback-form-social{
		display: flex;
		gap: 16px;
		&.vertical{
			flex-direction: column;
		}
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
				filter: brightness(20);
			}
			&.call:hover{
				background: linear-gradient(180deg, #7B214C 0%, rgba(255, 0, 229, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
			}
			&.mail:hover{
				background: linear-gradient(180deg, #7B6D21 0%, rgba(255, 199, 0, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
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
				&.call{
					background: linear-gradient(180deg, #7B214C 0%, rgba(255, 0, 229, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
				}
				&.mail{
					background: linear-gradient(180deg, #7B6D21 0%, rgba(255, 199, 0, 0.79) 40.63%, rgba(33, 31, 39, 0.27) 100%);
				}
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
</style>