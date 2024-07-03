<template lang="pug">
.container
	.hack-slider
		.hack-slider-show(ref="refCurrentSlide" v-if="hackatons.length" )
			.hack-slider-show-slider-parent
				.hack-slider-show-slider
					Swiper(
						ref="hackSlider"
						:pagination="{clickable: true}"
						:modules="modules"
						loop
						:slidesPerView="'auto'"
						class="hack-swiper"
						@swiper="$_index_hack_slider_setSwiper")
						swiper-slide.hack-swiper-slide(v-for="slide in hackatons[current].files" )
							img(:src="`${useRuntimeConfig().public.apiServerImg}photo/hackatons/${slide}`")
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
					|  {{hackatons[current].name}}
					span.bracket  ]
				.title Кейс:
				.size-14.light-grey {{hackatons[current].task}}
				.title.mt-24 Наше решение:
				.size-14.light-grey {{hackatons[current].solve}}
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
				.icon
					img(src="/img/arrow.svg" alt="icon")
			.arrow.right(@click="$_index_hack_slider_hackatonSlide('next')") {{nextTitle}}
				.icon
					img(src="/img/arrow.svg" alt="icon")
</template>

<script setup>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Pagination } from "swiper/modules";
	import {useRuntimeConfig} from "nuxt/app";

	const modules = [Pagination]
	const swiper = ref(null)
	const hackatons = ref([])
	const current = ref(0)

	const showPlace = computed(() => {
		return hackatons.value[current.value].award && hackatons.value[current.value].award < 4
	})
	const prevTitle = computed(() => {
		if(hackatons.value.length){
			if(current.value === 0) return hackatons.value.at(-1).name
			else return hackatons.value[current.value - 1].name
		}
	})
	const nextTitle = computed(() => {
		if(hackatons.value.length){
			if(current.value === hackatons.value.length - 1) return hackatons.value[0].name
			else return hackatons.value[current.value + 1].name
		}
	})

	const { $makeRequest } = useNuxtApp()

	const { data } = await useAsyncData('hacks', async () => {
		return await $_index_hack_slider_loadHacks()
	})

	if(data.value) $_index_hack_slider_setData(data.value)
	async function $_index_hack_slider_loadHacks(){
		const res = await $makeRequest('GET', 'hackatons/all/0')
		if(res&&!res.err){
			hackatons.value = res.hacks
			return { hackatons: hackatons.value }
		}
		return null
	}
	function $_index_hack_slider_setData(data){
		hackatons.value = data.hackatons
	}
	function $_index_hack_slider_setSwiper(instance){
		swiper.value = instance
	}
	function $_index_hack_slider_miniSlideTo(side){
		side === 'next'
			? swiper.value.slideNext()
			: swiper.value.slidePrev()
	}

	const refCurrentSlide = ref(null)
	function $_index_hack_slider_hackatonSlide(side){
		refCurrentSlide.value.classList.add('animate')
		if(side === 'next'){
			if(current.value === hackatons.value.length - 1) current.value = 0
			else current.value++
		} else {
			if(current.value === 0) current.value = hackatons.value.length - 1
			else current.value--
		}
		swiper.value.slideTo(0)

		setTimeout(() => {
			refCurrentSlide.value.classList.remove('animate')
		}, 550)
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
			min-height: 655px;
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
				width: 45%;
				max-width: 45%;
				display: flex;
				column-gap: 24px;
				flex-direction: row-reverse;
				align-items: center;
				padding: 10px;
				font-size: pxToRem(18);
				font-weight: 600;
				cursor: pointer;
				transition: $anim-small;
				&:hover{
					color: $blue;
				}
				.icon{
					box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.25);
					background: $white;
					border-radius: 50%;
					width: 28px;
					min-width: 28px;
					height: 28px;
					display: flex;
					align-items: center;
					justify-content: center;
					img{
						width: 6px;
					}
				}
				&.left{
					justify-content: start;
					img{
						transform: rotate(90deg);
					}
				}
				&.right{
					justify-content: end;
					text-align: end;
					flex-direction: row;
					img{
						transform: rotate(-90deg);
					}
				}
				@media(max-width: 845px){
					font-size: 14px;
				}
			}
		}
		&-controls-mobile{
			position: absolute;
			top: auto;
			bottom: 0;
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
				display: grid;
				img{
					display: block;
					position: relative;
					margin: auto;
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
