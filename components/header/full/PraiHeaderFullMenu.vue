<template lang="pug">
.full-menu(:class="{opened:show}")
	.full-menu-content
		.full-menu-content-info
		.full-menu-content-close
			span(@click="swiperRef?.slidePrev()") Back
			span(@click="swiperRef?.slideNext()") Next
		.full-menu-content-slider
			.full-menu-content-wheel(:style="`&#45;&#45;width:${wheel.width}%`")
			swiper.menu-swiper(
				:direction="'vertical'"
				:modules="modules"
				:slidesPerView="5"
				:loop="true"
				:loopedSlides="3"
				:centeredSlides="true"
				mousewheel
				class="menu-swiper"
				@swiper="$_header_full_menu_getSwiperRef")
				swiper-slide.menu-swiper-item(v-for="(link, idx) in links" :class="'idx-'+idx" ref="link")
					.point
					nuxt-link.link(:to="link.url") {{swiperRef?.realIndex}} 0{{idx+1}} {{link.title}}
						span(v-if="link.category") {{link.category}}
</template>

<script>
	import {Swiper, SwiperSlide} from "swiper/vue";
	import { Mousewheel } from 'swiper/modules';

	export default {
		components: {Swiper, SwiperSlide},
		data(){
			return{
				swiperRef: null,
				modules: [Mousewheel],
				show: false,
				wheel: {
					height: 100 , //проценты
					width: 0
				},
				links: [
					{
						title: 'Главная',
						url: '/',
						category: ''
					},
					{
						title: 'Разработка NLP',
						url: '/',
						category: 'Услуги'
					},
					{
						title: 'Разработка сайтов',
						url: '/',
						category: 'Услуги'
					},
					{
						title: 'Разработка приложений',
						url: '/',
						category: 'Услуги'
					},
					{
						title: 'Кейсы',
						url: '/',
						category: 'Наши работы'
					},
					{
						title: 'Контакты',
						url: '/',
						category: ''
					},
					{
						title: 'Вакансии',
						url: '/',
						category: ''
					},
					// // дублирующие слайды, т.к. показывается 5, переносится в цикле 3,
					// // а всего их меньше 8 и чтобы не было проскоков
					// {
					// 	title: 'Главная',
					// 	url: '/',
					// 	category: ''
					// },
				]
			}
		},
		mounted() {
			// this.$_header_full_menu_toggle()
			this.$_header_full_menu_createWheel()
		},
		methods: {
			$_header_full_menu_toggle(){
				document.getElementById('menuFullToggle').addEventListener('click', () => {
					this.show = true
				})
			},
			$_header_full_menu_createWheel(){
				this.wheel.width = window.innerHeight * 100 / window.innerWidth
			},
			$_header_full_menu_getSwiperRef(swiper){
				this.swiperRef = swiper
			}
		}
	}
</script>

<style lang="scss">
  .full-menu{
      height: 0;
      width: 0;
      position: fixed;
	  z-index: 150;
	  overflow: hidden;
      top: 0;
	  right: 0;
	  border-bottom-left-radius: 200%;
	  background: rgba(0, 113, 250, .6);
	  transition: cubic-bezier(0.77, 0, 0.175, 1) 0.6s;
	  &::before,
	  &::after{
		  content: "";
		  position: fixed;
		  width: 100vw;
		  height: 100vh;
		  top: 0;
		  right: 0;
		  background: rgba(0, 113, 250, .2);
		  border-bottom-left-radius: 200%;
		  z-index: -1;
		  -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
		  transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
		  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
		  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
		  -webkit-transform: translateX(100%) translateY(-100%);
		  transform: translateX(100%) translateY(-100%);
	  }
	  &::after{
		  background: #fff;
		  -webkit-transition-delay: 0s;
		  transition-delay: 0s;
	  }
	  &::before{
		  -webkit-transition-delay: .2s;
		  transition-delay: .2s;
	  }
	  &-content{
		  opacity: 0;
		  transition: opacity .7s linear;
		  transition-delay: 1s;

		  -webkit-box-sizing: border-box;
		  -moz-box-sizing: border-box;
		  box-sizing: border-box;
		  position: relative;
		  width: 100%;
		  height: 100%;
		  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		  transform: translate3d(0, 0, 0);
		  &-close{
			  position: absolute;
			  z-index: 1000;
		  }
		  &-slider{
			  display: flex;
			  .menu-swiper{
				  display: flex;
				  flex-direction: column;
				  height: 100vh;
				  flex-grow: 1;
				  overflow: inherit;
				  .swiper-wrapper{
					  height: 100%;
					  transition: $anim-small;
				  }
			  }
			  .menu-swiper-item{
				  height: 220px;
				  display: flex;
				  align-items: center;
				  column-gap: 20px;
				  white-space: nowrap;
				  text-decoration: none;
				  color: $text-black;
				  font-size: 38px;
				  font-weight: 700;
				  text-transform: uppercase;
				  transform-origin: left center;
				  //transition: .15s cubic-bezier(.4, 0, .2, 1);
				  transition: $anim-small;
				  //&:nth-child(2){
					//  transform: translateX(-8.5%) rotate(-18deg);
				  //}
				  //&:nth-child(4){
					//  transform: translateX(-8.5%) rotate(18deg);
				  //}
				  //&:nth-child(1){
					//  transform: translateX(-36%) rotate(-45deg);
				  //}
				  //&:nth-child(5){
					//  transform: translateX(-36%) rotate(45deg);
				  //}
				  &.swiper-slide-active{
					  transform: translateX(0);
				  }
				  .point{
					  width: 16px;
					  min-width: 16px;
					  height: 16px;
					  background: $blue;
					  border-radius: 50%;
				  }
				  .link{
					  display: flex;
					  flex-direction: column;
					  row-gap: 5px;
					  span{
						  font-size: 20px;
						  font-weight: 400;
						  text-transform: none;
					  }
				  }
			  }
		  }
		  &-wheel{
			  width: calc(var(--width) + 110px);
			  height: calc(100vh + 110px);
			  margin-top: -55px;
			  margin-left: -20%;
			  border: solid 1px red;
			  border-radius: 50%;
		  }
	  }
	  &.opened{
		  height: 100vh;
		  width: 100vw;
		  border-radius: 0;
		  &::after,
		  &::before{
			  -webkit-transform: translateX(0%) translateY(0%);
			  transform: translateX(0%) translateY(0%);
			  border-radius: 0;
		  }
		  &::after{
			  -webkit-transition-delay: .1s;
			  transition-delay: .1s;
		  }
		  &::before{
			  -webkit-transition-delay: 0s;
			  transition-delay: 0s;
		  }
		  .full-menu-content{
			  opacity: 1;
		  }
	  }

  }
</style>
