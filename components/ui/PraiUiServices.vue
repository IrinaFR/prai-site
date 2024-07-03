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
			swiper-slide(v-for="(services, idx) in storeServices.getOtherServicesWithoutIntegr" @click="$_ui_services_openFeedback(services.title)")
				.service-card-bg(:style="`--stop_1:${services.gradient.stop_1};--stop_2:${services.gradient.stop_2};`")
				.service-card
					.title {{services.title}}
					.description {{services.desc}}
					.footer-services
						PraiUiIcon(:icon="'services/'+services.icon" :color="services.gradient.stop_2" shadow)
						.link Узнать подробнее
							img(src="/img/arrow.svg")
</template>

<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Scrollbar } from 'swiper/modules';
	import PraiUiIcon from "/components/ui/PraiUiIcon.vue";
	import {useServicesStore} from "/store/services";
	import {useUtilsStore} from "/store/utils";
	import {useModalStore} from "/store/modal";

	export default {
		data(){
			return{
				modules: [Scrollbar],
				offsetContainer: 0,
				storeServices: useServicesStore(),
				storeUtils: useUtilsStore(),
				storeModal: useModalStore(),
				l: false
			}
		},
		mounted() {
			this.$_ui_services_setWidth()
			this.$nextTick(() => this.l = true)
		},
		components: {
			Swiper, SwiperSlide,
			PraiUiIcon: defineAsyncComponent(() => import('/components/ui/PraiUiIcon.vue')),
		},
		watch: {
			'storeUtils.getWidth'(){
				this.$_ui_services_setWidth()
			}
		},
		methods: {
			$_ui_services_setWidth(){
				const width = this.storeUtils.getWidth
				const container = this.$refs.anchorSlider.clientWidth - 20
				this.offsetContainer = (width - container) / 2
			},
			$_ui_services_openFeedback(services){
				this.storeModal.openModalFeedback(services)
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
		border-radius: 24px 5px 24px 24px;
		min-height: 295px;
		width: calc(100% - 64px);
		position: relative;
		display: flex;
		flex-direction: column;
		color: $white;
		padding: 30px;
		max-width: 355px;
		background: $bg-block-black;
		margin: 2px;
		cursor: pointer;
		transition: $anim-small;
		&:hover{
			background: getColorTransparent($bg-block-black, 0.9);
			.footer-services .link{
				column-gap: 24px;
			}
		}
		&-bg{
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			max-width: 100%;
			background: linear-gradient(180deg, var(--stop_1) 0%, var(--stop_2) 40.63%, #211F2745 100%);
			border-radius: 24px 5px 24px 24px;
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
		.footer-services{
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
