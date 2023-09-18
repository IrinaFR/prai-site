<template lang="pug">
.container
	.news-list-header
		.title-block
			.subtitle-card.blue.uppercase Блог
			h2.title Новости от команды
		nuxt-link.btn-outline.desktop(to="/") Читать все
			img(src="/img/arrow.svg")
	.news-list-scroll.hide-scroll
		nuxt-link.news-list-scroll-card(to="/")
			img.image(src="/img/test.png")
			.info
				.title
					h2 Преимущества удаленной работы
					.size-14.light-grey 20 августа 2023
				button.btn-outline Читать
					img(src="/img/arrow.svg")
		nuxt-link.news-list-scroll-card(to="/")
			img.image(src="/img/test.png")
			.info
				.title
					h2 Преимущества удаленной работы
					.size-14.light-grey 20 августа 2023
				button.btn-outline Читать
					img(src="/img/arrow.svg")
		nuxt-link.news-list-scroll-card(to="/")
			img.image(src="/img/test.png")
			.info
				.title
					h2 Преимущества удаленной работы
					.size-14.light-grey 20 августа 2023
				button.btn-outline Читать
					img(src="/img/arrow.svg")
	nuxt-link.btn-outline.mobile.mx-auto.mt-24(to="/") Читать все
		img(src="/img/arrow.svg")

</template>

<style lang="scss">
	.news-list-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		margin-top: 50px;
	}
	.news-list-scroll{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 12px;
		overflow-x: auto;
		&-card{
			display: block;
			height: 400px;
			min-width: 303px;
			max-width: 303px;
			border-radius: $radius-small;
			border: solid 1px $light-border;
			padding: 20px;
			&:hover{
				.btn-outline{
					border: solid 1px $blue;
				}
			}
			.image{
				max-width: 312px;
				width: 100%;
				height: 160px;
				object-fit: cover;
				border-radius: 13px;
				background: $light-border;
			}
			.info{
				display: flex;
				flex-direction: column;
				height: calc(100% - 160px);
				.title{
					flex-grow: 1;
					h2{
						font-weight: 600;
						font-size: 19px;
						margin-bottom: 8px;
						line-height: 140%;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
					}
				}
			}
		}
	}
</style>
