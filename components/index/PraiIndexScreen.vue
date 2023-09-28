<template lang="pug">
.main-screen
	canvas#canvasGradient
	canvas#canvasGrid
	.container
		.main-screen-content
			h1.title Инновационные нейросети,
				br
				| веб и мобильные приложения
			.subtitle Более 12 лет создаем будущее технологий вместе!
			PraiUiButtons.mx-auto(text="Рассчитать стоимость")
		.main-screen-icons
			PariScreenCardsGraphic.cardAnimate
			PariScreenCardsMsg.cardAnimate
			PariScreenCardsLoad.cardAnimate
			PariScreenCardsStatistic.cardAnimate
</template>

<script>
	import PariScreenCardsGraphic from "/components/index/cards/PariScreenCardsGraphic.vue";
	import PariScreenCardsLoad from "/components/index/cards/PariScreenCardsLoad.vue";
	import PariScreenCardsMsg from "/components/index/cards/PariScreenCardsMsg.vue";
	import PariScreenCardsStatistic from "/components/index/cards/PariScreenCardsStatistic.vue";
	import PraiUiButtons from "/components/ui//PraiUiButtons.vue";
	export default {
		mounted() {
			if(process.client) this.$_index_screen_createCanvas()
			this.$_index_screen_flyCard()
		},
		methods: {
			$_index_screen_flyCard(){
				if(window.innerWidth > 768){
					const cards = document.querySelectorAll('.cardAnimate')
					const sideX = ['-', '','-','']
					const sideY = ['-', '', '', '-']
					for(let i = 0; i < cards.length; i++){
						window.addEventListener('mousemove', (e) => {
							let x = e.clientX / window.innerWidth
							let y = e.clientY / window.innerHeight

							cards[i].style.transform = `translate(${sideX[i]}${x*20}px, ${sideY[i]}${y*20}px)`
						})
					}
				}
			},
			$_index_screen_createCanvas(){
				// const canvas_gradient = document.getElementById('canvasGradient')
				// const ctx_gradient = canvas_gradient.getContext('2d')
				// canvas_gradient.width = window.innerWidth
				// canvas_gradient.height = window.innerHeight
				//
				// // circle 1
				// const gradient_1 = ctx_gradient.createLinearGradient(canvas_gradient.width / 2.6 + 210, canvas_gradient.height * 0.45 - 210, canvas_gradient.width / 2.6 - 210, canvas_gradient.height * 0.45 + 210)
				// gradient_1.addColorStop(0, '#A5A7F9')
				// gradient_1.addColorStop(1, '#E18CFF')
				// ctx_gradient.fillStyle = gradient_1
				// ctx_gradient.arc(canvas_gradient.width / 2.6, canvas_gradient.height * 0.45, 210, 0, Math.PI * 2)
				// ctx_gradient.fill()
				// ctx_gradient.beginPath()
				// // circle 2
				// const gradient_2 = ctx_gradient.createLinearGradient(canvas_gradient.width / 1.8 + 150, canvas_gradient.height * 0.2 - 150, canvas_gradient.width / 1.8 - 150, canvas_gradient.height * 0.2 + 150)
				// gradient_2.addColorStop(0, '#A5A7FA')
				// gradient_2.addColorStop(1, '#E18CFF')
				// ctx_gradient.fillStyle = gradient_2
				// ctx_gradient.arc(canvas_gradient.width / 1.8, canvas_gradient.height * 0.2, 150, 0, Math.PI * 2)
				// ctx_gradient.fill()
				// ctx_gradient.beginPath()
				// // circle 3
				// const gradient_3 = ctx_gradient.createLinearGradient(canvas_gradient.width / 1.8 - 115, canvas_gradient.height * 0.39 + 115, canvas_gradient.width / 1.8 + 150, canvas_gradient.height * 0.39 - 115)
				// gradient_3.addColorStop(0, '#2A50D9')
				// gradient_3.addColorStop(1, '#E18CFF')
				// ctx_gradient.fillStyle = gradient_3
				// ctx_gradient.arc(canvas_gradient.width / 1.8, canvas_gradient.height * 0.39, 115, 0, Math.PI * 2)
				// ctx_gradient.fill()
				// ctx_gradient.beginPath()
				// // circle 4
				// const gradient_4 = ctx_gradient.createLinearGradient(canvas_gradient.width / 1.9 + 115, canvas_gradient.height * 0.57 - 115, canvas_gradient.width / 1.9 - 115, canvas_gradient.height * 0.57 + 115)
				// gradient_4.addColorStop(0, '#A5A7FA')
				// gradient_4.addColorStop(1, '#E18CFF')
				// ctx_gradient.fillStyle = gradient_4
				// ctx_gradient.arc(canvas_gradient.width / 1.9, canvas_gradient.height * 0.57, 115, 0, Math.PI * 2)
				// ctx_gradient.fill()

				//grid
				const canvas_grid = document.getElementById('canvasGrid')
				const ctx_grid = canvas_grid.getContext('2d')
				canvas_grid.width = window.innerWidth
				canvas_grid.height = window.innerHeight

				let radGradient = null
				if(canvas_grid.width > 768) radGradient = ctx_grid.createRadialGradient(canvas_grid.width / 2,canvas_grid.height / 2,0,canvas_grid.width / 2, canvas_grid.height / 2, canvas_grid.width / 3)
				else radGradient = ctx_grid.createRadialGradient(canvas_grid.width / 2,canvas_grid.height / 2,0,canvas_grid.width / 2, canvas_grid.height / 2, canvas_grid.width / 1.3 )
				radGradient.addColorStop(0, '#BCC0FF')
				radGradient.addColorStop(0.5, '#BCC0FF')
				radGradient.addColorStop(1, '#FFFFFF')
				ctx_grid.fillStyle = 'transparent'
				ctx_grid.strokeStyle = radGradient

				ctx_grid.fillRect(0, 0, canvas_grid.width, canvas_grid.height)
				ctx_grid.fill()

				const sizeSquare = 50
				const countH = Math.ceil(canvas_grid.height / sizeSquare)
				const countW = Math.ceil(canvas_grid.width / sizeSquare)
				for(let i = 0; i < countW; i++){
					for(let k = 0; k < countH; k++){
						ctx_grid.strokeRect(sizeSquare * i, sizeSquare * k, sizeSquare, sizeSquare)
					}
				}
			},
		},
		components: {
			PariScreenCardsGraphic, PariScreenCardsLoad,
			PariScreenCardsMsg, PariScreenCardsStatistic,
			PraiUiButtons
		}
	}
</script>

<style lang="scss">
	.main-screen{
		height: calc(100vh - 140px);
		width: 100vw;
		max-width: calc(100vw - 15px);
		@media(max-width: 768px) {
			min-height: 100vh;
			height: fit-content;
		}
		canvas#canvasGradient{
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			opacity: .8;
			filter: blur(100px);
			max-width: calc(100vw - 15px) !important;
			z-index: -2;
		}
		canvas#canvasGrid{
			display: block;
			position: absolute;
			max-width: calc(100vw - 15px) !important;
			top: 0;
			left: 0;
			z-index: -1;
		}
		.container{
			height: calc(100vh - 120px);
			margin-top: 120px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;
			@media(max-width: 768px){
				margin-top: 80px;
				height: auto;
			}
		}
		&-content{
			.title{
				font-size: 56px;
				line-height: 120%;
				font-weight: bold;
				text-align: center;
				@media(max-width: 920px){
					font-size: 50px;
				}
				@media(max-width: 576px){
					font-size: 18px;
				}
			}
			.subtitle{
				font-size: 14px;
				color: $light-secondary-text;
				text-align: center;
				margin: 20px 0 36px;
			}
		}
		&-icons{
			@media(max-width: 768px){
				width: calc(100% - 20px);
				padding-bottom: 30px;
			}
		}
	}
</style>
