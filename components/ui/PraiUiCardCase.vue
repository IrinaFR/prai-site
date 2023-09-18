<template lang="pug">
nuxt-link.card-case(to="/")
	.card-case-image
		img(src="/img/test.png")
	.card-case-info
		.title Корпоративный сайт для застройщика с админ-панелью и интеграцией
		.list-services
			.item
				span.bracket [
				|  Разработка веб-приложений
				span.bracket  ]
		.list-finals
			.subtitle-card.light-pink Корпоративный сайт
			.subtitle-card.light-pink Админ-панель
			.subtitle-card.light-pink Интеграция
			.subtitle-card.light-pink SEO
</template>

<style lang="scss">
	.card-case{
		display: block;
		border-radius: 24px;
		background: $bg-block-black;
		border: solid 1px $dark-border;
		max-width: 534px;
		width: 100%;
		min-height: 504px;
		overflow: hidden;
		position: relative;
		z-index: 1;
		flex-grow: 1;
		&:hover{
			.title{
				color: $blue;
			}
		}
		@media(max-width: 768px){
			max-width: 100%;
		}
		@media(max-width: 600px) {
			min-height: fit-content;
		}
		&-image{
			width: 100%;
			height: 310px;
			@media(max-width: 930px){
				height: 260px;
			}
			@media(max-width: 760px){
				height: 220px;
			}
			@media(max-width: 600px){
				height: 330px;
			}
			@media(max-width: 495px){
				height: 290px;
			}
			@media(max-width: 410px){
				height: 230px;
			}
			@media(max-width: 345px){
				height: 190px;
			}
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				pointer-events: none;
			}
		}
		&-info{
			padding: 30px;
			width: calc(100% - 60px);
			@media(max-width: 600px) {
				padding: 20px;
				width: calc(100% - 40px);
			}
			.title{
				font-size: 19px;
				font-weight: 600;
				color: $white;
				margin-bottom: 16px;
				line-height: 140%;
				transition: $anim-small;
			}
			.list-services{
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 8px 16px;
				margin-bottom: 16px;
				.item{
					font-size: 14px;
					color: $dark-secondary-text;
					span.bracket{
						font-weight: 700;
						// TODO Добавить цвет
						color: $light-pink;
					}
				}
			}
			.list-finals{
				display: flex;
				flex-wrap: wrap;
				gap: 8px 16px;
			}
		}
	}
</style>
