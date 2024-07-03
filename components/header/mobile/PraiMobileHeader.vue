<template lang="pug">
header.header-mobile(:class="{opened:openMenu}")
	.header-mobile-title
		.header-mobile-logo
			nuxt-link(to="/")
				svg(width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg")
					path(:fill="logo" d="M22.2251 2.80736C22.2251 1.2569 23.454 0 24.9701 0H37.2551C38.7714 0 40.0002 1.2569 40.0002 2.80736V10.3521C40.0002 11.9026 38.7714 13.1595 37.2551 13.1595H24.9701C23.454 13.1595 22.2251 11.9026 22.2251 10.3521V2.80736Z")
					path(d="M9.33169 5.04891V5.59784C9.33169 7.40929 8.53574 8.89137 5.68133 8.89137H5.29711C4.30903 8.89137 3.36213 8.89137 2.47015 8.75413V11.2243H0V2.02983C1.56443 1.85143 3.36216 1.75537 5.02263 1.75537H5.40688C8.48085 1.75537 9.33169 3.23746 9.33169 5.04891ZM4.91285 6.69569C6.86154 6.69569 6.86154 6.1193 6.86154 5.32336C6.86154 4.5137 6.86154 3.95106 5.00891 3.95106C4.43256 3.95106 3.37588 3.99223 2.47015 4.07458V6.57217C3.32099 6.68195 4.06201 6.69569 4.91285 6.69569Z" fill="#010004")
					path(d="M20.7458 11.2243H18.3579L16.5191 8.34244C15.5447 8.34244 14.6253 8.34244 13.747 8.2052V11.2243H11.2769V2.02983C12.8413 1.85143 14.639 1.75537 16.2995 1.75537H16.6837C19.7577 1.75537 20.6085 3.11397 20.6085 4.77443V5.32336C20.6085 6.4761 20.2243 7.47789 19.0441 7.98564L20.7458 10.6754V11.2243ZM16.3269 3.95106C15.6957 3.95106 14.6527 3.99223 13.747 4.07458V6.02324C14.5978 6.13302 15.435 6.14676 15.9015 6.14676C18.0972 6.14676 18.1384 5.76251 18.1384 4.89796C18.1384 4.40392 18.1247 3.95106 16.3269 3.95106Z" fill="#010004")
					path(fill-rule="evenodd" clip-rule="evenodd" d="M23.3945 11.2413H25.6177L26.3999 9.45733H31.0245L31.8205 11.2413H34.0436V10.6924L29.9542 2.04688H27.484L25.4393 6.36965L23.3945 10.6924V11.2413ZM27.3193 7.39887H30.1189L28.7191 4.25629L27.3193 7.39887ZM38.2293 2.04688H35.7591V11.2413H38.2293V2.04688Z" fill="white")
		.header-mobile-number
			a(href="tel:+79952260738") +7 995 226-07-38
			label.header-menu(for="menuMobile")
				input#menuMobile(type="checkbox" v-model="openMenu")
				svg(width="30" height="30" viewBox="35 35 40 40" xmlns="http://www.w3.org/2000/svg")
					path.line-1(d="M0 40h62c13 0 6 28-4 18L35 35")
					path.line-2(d="M0 50h50")
					path.line-3(d="M0 60h62c13 0 6-28-4-18L35 65")
	.header-mobile-sidebar
		.links
			nuxt-link(to="/") Главная
			//hr
			//nuxt-link(to="/") О нас
			hr
			nuxt-link(to="/cases") Кейсы
			hr
			span(@click="showServices=true") Услуги
				img(src="/img/arrow.svg")
			hr
			span(@click="showProducts=true") Наши продукты
				img(src="/img/arrow.svg")
			hr
			nuxt-link(to="/blog") Блог
			hr
			nuxt-link(to="/contacts") О нас
		.contacts
			button.btn Обсудить проект
			.contacts-links
				img(src="/img/contacts/vk.svg" alt="Вконтакте")
				img(src="/img/contacts/behance.svg" alt="behance")
				img(src="/img/contacts/telegram.svg" alt="telegram")
PraiHeaderMobileOffcanvas(v-if="showServices" @close="showServices=false, openMenu=false" @back="showServices=false" ref="offcanvasServices")
	nuxt-link.list-mobile-services-item(:to="link.link" v-for="link in store.getMainServices")
		.title {{link.title}}
		.description {{link.desc}}
	.list-mobile-services-item(v-for="link in store.getOtherServices" @click="$_mobile_header_openModal(link.title)")
		.title {{link.title}}
PraiHeaderMobileOffcanvas(v-if="showProducts" @close="showProducts=false, openMenu=false" @back="showProducts=false" ref="offcanvasProducts")
	nuxt-link.list-mobile-services-item(to="/" v-for="link in store.getOurProducts")
		.title {{link.title}}
		.description {{link.desc}}

</template>

<script>
	import {useServicesStore} from "/store/services";
	import {useModalStore} from "/store/modal";
	export default {
		components: {
			PraiHeaderMobileOffcanvas: defineAsyncComponent(() => import('/components/header/mobile/PraiHeaderMobileOffcanvas.vue'))
		},
		data(){
			return{
				logo: '#3843FF',
				border: 'rgba(0, 114, 250, 0.18)',
				bgHeader: 'rgba(255, 255, 255, 0.50)',
				colorHeader: '#010004',
				openMenu: false,
				showServices: false,
				showProducts: false,
				store: useServicesStore(),
				storeModal: useModalStore()
			}
		},
		watch: {
			'$route.path'(){
				if(this.showServices) this.$refs.offcanvasServices.$_header_mobile_offcanvas_toggle('close')
				if(this.showProducts) this.$refs.offcanvasProducts.$_header_mobile_offcanvas_toggle('close')
			}
		},
		methods: {
			$_mobile_header_openModal(link){
				this.$refs.offcanvasServices.$_header_mobile_offcanvas_toggle('close')
				this.storeModal.openModalFeedback('Услуга в меню - ' + link)
			}
		}
	}
</script>


<style scoped lang="scss">
	.header-mobile{
		position: fixed;
		width: calc(100vw - 40px);
		padding: 0 20px;
		top: 0;
		left: 0;
		z-index: 100;
		height: 54px;
		background: $white;
		border: solid 1px $light-border;
		border-bottom-left-radius: $radius-small;
		border-bottom-right-radius: $radius-small;
		overflow: hidden;
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
		&.opened{
			height: 100vh;
			background: rgba(0, 113, 250, .6);
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
			.header-mobile-sidebar{
				opacity: 1;
			}
		}
		&-title{
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			max-height: 54px;
			.logo{
				width: 40px;
			}
		}
		&-number{
			font-size: 12px;
			font-weight: 600;
			display: flex;
			column-gap: 20px;
			align-items: center;
			height: 100%;
			a{
				text-decoration: none;
				color: $text-black;
				transition: $anim-small;
				&:hover{
					color: $blue;
				}
			}
		}
		&-sidebar{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: calc(100% - 54px);
			opacity: 0;
			transition: $anim-long;
			.links{
				width: 100%;
				display: flex;
				flex-direction: column;
				row-gap: 8px;
				a, span{
					text-decoration: none;
					font-size: 14px;
					font-weight: 500;
					display: flex;
					column-gap: 4px;
					width: 100%;
					align-items: center;
					line-height: 26px;
					color: $text-black;
					img{
						transform: rotate(-90deg);
						filter: brightness(0);
					}
				}
				hr{
					width: 100%;
					height: 1px;
					border: none;
					background: $light-border;
				}
			}
		}
		.contacts{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 20px;
			&-links{
				display: flex;
				column-gap: 30px;
				align-items: center;
				margin-top: 30px;
			}
		}
	}
	.header-menu{
		label {
			display: block;
			cursor: pointer;
			width: 50vw;
			height: 50vw;
			max-width: 30px;
			max-height: 30px;
		}
		svg{
			margin-top: 10px;
		}
		path {
			fill: none;
			stroke: $text-black;
			stroke-width: 3;
			stroke-linecap: round;
			stroke-linejoin: round;
			--length: 24;
			--offset: -38;
			stroke-dasharray: var(--length) var(--total-length);
			stroke-dashoffset: var(--offset);
			transition: all .8s cubic-bezier(.645, .045, .355, 1);
		}
		input{
			display: none;
		}
		.line-1,
		.line-3 {
			--total-length: 126.64183044433594;
		}
		.line-2 {
			--total-length: 70;
		}
		input:checked + svg {
			.line-1,
			.line-3 {
				--offset: -93.1149185097;
			}
			.line-2 {
				--offset: -50;
				--length: 0;
			}
		}
	}
	.list-mobile-services-item{
		display: block;
		padding-bottom: 8px;
		border-bottom: solid 1px $light-border;
		text-decoration: none;
		&:last-child{
			border: none;
		}
		& + &{
			margin-top: 8px;
		}
		.title{
			font-size: 14px;
			font-weight: 600;
			color: $text-black;
		}
		.description{
			font-size: 12px;
			color: $light-secondary-text;
			margin-top: 8px;
		}
	}
</style>
