<template lang="pug">
.main-screen
	.container
		.main-screen-info
			h1.title Инновационные
				span.blue нейросети
				| ,
				span.blue веб
				| и
				span.blue мобильные
				| приложения
			.subtitle Более 12 лет создаем будущее технологий вместе!
			PraiUiButtons(text="Рассчитать стоимость" @click="$_index_screen_openModal")
			.info
				.item
					.image
						img(src="/img/fire-blue.svg")
						| {{storeSite.count_hack}}
					.desc {{$_index_screen_Intl('award', storeSite.count_hack)}}
						br
						| в хакатонах по AI и ML
				.item
					.image
						img(src="/img/rocket.svg")
						| {{storeSite.count_case}}
					.desc(v-html="$_index_screen_Intl('project', storeSite.count_case)" )
		.main-screen-slider(v-show="swiperRef" )
			swiper.item-swiper(
				:spaceBetween="storeUtils.getWidth > 768 ? 50 : 20"
				:slidesPerView="countPerView"
				:autoplay="{ delay: 3500, disableOnInteraction: false }"
				loop
				:height="storeUtils.getWidth > 768 ? 485 : null"
				centered-slides
				:modules="modules"
				:direction="storeUtils.getWidth > 768 ? 'vertical' : 'horizontal'"
				class="step-swiper"
				@swiper="$_index_screen_getSwiperRef")
				swiper-slide.item-swiper-slide(v-for="item in list" :title="item")
					.circle
					.card {{item}}
	img.pattern(src="/img/index/pattern-index.svg")
</template>

<script>
	import {useModalStore} from "/store/modal";
	import {useSiteStore} from "/store/site";
	import {useUtilsStore} from "/store/utils";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Autoplay } from "swiper/modules";

	export default {
		components: {
			PraiUiButtons: defineAsyncComponent(() => import('/components/ui/PraiUiButtons.vue')),
			Swiper, SwiperSlide },
		data(){
			return{
				swiperRef: null,
				modules: [Autoplay],
				modal: useModalStore(),
				storeSite: useSiteStore(),
				storeUtils: useUtilsStore(),
				list: [
					'Разработка систем бизнес анализа',
					'Разработка систем ИИ (AI)',
					'Машинное обучение',
					'Настройка сбора аналитики',
					'Применение AI и ML решений',
					'Реализация проекта под ключ',
					'Размещение в магазине приложений',
					'Интеграция приложения с CRM-системами',
					'Построение BI отчётности',
					'Frontend разработка',
					'Backend разработка'
				],
				intl: {
					award: {
						"zero": "призовых мест",
						"one": "призовое место",
						"few": "призовых места",
						"many": "призовых мест",
						"other": "призовых мест"
					},
					project: {
						"zero": "выполненных <br>проектов",
						"one": "выполненный <br>проект",
						"few": "выполненных <br>проекта",
						"many": "выполненных <br>проектов",
						"other": "выполненных <br>проектов"
					}
				},
			}
		},
		computed: {
			countPerView(){
				const screen = this.storeUtils.getWidth
				if(screen > 768) return 5
				else if(screen > 660) return 3
				else return 1.6
			}
		},
		methods: {
			$_index_screen_Intl(key, count){
				const subKey = new Intl.PluralRules('ru').select(count)
				return this.intl[key][subKey]
			},
			$_index_screen_openModal(){
				this.modal.openModalFeedback('Первый экран главной страницы')
			},
			$_index_screen_getSwiperRef(swiper){
				this.swiperRef = swiper
			}
		}
	}
</script>

<style scoped lang="scss">
	.main-screen{
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
		max-width: 100%;
		background: #F4F5F7 url("/public/img/pattert-light.png") repeat;
		background-size: 450px;
		@media(max-width: 768px){
			height: fit-content;
		}
		.pattern{
			position: absolute;
			top: 0;
			right: 0;
			height: 100%;
			z-index: 0;
		}
		.container{
			padding-top: 230px;
			display: flex;
			align-items: center;
			gap: 30px;
			justify-content: space-between;
			position: relative;
			z-index: 1;
			@media(max-width: 768px){
				flex-direction: column;
				padding-top: 150px;
				.btn-animate{
					margin: 0 auto;
				}
			}
			.main-screen-info{
				max-width: 65%;
				@media(max-width: 931px){
					max-width: 55%;
				}
				@media(max-width: 768px){
					max-width: 100%;
				}
				.title{
					font-size: pxToRem(40);
					line-height: 120%;
					font-weight: bold;
					margin-top: 0;
					margin-bottom: 30px;
					font-family: 'Grotesk';
					display: flex;
					flex-wrap: wrap;
					column-gap: 5px;
					.blue{
						color: $blue;
					}
					@media(max-width: 768px){
						max-width: 100%;
						font-size: pxToRem(30);
						justify-content: center;
					}
				}
				.subtitle{
					font-size: pxToRem(17);
					color: $light-secondary-text;
					margin: 20px 0 50px;
					@media(max-width: 768px){
						text-align: center;
					}
				}
				.info{
					display: flex;
					column-gap: 20px;
					margin-top: 40px;
					@media(max-width: 768px){
						justify-content: center;
						column-gap: 40px;
						.image{
							justify-content: center;
						}
						.desc{
							text-align: center;
						}
					}
					.item{
						.image{
							display: flex;
							column-gap: 15px;
							align-items: center;
							font-size: pxToRem(37);
							font-weight: 600;
							color: $light-secondary-text;
							margin-bottom: 5px;
						}
						.desc{
							color: $light-secondary-text;
						}
					}
				}
			}
			.main-screen-slider{
				overflow: hidden;
				max-height: 485px;
				position: relative;
				height: 100%;
				mask-image: linear-gradient(
						to bottom,
						hsl(0 0% 0% / 0),
						hsl(0 0% 0% / 1) 50%,
						hsl(0 0% 0% / 1) 50%,
						hsl(0 0% 0% / 0)
				);
				@media(max-width: 768px){
					margin-top: 40px;
					mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 33.56%,#fff 66.56%, rgba(255, 255, 255, 0) 100%)
				}

				.item-swiper{
					@media(max-width: 768px){
						max-width: calc(100vw - 10px);
					}
					&-slide{
						display: flex;
						align-items: center;
						column-gap: 40px;
						height: 100%;
						@media(max-width: 768px) {
							justify-content: center;
						}
						.circle{
							width: 15px;
							height: 15px;
							min-width: 15px;
							border-radius: 50%;
							background: $light-border;
							transition: $anim-long;
							@media(max-width: 768px){
								display: none;
							}
						}
						.card{
							padding: 20px 25px;
							border-radius: 15px;
							background: $white;
							font-weight: 700;
							box-shadow: 0 4px 20px 0 rgba(69, 93, 178, .12);
							font-size: pxToRem(14);

						}
					}
					&-slide.swiper-slide-active .circle{
						background: $blue;
					}
				}
			}
		}
	}
</style>