<template lang="pug">
.mainCardLoad
	.position-relative
		.cardLoad
			.size-14.bold Эффективная обработка информации
			.size-12.light-grey.my-1 Preparing - {{progress}}%
			.animate-svg.positon-relative
				.greyLine
				.progressLine(:style="`width:${progress}%`")
		PraiUiIcon.iconLoad(icon="icons/video.svg" color="#00E6A6" shadow size="68" radius="15" )
</template>

<script>
	import PraiUiIcon from "/components/ui/PraiUiIcon.vue";
	export default {
		components: { PraiUiIcon },
		data(){
			return{
				progress: 0
			}
		},
		created() {
			setTimeout(() => {
				this.counter(70, 'progress')
			}, 500)
		},
		methods: {
			counter(count, data){
				const timer = setInterval(() => {
					const step = count / 10
					this[data] += step
					if(this[data]>=count) {
						this[data] = count
						clearInterval(timer)
					}
				}, 100)
			}
		}
	}
</script>

<style scoped lang="scss">
	.mainCardLoad{
		position: absolute;
		top: 55px;
		right: 80px;
		width: 293px;
		@media(max-width: 768px){
			position: relative;
			left: 10px;
			right: auto;
			top: 60px;
			height: 176px;
		}
		.cardLoad{
			position: absolute;
			width: 253px;
			height: 76px;
			border-radius: 15px;
			padding: 20px;
			background: #ffffff;
			box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.12);
			animation: cardIcon .7s forwards;
			animation-delay: .2s;
			.greyLine{
				background: #F4F5F7;
				width: 100%;
				height: 7px;
				border-radius: 5px;
			}
			.progressLine{
				background: $blue;
				height: 7px;
				border-radius: 5px;
				position: absolute;
				top: 0;
				transition: width .3s ease-in-out;
			}
		}
		.iconLoad{
			opacity: 0;
			position: absolute;
			left: -130px;
			top: -30px;
			animation: cardIcon .7s forwards;
			animation-delay: .7s;
			@media(max-width: 768px){
				left: auto;
				right: 10px;
				top: -40px;
			}
		}
	}
</style>
