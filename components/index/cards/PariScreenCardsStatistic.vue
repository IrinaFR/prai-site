<template lang="pug">
.mainStatistic
	.position-relative
		.cardStatic
			.size-14.bold Оптимизация бизнес-процессов
			.animate-svg.my-2
				svg(width="124" height="45" viewBox="0 0 124 45" fill="none" xmlns="http://www.w3.org/2000/svg")
					rect.gline(y="23.478" width="4" height="21.5217" rx="2" fill="#D5DBE2")
					rect.vline(x="10" y="13.6958" width="4" height="31.3043" rx="2" fill="#3843FF")
					rect.gline(x="20" y="26.4131" width="4" height="18.587" rx="2" fill="#D5DBE2")
					rect.vline(x="30" y="12.7173" width="4" height="32.2826" rx="2" fill="#3843FF")
					rect.gline(x="40" width="4" height="45" rx="2" fill="#D5DBE2")
					rect.vline(x="50" y="23.478" width="4" height="21.5217" rx="2" fill="#3843FF")
					rect.gline(x="60" y="16.6304" width="4" height="28.3696" rx="2" fill="#D5DBE2")
					rect.vline(x="70" y="5.86963" width="4" height="39.1304" rx="2" fill="#3843FF")
					rect.gline(x="80" y="18.5869" width="4" height="26.413" rx="2" fill="#D5DBE2")
					rect.vline(x="90" y="30.3262" width="4" height="14.6739" rx="2" fill="#3843FF")
					rect.gline(x="100" y="23.478" width="4" height="21.5217" rx="2" fill="#D5DBE2")
					rect.vline(x="110" y="12.7173" width="4" height="32.2826" rx="2" fill="#3843FF")
					rect.gline(x="120" y="25.4346" width="4" height="19.5652" rx="2" fill="#D5DBE2")
			.numberStatic
				div
					span.size-12.colorGrey +{{Math.floor(chartGrey)}}%
					span.staticChart
				div
					span.size-12.colorGrey +{{Math.floor(chartViolet)}}%
					span.staticChart
		PraiUiIcon.iconStatic(icon="icons/chart.svg" color="#0072FA" shadow size="68" radius="15")
</template>

<script>
	export default {
		components: {
			PraiUiIcon: defineAsyncComponent(() => import('/components/ui/PraiUiIcon.vue'))
		},
		data(){
			return{
				chartGrey: 0,
				chartViolet: 0
			}
		},
		created() {
			setTimeout(() => {
				this.counter(17, 'chartGrey')
				this.counter(34, 'chartViolet')
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

<style lang="scss">
	.mainStatistic{
		position: absolute;
		left: 50px;
		bottom: 110px;
		width: 164px;
		height: 168px;
		@media(max-width: 920px){
			left: 20px;
			bottom: 50px;
		}
		@media(max-width: 768px){
			position: relative;
			bottom: auto;
			top: 16px;
			left: calc(100% - 174px);
		}
	}
	.cardStatic{
		position: absolute;
		width: 125px;
		height: 130px;
		border-radius: 15px;
		padding: 20px;
		background: #ffffff;
		box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.12);
		animation: cardIcon .7s forwards;
	}
	.iconStatic{
		opacity: 0;
		position: absolute;
		left: 270px;
		bottom: 0;
		animation: cardIcon .7s forwards;
		animation-delay: .7s;
		@media(max-width: 768px){
			left: -100px;
			top: 0;
			bottom: auto;
		}
	}
	.animate-svg{
		svg{
			.gline{
				animation: gline 1s forwards;
			}
			.vline{
				opacity: 0;
				animation: vline 1s forwards;
				animation-delay: .7s;
			}
		}
	}
	@keyframes gline{
		0% { transform: scaleY(0); }
		100% { transform: scaleY(1); }
	}
	@keyframes vline{
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	.numberStatic{
		display: flex;
		column-gap: 15px;
		justify-content: space-between;
		div{
			display: flex;
			align-items: center;
			width: 55px;
			&:last-child .staticChart{
				background: $blue;
			}
		}
	}
	.staticChart{
		display: block;
		background: #F4F5F7;
		margin-left: 5px;
		height: 4px;
		width: 0;
		border-radius: 5px;
		animation: staticChart 1s forwards;
		animation-delay: .5s;
	}
	@keyframes staticChart{
		0% { width: 0; }
		100% { width: 21px; }
	}
</style>
