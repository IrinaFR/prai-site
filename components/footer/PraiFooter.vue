<template lang="pug">
.footer
	.container
		.footer-links
			img.logo(src="/img/logo.svg")
			.footer-links-list
				.footer-links-list-main
					nuxt-link.title(to="/") Главная
					nuxt-link.title(to="/") Блог
					nuxt-link.title(to="/") Контакты
					nuxt-link.title(to="/") Вакансии
				.footer-links-list-services
					.title Услуги
					.list
						nuxt-link(:to="services.link" v-for="services in $store.getters.getAllServices") {{services.title}}
		hr
		.footer-info
			.footer-info-item
				.title Адрес
				a.size-14.dark-grey(href="https://yandex.ru/maps/-/CDUiqPnl" target="_blank") 353560, г. Славянск-на-Кубани, ул. Победы, д. 194/1
			.footer-info-item
				.title Почта
				a.size-14.dark-grey(href="mailto:info@prai.su" target="_blank") info@prai.su
			.footer-info-item
				.title Телефон
				a.size-14.dark-grey(href="tel:+79952260738" target="_blank") +7 (995) 226-07-38
		hr
		.footer-copyright
			.size-14.dark-grey © PRAI {{new Date().getFullYear()}}. Все права защищены
			nuxt-link.size-14.dark-grey(to="/") Политика конфиденциальности
</template>

<style scoped lang="scss">
	.footer{
		background: $bg-block-black;
		width: 100%;
		padding: 50px 0 30px;
		color: $white;
		&-links{
			display: flex;
			align-items: start;
			column-gap: 96px;
			&-list{
				display: flex;
				column-gap: 12px;
				&-main{
					width: 170px;
					min-width: 170px;
				}
				&-services .list{
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-row-gap: 20px;
					grid-column-gap: 82px;
					a{
						display: block;
						transition: $anim-small;
						&:hover{
							color: $blue;
						}
					}
					@media(max-width: 450px){
						grid-template-columns: repeat(1, 1fr);
					}
				}
				.title{
					font-size: 18px;
					font-weight: 700;
					margin-bottom: 20px;
				}
				a.title{
					display: block;
					transition: $anim-small;
					&:hover{
						color: $blue;
					}
				}
			}
			@media(max-width: 768px){
				flex-direction: column;
				row-gap: 35px;
			}
			@media(max-width: 625px){
				&-list{
					flex-direction: column;
					&-main{
						width: auto;
						display: flex;
						flex-wrap: wrap;
						gap: 20px;
					}
					&-services .list{

					}
				}
			}
		}
		&-info{
			display: flex;
			column-gap: 12px;
			row-gap: 16px;
			&-item{
				min-width: 283px;
				max-width: 100% !important;
			}
			@media(max-width: 950px){
				justify-content: space-between;
				&-item{
					min-width: auto;
				}
			}
			&-item:first-child{
				min-width: 352px;
				max-width: 100% !important;
			}
			.title{
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 16px;
				text-transform: uppercase;
			}
			@media(max-width: 625px){
				flex-wrap: wrap;
				&-item:first-child{
					min-width: auto;
				}
			}
		}
		&-copyright{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 16px;
			a{
				text-decoration: underline;
			}
		}
		hr{
			background: rgba(255, 255, 255, 0.08);
			height: 1px;
			width: 100%;
			border: none;
			margin: 30px 0;
		}
	}
</style>
