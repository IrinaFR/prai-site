<template lang="pug">
.mainCardLoad
	.position-relative
		.cardLoad
			.size-14.bold Лучшее взаимодействие с пользователями
			.animate-svg.positon-relative
				svg(width="232" height="83" viewBox="0 0 232 83" fill="none" xmlns="http://www.w3.org/2000/svg")
					path.graphicsLine(d="M2 81L27.3679 54.8267C30.8728 51.2106 36.5199 50.7649 40.5486 53.7865L61.9816 69.8612C65.1526 72.2394 69.5868 71.9372 72.4057 69.1507L104.738 37.1898C108.399 33.5714 114.079 32.975 118.411 35.7541L130.773 43.6843C134.706 46.2079 139.864 45.6701 143.192 42.3891L166.398 19.5144C169.986 15.9778 175.518 15.3305 179.825 17.9432L195.802 27.6341C199.962 30.1572 205.334 29.3205 208.529 25.6518L230 1" stroke="#5F5FFC" stroke-width="3")
					path.graphicsPoint(d="M84 62.5C86.4853 62.5 88.5 60.4853 88.5 58C88.5 55.5147 86.4853 53.5 84 53.5C81.5147 53.5 79.5 55.5147 79.5 58C79.5 60.4853 81.5147 62.5 84 62.5Z" fill="#5F5FFC" stroke="white")
					path.graphicsPoint(d="M162 27.5C164.485 27.5 166.5 25.4853 166.5 23C166.5 20.5147 164.485 18.5 162 18.5C159.515 18.5 157.5 20.5147 157.5 23C157.5 25.4853 159.515 27.5 162 27.5Z" fill="#92ECC8" stroke="white")
				.graphicLegend
					div
						span.graphicTitle
						span.graphicChart
					div
						span.graphicTitle
						span.graphicChart
				.list-periods.justify-content-between.size-12.colorGrey.w-100
					span 1
					span 2
					span 3
					span 4
					span 5
					span 6
					span 7
					span 8
		PraiUiIcon.iconGraphics(icon="icons/clock.svg" color="#9814FF" shadow size="68" radius="15")
</template>

<script setup>
	const PraiUiIcon = defineAsyncComponent(() => import('/components/ui/PraiUiIcon.vue'))
</script>

<style scoped lang="scss">
	.mainCardLoad{
		position: absolute;
		bottom: 50px;
		right: 40px;
		width: 266px;
		height: 202px;
		@media(max-width: 920px){
			right: 10px;
			bottom: 20px;
		}
		@media(max-width: 768px){
			position: relative;
			right: auto;
			left: 10px;
			bottom: auto;
			top: 60px;
			height: 282px;
		}
		.cardLoad{
			opacity: 0;
			position: absolute;
			width: 226px;
			border-radius: 15px;
			padding: 20px;
			background: #ffffff;
			box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.12);
			animation: cardIcon .7s forwards;
			animation-delay: .3s;
			@media(max-width: 768px){
				position: relative;
			}
		}
	}
	.animate-svg{
		.graphicsLine{
			box-shadow: 0 6px 18px #0072FA;
			stroke-dasharray: 1, 300;
			animation: graphicsLine 1.5s ease-in-out forwards;
			animation-delay: .3s;
		}
		.graphicsPoint{
			opacity: 0;
			animation: graphicsPoint .5s ease-in-out forwards;
			animation-delay: 1.8s;
		}
		.list-periods{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 12px;
			color: $light-secondary-text;
		}
	}
	@keyframes graphicsLine{
		0% { stroke-dasharray: 0, 300; }
		100% { stroke-dasharray: 300, 300; }
	}
	@keyframes graphicsPoint{
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	.graphicLegend{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 5px 0;
		column-gap: 20px;
		div{
			display: flex;
			align-items: center;
			column-gap: 5px;
			.graphicTitle{
				background: #92ECC8;
				height: 7px;
				width: 7px;
				border-radius: 5px;
			}
			&:last-child .graphicTitle{
				background: $blue;
			}
			.graphicChart{
				width: 50px;
				height: 7px;
				border-radius: 5px;
				background: #F4F5F7;
			}
			&:last-child .graphicChart{
				background: #D6DCE3;
			}
		}
	}
	.iconGraphics{
		opacity: 0;
		position: absolute;
		right: 370px;
		bottom: 70px;
		animation: cardIcon .7s forwards;
		animation-delay: .7s;
		@media(max-width: 920px){
			right: 260px;
		}
		@media(max-width: 768px){
			right: 10px;
			top: -50px;
			bottom: auto;
		}
	}

</style>
