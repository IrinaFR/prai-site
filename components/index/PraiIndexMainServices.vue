<template lang="pug">
.container
	.title-block.center.white
		.subtitle-card.blue.uppercase Услуги
		h2.title Исследуйте наши
			span.pacifico удивительные
			| возможности
		.description Работая с каждым клиентом как с единственным, мы помогаем бизнесам и стартапам становиться лидерами за счёт разработки и внедрения уникального программного обеспечения и сервисов
	.services-list
		.gradient
		router-link.services-list-item.ai(to="/")
			.info
				.title
					PraiUiIcon(icon="/services/ai.svg" color="#0072FA")
					| Natural Language Processing
				.description Мы специализируемся на создании нейросетей для обработки естественного языка (NLP), позволяя вашей компании извлекать ценную информацию из текстовых данных. Мы разрабатываем модели для автоматического анализа текстов, определения тональности, категоризации и извлечения смысла из больших объёмов текстовой информации.
				.services-list-item-products
					.subtitle-card.blue AI ассистенты
					.subtitle-card.blue Аналитика NLP
					.subtitle-card.blue Автоматизация процессов
					.subtitle-card.blue Прогнозирование
			.animate
				.pulsar
					.icon AI
					.ring
					.ring
					.ring
					.ring
					.ring
		router-link.services-list-item.web(to="/veb-prilozheniya")
			.info
				.title
					PraiUiIcon(icon="/services/web.svg" color="#FA0096")
					| Веб-приложения
				.description Мы создаём современные и интуитивно понятные веб-приложения, которые позволят вашим клиентам удобно взаимодействовать с вашим бизнесом онлайн. Наша команда разработчиков специализируется на фронтенде и бэкенде, обеспечивая отличное пользовательское впечатление и эффективное функционирование приложения.
				.services-list-item-products
					.subtitle-card.light-pink Интернет-магазин
					.subtitle-card.light-pink CRM система
					.subtitle-card.light-pink Корпоративный сайт
					.subtitle-card.light-pink Блог
			.animate
				.ctrl
					.sphere
		router-link.services-list-item.app(to="/")
			.info
				.title
					PraiUiIcon(icon="/services/app.svg" color="#28AF07")
					| Мобильные приложения
				.description Мы создаём высококачественные приложения под управлением iOS и Android. Мы следуем лучшим практикам разработки, чтобы обеспечить отличное пользовательское взаимодействие, высокую производительность и надёжность. Ваши клиенты смогут пользоваться вашими услугами и продуктами в любое время и в любом месте.
				.services-list-item-products
					.subtitle-card.green Онлайн-бронирование
					.subtitle-card.green Умный дом
					.subtitle-card.green Личный кабинет
</template>

<script setup>
	import PraiUiIcon from "/components/ui/PraiUiIcon.vue";
</script>

<style scoped lang="scss">
	.services-list{
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 16px;
		margin-top: 55px;
		position: relative;
		margin-bottom: 35px;
		@media(max-width: 768px){
			display: flex;
			flex-direction: column;
			row-gap: 16px;
		}
		& .gradient{
			position: absolute;
			width: 270px;
			background: linear-gradient(180deg, #073C8A 0%, #7644B6 100%);
			filter: blur(44px);
			height: 530px;
			transform: rotate(45deg);
			left: 25%;
			top: -80px;
			border-top-left-radius: 150px;
			border-bottom-right-radius: 350px;
			z-index: 0;
			@media(max-width: 768px){
				display: none;
			}
		}
		&-item{
			filter: grayscale(1);
			color: $white;
			padding: 33px;
			border-radius: $radius-small;
			border: solid 1px $dark-border;
			position: relative;
			overflow: hidden;
			transition: $anim-long;
			cursor: pointer;
			background: rgba(14, 0, 63, 46%);
			&:hover{
				filter: grayscale(0);
				background: $bg-block-black;
			}
			@media(max-width: 768px){
				filter: grayscale(0);
				background: $bg-block-black;
			}
			.animate{
				position: absolute;
			}
			&.ai{
				grid-area: 1 / 1 / 2 / 13;
				.info{
					max-width: 50%;
				}
				.animate{
					top: 0;
					right: 0;
				}
				@media(max-width: 768px){
					.info{
						max-width: 100%;
						margin-bottom: 170px;
					}
					.animate{
						top: auto;
						bottom: -25%;
						right: 50%;
						transform: translateX(50%);
					}
				}
			}
			&.web{
				grid-area: 2 / 1 / 3 / 8;
				.info{
					max-width: 70%;
				}
				.animate{
					top: 0;
					right: -30%;
				}
				@media(max-width: 768px){
					.info{
						max-width: 100%;
						margin-bottom: 160px;
					}
					.animate{
						top: auto;
						bottom: -40%;
						right: 50%;
						transform: translateX(50%);
					}
				}
			}
			&.app{
				grid-area: 2 / 8 / 3 / 13;
				@media(max-width: 768px){
				}
				&:hover{
					border: solid 1px $green;
				}
				@media(max-width: 768px){
					border: solid 1px $green;
				}
			}
			.title{
				display: flex;
				align-items: center;
				column-gap: 16px;
				font-weight: 600;
				font-size: 19px;
				@media(max-width: 768px){
					font-size: 15px;
				}
			}
			.description{
				color: $dark-secondary-text;
				margin: 16px 0;
				font-size: 14px;
				@media(max-width: 768px){
					font-size: 12px;
				}
			}
			&-products{
				display: flex;
				flex-wrap: wrap;
				column-gap: 12px;
				row-gap: 8px;
			}
		}
	}
	// Анимация ai
	.services-list-item.ai{
		.pulsar {
			width: 345px;
			height: 345px;
			margin: 0 auto;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&:hover{
			.pulsar .ring{
				animation-play-state: running;
			}
		}
		& .icon{
			position: relative;
			z-index: 1;
			width: 103px;
			height: 105px;
			border: solid 1px $blue;
			border-radius: $radius-small;
			background: linear-gradient(135deg, #212121 0%, #171717 100%);
			box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
			text-transform: uppercase;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 55px;
			color: $white;
		}
		& .ring {
			box-sizing: border-box;
			position: absolute;
			top: 50%;
			left: 50%;
			border: 1px solid $blue;
			box-shadow: inset 0 0 30px 10px rgba(0, 114, 255, .2);
			border-radius: 58px;
			width: 100%;
			height: 100%;
			margin-top: -50%;
			margin-left: -50%;
			transform: scale(.2);
			&:nth-child(1) {
				animation: pulsar 2s -2s linear infinite paused;
			}
			&:nth-child(2) {
				animation: pulsar 2s -1.5s linear infinite paused;
			}
			&:nth-child(3) {
				animation: pulsar 2s -1s linear infinite paused;
			}
			&:nth-child(4) {
				animation: pulsar 2s -0.5s linear infinite paused;
			}
			&:nth-child(5) {
				animation: pulsar 2s 0s linear infinite paused;
			}
			@media(max-width: 768px){
				animation-play-state: running !important;
			}
		}
		@keyframes pulsar {
			0% {
				transform: scale(.2);
				opacity: 1;
			}
			75% {
				opacity: 1;
			}
			100% {
				transform: scale(1);
				opacity: 0;
			}
		}
	}
	// Анимация веб
	.services-list-item.web{
		&:hover .ctrl{
			animation-play-state: running
		}
		.ctrl {
			display: inherit;
			justify-content: center; align-items: center;
			width: 345px;
			height: 345px;
			transform-style: preserve-3d;
			transform: rotateY(45deg) rotateX(45deg);
			animation: rotate 8s ease-in-out infinite paused;
			$c1: hsl(324,100%,49%);
			$width: 1px;
			$blur: 12px;
			@media(max-width: 768px){
				animation-play-state: running
			}
			.sphere{
				position: absolute;
				top: 50%;
				left: 50%;
				width: 100%;
				height: 100%;
				border-radius: 100%;
				background: transparent;
				transform: translate(-50%, -50%) rotateY(0deg);
				transform-style: preserve-3d;
				border: $width solid $c1;
				box-shadow: 0 0 $blur lighten($c1,10%), inset 0 0 $blur lighten($c1,10%);
				box-sizing: border-box;
				&:before, &:after {
					content: ""; display: block; position: absolute;
					top: 50%;
					left: 50%;
					width: 100%;
					height: 100%;
					border-radius: 100%;
					background: inherit;
					transform: translate(-50%, -50%) rotateY(90deg) scale(.95);
					border: $width solid $c1;
					box-shadow: 0 0 $blur lighten($c1,10%), inset 0 0 $blur lighten($c1,10%);
					box-sizing: border-box;
				}
				&:after {
					transform: translate(-50%, -50%) rotateX(90deg) scale(.9);
					border: $width solid $c1;
					box-shadow: 0 0 $blur lighten($c1,10%), inset 0 0 $blur lighten($c1,10%);
				}
			}
		}
		@keyframes rotate {
			0%   {transform: rotate3d(1, 0, -1, -135deg); }
			33%  {transform: rotate3d(-1, 1, 0, -135deg); }
			67%  {transform: rotate3d(0, -1, 1, -135deg); }
			100% {transform: rotate3d(1, 0, -1, -135deg); }
		}
	}
</style>
