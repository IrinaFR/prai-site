<template lang="pug">
nuxt-link.info-block(to="/")
	.image
		img(src="/img/cases/code.svg")
	.info
		.title Корпоративный сайт застройщика
		.link Смотреть
			img(src="/img/arrow.svg")
</template>

<style scoped lang="scss">
	.info-block{
		display: flex;
		column-gap: 12px;
		border-radius: $radius-small;
		border: solid 1px $light-border;
		padding: 20px;
		text-decoration: none;
		transition: $anim-small;
		& + .info-block{
			margin-top: 16px;
		}
		.image{
			display: flex;
			align-items: center;
			justify-content: center;
			background: $text-black;
			border-radius: 14px;
			width: 150px;
			img{
				height: 24px;
			}
		}
		.info{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 14px;
				color: $text-black;
			}
			.link{
				color: $blue;
				display: flex;
				column-gap: 8px;
				align-items: center;
				font-size: 12px;
				font-weight: 600;
				transition: $anim-small;
				img{
					transform: rotate(-90deg);
				}
			}
		}
		&:hover{
			border: solid 1px $blue;
			.link{
				column-gap: 15px;
			}
		}
	}
</style>
