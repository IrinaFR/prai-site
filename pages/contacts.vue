<template lang="pug">
.root-contacts(ref="root" :key="$route.fullPath")
	.container
		.root-contacts-content
			.root-contacts-content-map
				YandexMap(
					v-model="map"
					:settings="settings")
					YandexMapDefaultSchemeLayer
					YandexMapDefaultFeaturesLayer
					YandexMapMarker(:settings="{coordinates:settings.location.center}")
						img.custom-marker(src="/img/mapPrai.svg")
			.root-contacts-content-info
				.info-main
					.info-main-item
						.title Адрес
						.desc 353560, г. Славянск-на-Кубани, ул. Победы, д. 194/1
					.info-main-item
						.title Почта
						.desc info@prai.su
					.info-main-item
						.title Телефон
						.desc +7 (995) 226-07-38
				.info-social
					PraiFeedbackSocial
				.info-official
					.info-official-item
						.title Полное название организации
						.desc ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ПРАЙ"
					.info-official-item
						.title ИНН
						.desc 2370013417
					.info-official-item
						.title ОГРН
						.desc 1232300031391
					.info-official-item
						.title КПП
						.desc 237001001
		.root-contacts-footer
			.size-14.dark-grey © PRAI {{new Date().getFullYear()}}. Все права защищены
			nuxt-link.size-14.dark-grey(to="/politika") Политика конфиденциальности
</template>

<script>
	import {useHeaderStore} from "/store/header";
	import {YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapMarker} from "vue-yandex-maps";
	export default {
		setup(){
			const description = 'Контактная информация о компании | ПРАЙ'
			useHead({
				title: 'Контакты',
				meta: [
					{ name: 'description', content: description },
					{ property: 'og:title', content: 'Контакты | ПРАЙ' },
					{ property: 'og:description', content: description },
				]
			})
		},
		data(){
			return{
				storeHeader: useHeaderStore(),
				settings: {
					location: {
						lang: 'ru_RU',
						center: [38.127966553800874, 45.25506010642486],
						zoom: 16,
					},
					theme: 'dark'
				},
				map: null
			}
		},
		mounted(){
			setTimeout(() => {
				this.$refs.root.classList.add('opened')
			}, 50)
			this.storeHeader.setHeader({
				logo: '#ffffff32',
				opacity: 0.78,
				border: 'rgba(256, 256, 256, 1)',
				bgHeader: '10, 10, 10,',
				colorHeader: '#ffffff',
			})
		},
		components: {
			PraiFeedbackSocial: defineAsyncComponent(() => import('/components/feedback/PraiFeedbackSocial.vue')),
			YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapMarker
		}
	}
</script>

<style scoped lang="scss">
	.root-contacts{
		width: 0;
		height: 0;
		&::before,
		&::after{
			content: "";
			position: fixed;
			width: 0;
			height: 0;
			top: 0;
			left: 0;
			background: rgba(0, 113, 250, .2);
			border-bottom-right-radius: 200%;

			-webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
			transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
			transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
			transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
			-webkit-transform: translateX(-100%) translateY(-100%);
			transform: translateX(-100%) translateY(-100%);
		}
		&::after{
			background: $bg-block-black;
			-webkit-transition-delay: 0s;
			transition-delay: 0s;
		}
		&::before{
			-webkit-transition-delay: .2s;
			transition-delay: .2s;
		}
		&.opened{
			height: 100vh;
			width: 100%;
			background: rgba(255, 255, 255, 0.6);
			&::after,
			&::before{
				-webkit-transform: translateX(0%) translateY(0%);
				transform: translateX(0%) translateY(0%);
				border-radius: 0;
				width: 100vw;
				height: 100vh;
			}
			&::after{
				-webkit-transition-delay: .1s;
				transition-delay: .1s;
			}
			&::before{
				-webkit-transition-delay: 0s;
				transition-delay: 0s;
			}
		}
		&-content{
			padding-top: 150px;
			position: relative;
			z-index: 1;
			display: flex;
			gap: 35px 50px;
			align-items: center;
			opacity: 0;
			animation: fadeIn $anim-long forwards;
			animation-delay: 1s;
			@media(max-width: 768px){
				padding-top: 100px;
			}

			&-map{
				flex: 0 550px;
				height: 460px;
				background: #FFFFFF;
				img{
					height: 100%;
					width: 100%;
					object-fit: cover;
				}
				.custom-marker{
					margin-top: -62px;
					margin-left: -15px;
					margin-bottom: 52px;
					width: 40px;
				}
			}
			&-info{
				flex: 1;
				.info-main{
					display: grid;
					grid-template-rows: 1fr 1fr;
					grid-template-columns: 104px 261px;
					grid-gap: 12px;
					font-size: pxToRem(14);
					&-item{
						.title{
							color: $white;
							font-weight: 600;
							margin-bottom: 16px;
							text-transform: uppercase;
						}
						.desc{
							color: $dark-secondary-text;
						}
						&:first-child{
							grid-area: 1/1/2/3;
						}
					}
				}
				.info-social{
					margin-top: 30px;
				}
				.info-official{
					margin-top: 30px;
					&-item{
						display: grid;
						grid-template-columns: 164px 1fr;
						grid-gap: 35px;
						padding: 12px 0;
						border-bottom: solid 1px $dark-border;
						line-height: 140%;
						font-size: pxToRem(14);
						.title{
							font-weight: 600;
							color: $white;
						}
						.desc{
							color: $white;
						}
					}
				}
			}
			@media(max-width: 862px){
				flex-direction: column-reverse;
				align-items: start;
				&-map{
					width: 100%;
					height: 300px;
					flex: auto;
				}
			}
		}
		&-footer{
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			gap: 16px;
			position: relative;
			z-index: 1;
			padding: 35px 0;
			border-top: solid 1px $dark-border;
			opacity: 0;
			animation: fadeIn $anim-long forwards;
			animation-delay: 1s;
			a{
				text-decoration: underline;
			}
		}
		.container{
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		@keyframes fadeIn {
			0% { opacity: 0 }
			100% { opacity: 1 }
		}
	}
</style>