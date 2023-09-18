<template lang="pug">
.container(ref="anchorSlider")
	.title-block.center.white
		h2.title Другие услуги
.container-slider
	.list-services-swiper(:style="'--offsetSlider:'+offsetContainer+'px'")
		swiper(
			:spaceBetween="16"
			:pagination="{clickable: true}"
			:modules="modules"
			:slidesPerView="'auto'"
			class="mySwiper")
			swiper-slide(v-for="(services, idx) in $store.getters.getOtherServicesWithoutIntegr")
				nuxt-link.service-card(to="/")
					svg(xmlns='http://www.w3.org/2000/svg' width='310' height='355' viewbox='0 0 310 355' fill='none')
						path( fill='#0E0C15' :stroke='`url(#paint${idx})`' d='M286 354.5H24C11.0213 354.5 0.5 343.979 0.5 331V24C0.5 11.0213 11.0213 0.5 24 0.5H249.979C256.258 0.5 262.276 3.01258 266.69 7.4774L302.711 43.9088C307.061 48.308 309.5 54.2449 309.5 60.4314V331C309.5 343.979 298.979 354.5 286 354.5Z')
						defs
							lineargradient(:id='`paint${idx}`' x1='155' y1='0' x2='155' y2='355' gradientunits='userSpaceOnUse')
								stop(:stop-color='services.gradient.stop_1')
								stop(offset='0.40625' :stop-color='services.gradient.stop_2' stop-opacity='0.790885')
								stop(offset='1' stop-color='#211F27' stop-opacity='0.27')
					.title {{services.title}}
					.description {{services.desc}}
					.footer
						PraiUiIcon(:icon="'services/'+services.icon" :color="services.gradient.stop_2")
						.link Узнать подробнее
							img(src="/img/arrow.svg")
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Scrollbar } from 'swiper/modules';
	import PraiUiIcon from "/components/ui/PraiUiIcon.vue";
	export default {
		data(){
			return{
				modules: [Scrollbar],
				offsetContainer: 0
			}
		},
		mounted() {
			this.$_ui_services_setWidth()
		},
		components: { Swiper, SwiperSlide, PraiUiIcon },
		watch: {
			'$store.getters.getWidth'(){
				this.$_ui_services_setWidth()
			}
		},
		methods: {
			$_ui_services_setWidth(){
				const width = this.$store.getters.getWidth
				const container = this.$refs.anchorSlider.clientWidth - 20
				this.offsetContainer = (width - container) / 2
			}
		},
	}
</script>

<style lang="scss">
	.list-services-swiper{
		.swiper-slide {
			width: 310px;
			min-height: 355px;
			@media(max-width: 320px){
				width: 292px;
			}
		}
		margin-left: var(--offsetSlider);
		max-width: calc(100% - var(--offsetSlider));
	}
</style>

<style scoped lang="scss">
	.container-slider{
		position: relative;
	}

	.service-card{
		border-radius: 20px;
		min-height: 295px;
		width: calc(100% - 60px);
		position: relative;
		display: flex;
		flex-direction: column;
		color: $white;
		padding: 30px;
		max-width: 355px;
		&:hover{
			.footer .link{
				color: $blue;
				column-gap: 24px;
				img{
					filter: brightness(1) invert(0);
				}
			}
		}
		svg{
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			max-width: 100%;
		}
		.title{
			font-size: 19px;
			font-weight: 600;
		}
		.description{
			font-size: 14px;
			color: $dark-secondary-text;
			margin-top: 16px;
			flex-grow: 1;
		}
		.footer{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.link{
				display: flex;
				align-items: center;
				column-gap: 16px;
				transition: $anim-long;
				img{
					filter: brightness(0) invert(1);
					transform: rotate(-90deg);
					transition: $anim-long;
				}
			}
		}
	}
</style>
