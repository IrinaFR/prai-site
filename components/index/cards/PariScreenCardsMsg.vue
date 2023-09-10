<template lang="pug">
.mainCardMsg
	.cardMsg
		PraiUiIcon.iconMsg(icon="icons/chat.svg" color="#F89234" shadow size="68" radius="15" )
		.size-14.bold Компьютерное зрение и видеоаналитика
</template>

<script setup>
	import PraiUiIcon from "/components/ui/PraiUiIcon.vue";
</script>

<style scoped lang="scss">
	.mainCardMsg{
		position: absolute;
		top: 30px;
		left: 20px;
		width: 293px;
		z-index: 1;
		@media(max-width: 768px){
			position: relative;
			left: calc(100% - 303px);
			top: auto;
		}
		.cardMsg{
			opacity: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: 20px;
			border-radius: 15px;
			padding: 10px;
			background: #ffffff;
			box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.12);
			animation: cardIcon .7s forwards;
			animation-delay: .5s;
			.title-14{
				padding: 10px 10px 10px 0;
			}
		}
		.iconMsg{
			opacity: 0;
			animation: cardIcon .7s forwards;
			animation-delay: .7s;
		}
	}
</style>
