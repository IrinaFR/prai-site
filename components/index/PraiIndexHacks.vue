<template lang="pug">
.container
	.title-block.center.mt-50
		.description Наша команда активно участвует в хакатонах по искусственному интеллекту и не раз завоёвывала призовые места. Наши успехи в хакатонах подтверждают нашу способность к инновациям, быстрому прототипированию и решению сложных задач. Мы настроены на достижение результатов и готовы разработать продукт, который точно соответствует вашим потребностям и задачам.
	.hack-slider
		.hack-slider-show(ref="currentSlide")
			.hack-slider-show-slider-parent
				.hack-slider-show-slider
					swiper(
						ref="hackSlider"
						:pagination="{clickable: true}"
						:modules="modules"
						loop
						:slidesPerView="'auto'"
						class="hack-swiper"
						@swiper="$_index_hack_slider_setSwiper")
						swiper-slide.hack-swiper-slide(v-for="slide in hackatons[current].diplomas" )
							img(:src="'/img/awards/' + slide")
					.hack-slider-navigation
						.hack-swiper-button-prev(@click="$_index_hack_slider_miniSlideTo('prev')")
							img(src="/img/arrow.svg" alt="icon")
						.hack-swiper-button-next(@click="$_index_hack_slider_miniSlideTo('next')")
							img(src="/img/arrow.svg" alt="icon")
				.substrate_1
				.substrate_2
			.hack-slider-show-info
				.hack-name.mb-24
					span.current {{current + 1}} -
					span.bracket [
					|  {{hackatons[current].title}}
					span.bracket  ]
				.title Кейс:
				.size-14.light-grey {{hackatons[current].case}}
				.title.mt-8 Наше решение:
				.size-14.light-grey {{hackatons[current].final}}
				.awards
					img(:src="`/img/awards/medal-${hackatons[current].award}.svg`" alt="icon" v-if="showPlace")
					| {{hackatons[current].award}} место
			.hack-slider-controls-mobile
				.arrow.left(@click="$_index_hack_slider_hackatonSlide('prev')")
					img(src="/img/arrow.svg" alt="icon")
				.arrow.right(@click="$_index_hack_slider_hackatonSlide('next')")
					img(src="/img/arrow.svg" alt="icon")
		.hack-slider-controls
			.arrow.left(@click="$_index_hack_slider_hackatonSlide('prev')") {{prevTitle}}
				img(src="/img/awards/arrow.svg" alt="icon")
			.arrow.right(@click="$_index_hack_slider_hackatonSlide('next')") {{nextTitle}}
				img(src="/img/awards/arrow.svg" alt="icon")
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Pagination } from "swiper/modules";

	export default {
		data(){
			return{
				modules: [Pagination],
				swiper: null,
				hackatons: [
					{
						shortTitle: 'Цифровой прорыв. Сезон ИИ',
						title: 'Цифровой прорыв. Сезон искусственный интеллект',
						case: 'Разработка системы распознавания, автоматической проверки качества документов корпоративных клиентов и формирования электронного досье',
						final: 'Разработка системы распознавания, автоматической проверки качества документов корпоративных клиентов и формирования электронного досье',
						award: 2,
						diplomas: ['test.jpg', 'test.jpg', 'test.jpg']
					},
					{
						shortTitle: 'Цифровой прорыв 2021',
						title: 'Цифровой прорыв 2021',
						case: 'Разработка системы распознавания, автоматической проверки качества документов корпоративных клиентов и формирования электронного досье',
						final: 'Разработка системы распознавания, автоматической проверки качества документов корпоративных клиентов и формирования электронного досье',
						award: 4,
						diplomas: ['test.jpg', 'test.jpg', 'test.jpg']
					},
					{
						shortTitle: 'Цифровой прорыв 2023',
						title: 'Цифровой прорыв 2023',
						case: 'Разработка системы распознавания, автоматической проверки качества документов корпоративных клиентов и формирования электронного досье',
						final: 'Разработка системы распознавания, автоматической проверки качества документов корпоративных клиентов и формирования электронного досье',
						award: 1,
						diplomas: ['test.jpg', 'test.jpg', 'test.jpg']
					},
				],
				current: 0
			}
		},
		components: {
			Swiper, SwiperSlide
		},
		computed: {
			showPlace(){
				return this.hackatons[this.current].award && this.hackatons[this.current].award < 4
			},
			prevTitle(){
				if(this.current === 0) return this.hackatons.at(-1).shortTitle
				else return this.hackatons[this.current - 1].shortTitle
			},
			nextTitle(){
				if(this.current === this.hackatons.length - 1) return this.hackatons[0].shortTitle
				else return this.hackatons[this.current + 1].shortTitle
			},

		},
		methods: {
			$_index_hack_slider_setSwiper(swiper){
				this.swiper = swiper
			},
			$_index_hack_slider_miniSlideTo(side){
				side === 'next'
					? this.swiper.slideNext()
					: this.swiper.slidePrev()
			},
			$_index_hack_slider_hackatonSlide(side){
				this.$refs.currentSlide.classList.add('animate')
				if(side === 'next'){
					if(this.current === this.hackatons.length - 1) this.current = 0
						else this.current++
				} else {
					if(this.current === 0) this.current = this.hackatons.length - 1
					else this.current--
				}
				setTimeout(() => {
					this.$refs.currentSlide.classList.remove('animate')
				}, 550)
			}
		}
	}
</script>

<style scoped lang="scss">
	.hack-swiper{
		height: 443px;
		position: relative;
	}
	.hack-slider{
		margin-top: 35px;
		&-show{
			display: flex;
			align-items: center;
			column-gap: 75px;
			row-gap: 16px;
			position: relative;
			&.animate{
				animation: fadeHack $anim-long;
			}
			&-info{
				font-size: 14px;
				.hack-name {
					.current{
						color: $light-secondary-text;
						font-weight: 600;
						margin-right: 5px;
					}
					.bracket{
						font-weight: 700;
						color: $blue;
					}
				}
				.title{
					font-size: 20px;
					font-weight: 600;
					margin-bottom: 24px;
				}
				.awards{
					margin-top: 24px;
					display: flex;
					justify-content: center;
					align-items: center;
					column-gap: 12px;
					width: fit-content;
					padding: 20px;
					font-weight: 600;
					border-radius: $radius-small;
					box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.25);
					background: $white url("public/img/pattert-light.png") repeat;
					background-size: 73px;
				}
			}
			@keyframes fadeHack {
				0% { opacity: 0 }
				100% { opacity: 1 }
			}
			@media(max-width: 845px) {
				flex-direction: column;
				&-info .awards{
					width: auto;
				}
			}
		}
		&-controls{
			display: flex;
			column-gap: 12px;
			align-items: center;
			justify-content: space-between;
			margin-top: 35px;
			@media(max-width: 567px) {
				display: none;
			}
			.arrow{
				display: flex;
				flex-direction: column;
				row-gap: 12px;
				font-size: 20px;
				font-weight: 600;
				cursor: pointer;
				transition: $anim-small;
				&:hover{
					color: $blue;
				}
				img{
					width: 179px;
				}
				&.right{
					align-items: end;
					img{
						transform: scale(-1, 1);
					}
				}
				@media(max-width: 845px){
					font-size: 14px;
				}
			}
		}
		&-controls-mobile{
			position: absolute;
			top: 425px;
			left: 0;
			transform: translateY(-50%);
			display: none;
			justify-content: space-between;
			width: 100%;
			max-width: 100%;
			z-index: 3;
			@media(max-width: 567px) {
				display: flex;
			}
			@media(max-width: 530px){
				top: 50%;
			}
			.arrow{
				border-radius: 50%;
				width: 40px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: $blue;
				img{
					filter: brightness(0) invert(1);
				}
				&.left img{
					transform: rotate(90deg);
				}
				&.right img{
					transform: rotate(-90deg);
				}
			}
		}
	}
	.hack-slider-show-slider-parent{
		position: relative;
		z-index: 2;
		&::after,
		&::before{
			content: '';
			width: 80px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			background: $white;
			border-radius: $radius-small;
			box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.25);
		}
		&::before{
			height: 413px;
			right: -20px;
			z-index: 1;
		}
		&::after{
			height: 383px;
			background: $white;
			right: -40px;
			z-index: 0;
		}
		.hack-slider-show-slider{
			width: 443px;
			height: 443px;
			border-radius: $radius-small;
			border: 1px solid $light-border;
			box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.25);
			position: relative;
			background: $white url("public/img/pattert-light.png") repeat;
			z-index: 2;

			.hack-swiper-slide{
				width: 100%;
				height: 366px;
				text-align: center;
				padding: 30px 0 47px;
				overflow: hidden;
				img{
					max-width: 261px;
					border-radius: $radius-small;
				}
			}
		}
		@media(max-width: 530px){
			&::before{
				right: -10px;
			}
			&::after{
				right: -20px;
			}
			.hack-slider-show-slider{
				width: 299px;
			}
		}
		@media(max-width: 345px){
			&::before,
			&::after{
				display: none;
			}
		}
	}

</style>
