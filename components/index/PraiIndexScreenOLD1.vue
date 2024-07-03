<template></template>
<!--<template lang="pug">-->
<!--.main-screen-->
<!--	.main-screen-bg-->
<!--		.main-screen-info-->
<!--			.container-->
<!--				.main-screen-content-->
<!--					h1.title Инновационные нейросети,-->
<!--						br-->
<!--						| веб и мобильные приложения-->
<!--					.subtitle Более 12 лет создаем будущее технологий вместе!-->
<!--					PraiUiButtons(text="Рассчитать стоимость" @click="$_index_screen_openModal")-->
<!--				.main-screen-image-->
<!--					PraiIndexUiSvg-->
<!--		.container-->
<!--			.main-screen-list-->
<!--				div(v-if="storeSite.count_case" ) {{storeSite.count_case}}-->
<!--					.desc выполненых проектов-->
<!--				div(v-if="storeSite.count_hack" ) {{storeSite.count_hack}}-->
<!--					.desc призовых мест в хакатонах-->
<!--</template>-->

<!--<script>-->
<!--	import PraiUiButtons from "/components/ui//PraiUiButtons.vue";-->
<!--	import PraiIndexUiSvg from "/components/index/ui/PraiIndexUiSvg.vue";-->
<!--	import {useModalStore} from "/store/modal";-->
<!--	import {useSiteStore} from "/store/site";-->
<!--	export default {-->
<!--		data(){-->
<!--			return{-->
<!--				modal: useModalStore(),-->
<!--				storeSite: useSiteStore()-->
<!--			}-->
<!--		},-->
<!--		methods: {-->
<!--			$_index_screen_openModal(){-->
<!--				this.modal.openModalFeedback('Первый экран главной страницы')-->
<!--			}-->
<!--		},-->
<!--		components: {-->
<!--			PraiUiButtons, PraiIndexUiSvg-->
<!--		}-->
<!--	}-->
<!--</script>-->

<!--<style lang="scss">-->
<!--	.main-screen{-->
<!--		height: 100vh;-->
<!--		width: 100vw;-->
<!--		max-width: 100%;-->
<!--		@media(max-width: 768px) {-->
<!--			min-height: 100vh;-->
<!--			height: fit-content;-->
<!--			margin-bottom: 50px;-->
<!--		}-->
<!--		&-bg{-->
<!--			background: $bg-block-black url("/public/img/dot.png") repeat;-->
<!--			background-size: 14px;-->
<!--			width: 100%;-->
<!--			height: 90%;-->
<!--			border-bottom-right-radius: 110px;-->
<!--		}-->
<!--		&-info{-->
<!--			background: $white url("/public/img/pattert-light.png") repeat;-->
<!--			background-size: 450px;-->
<!--			width: 100%;-->
<!--			height: 65%;-->
<!--			border-bottom-right-radius: 110px;-->
<!--			padding-top: 160px;-->
<!--			.container{-->
<!--				display: flex;-->
<!--				justify-content: space-between;-->
<!--				align-items: center;-->
<!--				row-gap: 30px;-->
<!--				height: 100%;-->
<!--				@media(max-width: 990px){-->
<!--					height: 70%;-->
<!--				}-->
<!--				@media(max-width: 768px){-->
<!--					flex-direction: column;-->
<!--					align-items: start;-->
<!--				}-->
<!--			}-->
<!--			@media(max-width: 768px){-->
<!--				padding-top: 120px;-->
<!--			}-->
<!--		}-->
<!--		&-content{-->
<!--			position: relative;-->
<!--			z-index: 1;-->
<!--			flex-grow: 1;-->
<!--			.title{-->
<!--				font-size: pxToRem(40);-->
<!--				line-height: 120%;-->
<!--				font-weight: bold;-->
<!--				max-width: 65%;-->
<!--				margin-top: 0;-->
<!--				font-family: 'Grotesk';-->
<!--				@media(max-width: 768px){-->
<!--					max-width: 100%;-->
<!--					font-size: pxToRem(20);-->
<!--				}-->
<!--			}-->
<!--			.subtitle{-->
<!--				font-size: pxToRem(17);-->
<!--				color: $light-secondary-text;-->
<!--				margin: 20px 0 36px;-->
<!--			}-->
<!--		}-->
<!--		&-image{-->
<!--			position: relative;-->
<!--			height: 100%;-->
<!--			@media(max-width: 768px){-->
<!--				margin-bottom: 20px;-->
<!--			}-->
<!--		}-->
<!--		&-list{-->
<!--			display: flex;-->
<!--			gap: 20px 80px;-->
<!--			font-size: pxToRem(43);-->
<!--			font-family: 'Grotesk';-->
<!--			color: $white;-->
<!--			padding: 30px 0;-->
<!--			.desc{-->
<!--				font-size: pxToRem(18);-->
<!--				margin-top: 5px;-->
<!--				font-family: "Avenir Next Cyr", sans-serif;-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--</style>-->
