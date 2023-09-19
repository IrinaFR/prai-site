<template lang="pug">
.container
	header.header(:style="styleHeader" @mouseleave="$_prai_header_toggleSidebar('')" :class="{open:sidebar}")
		.header-title
			.header-logo(@mouseenter="$_prai_header_toggleSidebar('')")
				nuxt-link(to="/")
					svg(xmlns="http://www.w3.org/2000/svg" width="86" height="28" viewBox="0 0 86 28" fill="none")
						path(:fill="header.logo" d="M47.2888 5.97334C47.2888 2.67435 49.9037 0 53.1294 0H79.2688C82.495 0 85.1096 2.67435 85.1096 5.97334V22.0266C85.1096 25.3256 82.495 28 79.2688 28H53.1294C49.9037 28 47.2888 25.3256 47.2888 22.0266V5.97334Z" )
						path(:fill="header.colorHeader" d="M19.8554 10.7422V11.9102C19.8554 15.7644 18.1619 18.9179 12.0884 18.9179H11.2709C9.16851 18.9179 7.15375 18.9179 5.25584 18.6259V23.8818H0V4.31836C3.3287 3.93877 7.15381 3.73438 10.6869 3.73438H11.5045C18.0451 3.73438 19.8554 6.88788 19.8554 10.7422ZM10.4533 14.2461C14.5996 14.2461 14.5996 13.0197 14.5996 11.3261C14.5996 9.60339 14.5996 8.40623 10.6577 8.40623C9.43133 8.40623 7.183 8.49384 5.25584 8.66906V13.9833C7.06621 14.2169 8.64292 14.2461 10.4533 14.2461Z")
						path(:fill="header.colorHeader" d="M44.1416 23.8818H39.0609L35.1482 17.75C33.0751 17.75 31.1188 17.75 29.25 17.4579V23.8818H23.9941V4.31836C27.3228 3.93877 31.148 3.73438 34.6811 3.73438H35.4986C42.0392 3.73438 43.8496 6.62512 43.8496 10.1582V11.3261C43.8496 13.7789 43.032 15.9104 40.5209 16.9908L44.1416 22.7138V23.8818ZM34.7394 8.40623C33.3963 8.40623 31.1771 8.49384 29.25 8.66906V12.8153C31.0603 13.0489 32.8415 13.0781 33.8343 13.0781C38.5061 13.0781 38.5937 12.2605 38.5937 10.421C38.5937 9.36981 38.5645 8.40623 34.7394 8.40623Z")
						path(fill-rule="evenodd" clip-rule="evenodd" d="M49.7773 23.9189H54.5076L56.1719 20.123H66.012L67.7057 23.9189H72.4358V22.7509L63.7347 4.35547H58.4786L54.128 13.5532L49.7773 22.7509V23.9189ZM58.1283 15.7431H64.085L61.1066 9.05654L58.1283 15.7431ZM81.3418 4.35547H76.0859V23.9189H81.3418V4.35547Z" fill="white")
			.header-links
				nuxt-link(to="/" @mouseenter="$_prai_header_toggleSidebar('')") Главная
				nuxt-link(to="/" @mouseenter="$_prai_header_toggleSidebar('')") О нас
				nuxt-link(to="/" @mouseenter="$_prai_header_toggleSidebar('')") Кейсы
				span(@mouseenter="$_prai_header_toggleSidebar('services')" ) Услуги
					svg(:stroke="header.colorHeader" width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg")
						path( d="M0.75 1.25L2 2.5L3.25 3.75L5.75 1.25" stroke-linecap="round" stroke-linejoin="round")
				span(@mouseenter="$_prai_header_toggleSidebar('products')") Наши продукты
					svg(:stroke="header.colorHeader" width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg")
						path( d="M0.75 1.25L2 2.5L3.25 3.75L5.75 1.25" stroke-linecap="round" stroke-linejoin="round")
			.header-number(@mouseenter="$_prai_header_toggleSidebar('')")
				a(href="tel:+79952260738") +7 995 226-07-38
				label.header-menu.cross(for="menu")
					input#menu(type="checkbox")
					svg(width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg")
						path(:fill="header.colorHeader" d="M0 1C0 0.447715 0.447715 0 1 0H28.1315C28.9302 0 29.4066 0.890145 28.9635 1.5547L28.2969 2.5547C28.1114 2.8329 27.7992 3 27.4648 3H1C0.447715 3 0 2.55228 0 2V1Z")
						path(:fill="header.colorHeader" d="M0 12C0 11.4477 0.447715 11 1 11H13.1315C13.9302 11 14.4066 11.8901 13.9635 12.5547L13.2969 13.5547C13.1114 13.8329 12.7992 14 12.4648 14H1C0.447715 14 0 13.5523 0 13V12Z")
						path(:fill="header.colorHeader" d="M0 23C0 22.4477 0.447715 22 1 22H22.1315C22.9302 22 23.4066 22.8901 22.9635 23.5547L22.2969 24.5547C22.1114 24.8329 21.7992 25 21.4648 25H1C0.447716 25 0 24.5523 0 24V23Z")
		.header-sidebar(ref="sidebarMain")
				PraiHeaderServices(v-show="sidebar==='services'")
				PraiHeaderProducts(v-show="sidebar==='products'")
</template>

<script>
	import PraiHeaderServices from './PraiHeaderServices.vue'
	import PraiHeaderProducts from './PraiHeaderProducts.vue'
	import {mapState} from "vuex";
	export default {
		data(){
			return{
				sidebar: ''
			}
		},
		components: {
			PraiHeaderServices, PraiHeaderProducts
		},
		computed: {
			...mapState({
				header: state => state.header
			}),
			styleHeader(){
				return `--border:${this.header.border};--bgHeader:${this.header.bgHeader};--colorHeader:${this.header.colorHeader}`
			}
		},
		methods: {
			$_prai_header_toggleSidebar(page){
				this.sidebar = page
				this.$_prai_header_animateHeight()
			},
			$_prai_header_animateHeight(){
				const sidebar = this.$refs.sidebarMain
				if(this.sidebar){
					this.$nextTick(() => {
						sidebar.style.height = `${ sidebar.scrollHeight}px`
					})
				} else {
					sidebar.style.height = "0";
				}
			},
		},
		beforeRouteLeave(to, from, next){
			this.$_prai_header_toggleSidebar('')
			next()
		}
	}
</script>

<style lang="scss">
	.header{
		border: solid 1px var(--border);
		min-height: 78px;
		height: fit-content;
		background: var(--bgHeader);
		border-radius: $radius-big;
		width: calc(100% - 84px);
		max-width: calc(1080px - 64px);
		position: fixed;
		z-index: 100;
		top: 30px;
		margin: auto;
		padding: 0 24px 0 40px;
		backdrop-filter: blur(4px);
		transition: $anim-long;
		&.open{
			border-radius: $radius-small;
		}
		&-title{
			height: 78px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-links{
			display: flex;
			column-gap: 16px;
			font-size: 14px;
			font-weight: 500;
			a, span{
				display: flex;
				align-items: center;
				column-gap: 8px;
				cursor: pointer;
				color: var(--colorHeader);
				text-decoration: none;
				transition: color $anim-small;
				&:hover{
					color: $blue;
					img{
						filter: brightness(1);
					}
				}
				img{
					margin-top: 1px;
					filter: brightness(.1);
					transition: $anim-small;
				}
			}
		}
		&-number{
			display: flex;
			column-gap: 20px;
			align-items: center;
			a{
				font-size: 14px;
				font-weight: 600;
				color: var(--colorHeader);
				text-decoration: none;
				transition: color $anim-small;
				&:hover{
					color: $blue;
				}
			}
		}
		&-menu{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 65px;
			width: 65px;
			border-radius: 50%;
			transition: $anim-small;
			cursor: pointer;
			&:hover{
				background: rgba(0, 114, 250, 0.16);
			}
			input{
				display: none;
			}
		}
		&-sidebar{
			height: 0;
			overflow: hidden;
			transition: height $anim-long;
			&__content{
				display: flex;
				column-gap: 24px;
				margin: 30px 0 40px 0;
				animation: fade 1s ease;
				.header-sidebar__links{
					width: 65%;
					.links-list{
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						grid-template-rows: 1fr;
						grid-column-gap: 12px;
						&__main{
							grid-area: 1 / 1 / 2 / 3;
							.links-list__item + .links-list__item{
								margin-top: 16px;
							}
							.links-list__item:hover{
								color: $blue;
							}
							.title{
								font-size: 14px;
								font-weight: 700;
							}
							.description{
								margin-top: 8px;
								font-size: 12px;
								color: $dark-secondary-text
							}
						}
						&__second{
							grid-area: 1 / 3 / 2 / 4;
							.links-list__item + .links-list__item{
								margin-top: 24px;
							}
							.links-list__item:hover{
								color: $blue;
							}
							.title{
								font-size: 14px;
								font-weight: 600;
							}
						}
						&__item{
							display: flex;
							column-gap: 24px;
							text-decoration: none;
							color: var(--colorHeader);
							transition: $anim-small;
						}
					}
				}
				.header-sidebar__info{
					width: 35%;
				}
				.withLink{
					display: flex;
					column-gap: 16px;
					a{
						font-weight: 600;
						text-decoration: none;
						color: $blue;
					}
				}
			}
			@keyframes fade {
				0% {opacity: 0}
				100% {opacity: 1}
			}

			.info-block{
				display: flex;
				column-gap: 12px;
				border-radius: $radius-small;
				border: solid 1px rgba(146, 146, 146, 0.31);
				padding: 20px;
				text-decoration: none;
				transition: $anim-small;
				& + .info-block{
					margin-top: 16px;
				}
				.image{
					display: flex;
					align-items: center;
					justify-content: center;
					background: $text-black;
					border-radius: 14px;
					width: 150px;
					img{
						height: 24px;
					}
				}
				.info{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.title{
						font-size: 14px;
						color: var(--colorHeader);
					}
					.link{
						color: $blue;
						display: flex;
						column-gap: 8px;
						align-items: center;
						font-size: 12px;
						font-weight: 600;
						transition: $anim-small;
						img{
							transform: rotate(-90deg);
						}
					}
				}
				&:hover{
					border: solid 1px $blue;
					.link{
						column-gap: 15px;
					}
				}
			}
		}
	}

</style>
