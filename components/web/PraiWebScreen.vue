<template lang="pug">
.main-screen-web
	canvas#canvasWebGrid
	.main-screen-web-bg
		div
			span.dot
		div
			span.dot
		div
			span.dot
		div
			span.dot
		div
			span.dot
		div
			span.dot
		div
			span.dot
		div
			span.dot
		div
			span.dot
		div
			span.dot
		div
			span.dot
	.main-screen-web-info
		h1.title Веб-приложения нового уровня
		.description Передовая разработка веб-приложений с использованием передовых технологий. Мы создаем крупные и сложные веб-проекты, поднимающие ваш бизнес на новый уровень.
		PraiUiButtons(text="Заказать разработку" class="light-pink" @click="storeModal.openModalFeedback('Главный экран - веб разработка')")


</template>

<script>
	import PraiUiButtons from "/components/ui/PraiUiButtons.vue";
	import {useModalStore} from "/store/modal";
	export default {
		data(){
			return{
				storeModal: useModalStore()
			}
		},
		mounted() {
			this.$_web_screen_canvasGrid()
		},
		methods: {
			$_web_screen_canvasGrid(){
				const canvas_grid = document.getElementById('canvasWebGrid')
				const ctx_grid = canvas_grid.getContext('2d')
				canvas_grid.width = window.innerWidth
				canvas_grid.height = window.innerHeight

				let radGradient = null
				if(canvas_grid.width > 768) radGradient = ctx_grid.createRadialGradient(canvas_grid.width / 2,canvas_grid.height / 2,0,canvas_grid.width / 2, canvas_grid.height / 2, canvas_grid.width / 3)
				else radGradient = ctx_grid.createRadialGradient(canvas_grid.width / 2,canvas_grid.height / 2,0,canvas_grid.width / 2, canvas_grid.height / 2, canvas_grid.width / 1.3 )
				radGradient.addColorStop(0, '#3F0031')
				radGradient.addColorStop(0.5, '#3F0031')
				radGradient.addColorStop(1, '#0E0C15')
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
			}
		},
		components: { PraiUiButtons }
	}

</script>

<style scoped lang="scss">
	.main-screen-web{
		width: 100%;
		overflow: hidden;
		height: 60vh;
		background: #0E0C15 url("public/img/dot.png") repeat;
		background-size: 14px;
		position: relative;
		color: $white;
		display: flex;
		align-items: center;
		justify-content: center;
		canvas#canvasWebGrid{
			position: absolute;
			top: 0;
			left: 0;
		}
		&-bg{
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			position: absolute;
			div {
				height: 60px;
				width: 60px;
				border: 1px solid rgba(250, 0 ,150, 0.3);
				border-radius: 100px;
				position: absolute;
				top: 10%;
				left: 10%;
				animation: 4s linear infinite;
				.dot {
					height: 5px;
					width: 5px;
					border-radius: 50px;
					background: rgba(250, 0 ,150, 0.5);
					position: absolute;
					top: 20%;
					right: 20%;
				}
				&:nth-child(1) {
					top: 20%;
					left: 20%;
					animation: animate 2s linear infinite;
				}
				&:nth-child(2) {
					top: 20%;
					left: 20%;
					animation: animate 8s linear infinite;
				}
				&:nth-child(3) {
					top: 60%;
					left: 80%;
					animation: animate 10s linear infinite;
				}
				&:nth-child(4) {
					top: 40%;
					left: 40%;
					animation: animate 3s linear infinite;
				}
				&:nth-child(5) {
					top: 66%;
					left: 30%;
					animation: animate 7s linear infinite;
				}
				&:nth-child(6) {
					top: 90%;
					left: 10%;
					animation: animate 9s linear infinite;
				}
				&:nth-child(7) {
					top: 30%;
					left: 60%;
					animation: animate 5s linear infinite;
				}
				&:nth-child(8) {
					top: 70%;
					left: 20%;
					animation: animate 8s linear infinite;
				}
				&:nth-child(9) {
					top: 75%;
					left: 60%;
					animation: animate 10s linear infinite;
				}
				&:nth-child(10) {
					top: 50%;
					left: 50%;
					animation: animate 6s linear infinite;
				}
				&:nth-child(11) {
					top: 45%;
					left: 20%;
					animation: animate 10s linear infinite;
				}
			}
		}
		&-info{
			position: relative;
			z-index: 1;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			.container-title{
				filter: url(#threshold) blur(0.6px);
			}
			.title{
				font-size: 56px;
				font-weight: 700;
				line-height: 120%;
				@media(max-width: 768px){
					font-size: 36px;
				}
				@media(max-width: 370px){
					font-size: 28px;
				}
			}
			.description{
				max-width: 60%;
				font-size: 14px;
				margin: 35px 0 50px;
				line-height: 140%;
				@media(max-width: 370px){
					max-width: none;
				}
			}
		}
	}
	@keyframes animate {
		0% {
			transform: scale(0) translateY(0) rotate(70deg);
		}
		100% {
			transform: scale(1.3) translateY(-100px) rotate(360deg);
		}
	}





</style>
