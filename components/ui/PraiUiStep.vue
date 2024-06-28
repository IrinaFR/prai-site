<template lang="pug">
.step-work(v-if="store.getWidth>768")
	.container
		.title-block.center
			.subtitle-card.uppercase(:class="$props.class") Agile
			h2.title Этапы работы
		.step-work-list(:class="$props.class")
			.step-work-list-slider
				swiper.step-swiper(
					:spaceBetween="16"
					slidesPerView="auto"
					:direction="'vertical'"
					:allowTouchMove="false"
					centered-slides
					class="step-swiper"
					@swiper="$_ui_stack_getRefSwiper")
					swiper-slide.step-swiper-slide(v-for="step in steps")
						ul
							li(v-for="item in step.list" ) {{item}}
			.step-work-list-progress(:style="`--step:${progress}%`")
				.point(v-for="idx in steps.length" :class="{active:swiperRef?.activeIndex >= idx - 1}")
			.step-work-list-items
				.item(v-for="step in steps")
					img(:src="'/img/steps/' + step.icon")
					| {{step.title}}
PraiUiStepMobile(:steps="steps" :class="$props.class" v-else)
</template>

<script>
	import {Swiper, SwiperSlide} from "swiper/vue";
	import { gsap } from "gsap/all";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import PraiUiStepMobile from './PraiUiStepMobile.vue'
	import {useUtilsStore} from "/store/utils";
	export default {
		components: {Swiper, SwiperSlide, PraiUiStepMobile},
		props: {
			class: {
				type: String,
				default: 'blue'
			},
			steps: Array
		},
		data(){
			return{
				store: useUtilsStore(),
				swiperRef: null,
				count: 0,
			}
		},
		computed: {
			progress(){
				if(this.swiperRef) {
					return Math.ceil(this.swiperRef.activeIndex * 100 / (this.steps.length - 1))
				} else return 0
			},
		},
		methods: {
			$_ui_stack_setGSAP(){
				gsap.registerPlugin(ScrollTrigger);

				gsap.to('.step-swiper', {
					scrollTrigger: {
						trigger: '.step-work',
						start: '-100px top',
						scrub: 0.5,
						pin: true,
						onUpdate: ({ progress }) => {
							if(!this.swiperRef.destroyed) this.swiperRef?.setProgress(progress)
						}
					},
				})
			},
			$_ui_stack_getRefSwiper(swiper){
				if(process.client){
					this.swiperRef = swiper
					this.$_ui_stack_setGSAP()
				}
			}
		}
	}
</script>

<style lang="scss">
	.step-work{
		background: url("/public/img/pattert-light.png") repeat;
		background-size: 450px;
		padding: 50px 0;
		margin-bottom: 50px;
		position: relative;
		&-list{
			display: grid;
			grid-column-gap: 45px;
			grid-template-columns: 1fr 15px 1fr;
			--bg: #0072FA;
			&.light-pink{
				--bg: #ff4bb5;
			}
			&.green{
				--bg: #00C838;
			}
			&-slider{
				mask-image: linear-gradient(
						to bottom,
						hsl(0 0% 0% / 0),
						hsl(0 0% 0% / 1) 10%,
						hsl(0 0% 0% / 1) 90%,
						hsl(0 0% 0% / 0)
				);
				.step-swiper{
					display: flex;
					flex-direction: column;
					row-gap: 16px;
					max-height: 490px;
					.step-swiper-slide{
						position: relative;
						height: fit-content;
						max-width: calc(100% - 39px);
						padding: 20px 18px;
						border-radius: $radius-small;
						border: solid 1px #E7E8EE;
						background: #FFFFFF;
						opacity: .5;
						color: $light-secondary-text;
						transition: $anim-small;
						z-index: 1;
						&.swiper-slide-active{
							opacity: 1;
							border: solid 1px var(--bg);
						}
						ul{
							padding-left: 18px;
						}
						li + li{
							margin-top: 24px;
						}
					}
				}
			}
			&-progress{
				min-width: 15px;
				max-width: 15px;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				&::after{
					content: '';
					display: block;
					position: absolute;
					z-index: -1;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 3px;
					height: 100%;
					background: linear-gradient(180deg, var(--bg) 0%, var(--bg) var(--step), var(--bg) calc(var(--step) + 0.01%), #D9D9D9 calc(var(--step) + 0.02%));
					border-radius: 3px;
				}
				.point{
					width: 15px;
					height: 15px;
					background: #E7E8EE;
					border-radius: 50%;
					&.active{
						background: var(--bg);
					}
				}
			}
			&-items{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.item{
					font-size: 20px;
					font-weight: 600;
					display: flex;
					align-items: center;
					column-gap: 16px;
				}
			}
		}
	}
</style>
