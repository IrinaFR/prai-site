<template lang="pug">
.container
	header.header(:style="styleHeader" @mouseleave="$_prai_header_toggleSidebar('')" :class="{open:sidebar}")
		.header-title
			.header-logo(@mouseenter="$_prai_header_toggleSidebar('')")
				nuxt-link(to="/")
					svg(xmlns="http://www.w3.org/2000/svg" width="86" height="28" viewBox="0 0 86 28" fill="none")
						path(:fill="logo" d="M47.2888 5.97334C47.2888 2.67435 49.9037 0 53.1294 0H79.2688C82.495 0 85.1096 2.67435 85.1096 5.97334V22.0266C85.1096 25.3256 82.495 28 79.2688 28H53.1294C49.9037 28 47.2888 25.3256 47.2888 22.0266V5.97334Z" )
						path(d="M19.8554 10.7422V11.9102C19.8554 15.7644 18.1619 18.9179 12.0884 18.9179H11.2709C9.16851 18.9179 7.15375 18.9179 5.25584 18.6259V23.8818H0V4.31836C3.3287 3.93877 7.15381 3.73438 10.6869 3.73438H11.5045C18.0451 3.73438 19.8554 6.88788 19.8554 10.7422ZM10.4533 14.2461C14.5996 14.2461 14.5996 13.0197 14.5996 11.3261C14.5996 9.60339 14.5996 8.40623 10.6577 8.40623C9.43133 8.40623 7.183 8.49384 5.25584 8.66906V13.9833C7.06621 14.2169 8.64292 14.2461 10.4533 14.2461Z" fill="#010004")
						path(d="M44.1416 23.8818H39.0609L35.1482 17.75C33.0751 17.75 31.1188 17.75 29.25 17.4579V23.8818H23.9941V4.31836C27.3228 3.93877 31.148 3.73438 34.6811 3.73438H35.4986C42.0392 3.73438 43.8496 6.62512 43.8496 10.1582V11.3261C43.8496 13.7789 43.032 15.9104 40.5209 16.9908L44.1416 22.7138V23.8818ZM34.7394 8.40623C33.3963 8.40623 31.1771 8.49384 29.25 8.66906V12.8153C31.0603 13.0489 32.8415 13.0781 33.8343 13.0781C38.5061 13.0781 38.5937 12.2605 38.5937 10.421C38.5937 9.36981 38.5645 8.40623 34.7394 8.40623Z" fill="#010004")
						path(fill-rule="evenodd" clip-rule="evenodd" d="M49.7773 23.9189H54.5076L56.1719 20.123H66.012L67.7057 23.9189H72.4358V22.7509L63.7347 4.35547H58.4786L54.128 13.5532L49.7773 22.7509V23.9189ZM58.1283 15.7431H64.085L61.1066 9.05654L58.1283 15.7431ZM81.3418 4.35547H76.0859V23.9189H81.3418V4.35547Z" fill="white")
			.header-links
				nuxt-link(to="/" @mouseenter="$_prai_header_toggleSidebar('')") Главная
				nuxt-link(to="/" @mouseenter="$_prai_header_toggleSidebar('')") О нас
				nuxt-link(to="/" @mouseenter="$_prai_header_toggleSidebar('')") Кейсы
				span(@mouseenter="$_prai_header_toggleSidebar('services')" ) Услуги
					img(src="/img/arrow.svg")
				span(@mouseenter="$_prai_header_toggleSidebar('products')") Наши продукты
					img(src="/img/arrow.svg")
			.header-number(@mouseenter="$_prai_header_toggleSidebar('')")
				a(href="tel:+79952260738") +7 995 226-07-38
				label.header-menu.cross(for="menu")
					input#menu(type="checkbox")
					img(src="/img/header/menu.svg")
		.header-sidebar(ref="sidebarMain")
			PraiHeaderServices(v-show="sidebar==='services'")
			PraiHeaderProducts(v-show="sidebar==='products'")
</template>

<script>
	import PraiHeaderServices from './PraiHeaderServices.vue'
	import PraiHeaderProducts from './PraiHeaderProducts.vue'
	export default {
		data(){
			return{
				logo: '#3843FF',
				border: 'rgba(0, 114, 250, 0.18)',
				bgHeader: 'rgba(255, 255, 255, 0.50)',
				colorHeader: '#010004',
				sidebar: ''
			}
		},
		components: {
			PraiHeaderServices, PraiHeaderProducts
		},
		computed: {
			styleHeader(){
				return `--border:${this.border};--bgHeader:${this.bgHeader};--colorHeader:${this.colorHeader}`
			}
		},
		methods: {
			$_prai_header_toggleSidebar(page){
				this.sidebar = page
				console.log(this.sidebar)
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

<style scoped lang="scss">
	.header{
		border: solid 1px var(--border);
		min-height: 78px;
		height: fit-content;
		background: var(--bgHeader);
		border-radius: $radius-big;
		width: calc(100% - 64px);
		max-width: 1080px;
		position: fixed;
		top: 30px;
		margin: auto;
		padding: 0 24px 0 40px;
		backdrop-filter: blur(3.5px);
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
			background: var(--bgHeader);
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
		}
	}

</style>
