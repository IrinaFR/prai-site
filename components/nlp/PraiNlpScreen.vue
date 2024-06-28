<template lang="pug">
.main-screen-nlp
	.container
		.main-screen-nlp-info
			h1.title Революционные решения с нейросетями NLP
			.description Переопределите возможности бизнеса с нашей экспертной разработкой нейросетей NLP. Превратите данные в инсайты с моделями обработки естественного языка.
			PraiUiButtons(text="Заказать разработку" @click="storeModal.openModalFeedback('Главный экран - Нейросети')")
	.main-screen-nlp-bg
		svg.svg-bg.right-grey( width="507" height="774" viewBox="0 0 507 774" fill="none" xmlns="http://www.w3.org/2000/svg")
			circle( cx="445" cy="387" r="408" stroke="url(#paint0_linear_525_775)" stroke-width="73")
			defs
				linearGradient( id="paint0_linear_525_775" x1="445" y1="-21" x2="445" y2="795" gradientUnits="userSpaceOnUse")
					stop( stop-color="#414141" stop-opacity="0")
					stop( offset="0.479167" stop-color="white" stop-opacity="0.06")
						animate(attributeName="stop-opacity" values="0.06;0.06;0;0.06;" dur="4s" repeatCount="indefinite")
					stop( offset="1" stop-color="#FFFAFA" stop-opacity="0.17")
		svg.svg-bg.middle-circle( width="382" height="640" viewBox="0 0 382 640" fill="none" xmlns="http://www.w3.org/2000/svg")
			circle( cx="320" cy="320" r="283" stroke="url(#paint0_linear_525_777)" stroke-width="73" stroke-dasharray="40")
				animate(attributeName="stroke-dashoffset" values="0;80" dur="7s" repeatCount="indefinite")
			defs
				linearGradient( id="paint0_linear_525_777" x1="320" y1="0.499999" x2="320" y2="639" gradientUnits="userSpaceOnUse")
					stop(offset="0" stop-color="#0E0C15" stop-opacity="0")
					stop( offset="0.484375" stop-color="#00113D" stop-opacity="0.58")
					stop( offset="1" stop-color="#00E0FF" stop-opacity="0.81")
		svg.svg-bg.small-circle(width="253" height="382" viewBox="0 0 253 382" fill="none" xmlns="http://www.w3.org/2000/svg")
			circle(cx="191" cy="191" r="154" stroke="url(#paint0_linear_525_776)" stroke-width="73")
			defs
				linearGradient(id="paint0_linear_525_776" x1="191" y1="-0.999999" x2="191" y2="386.5" gradientUnits="userSpaceOnUse")
					stop(stop-color="#0A79FE")
					stop(offset="0.484375" stop-color="#0047FF")
					stop(offset="1" stop-color="#00E0FF" stop-opacity="0.81")
		svg.svg-bg.left-grey-small(width="795" height="774" viewBox="0 0 795 774" fill="none" xmlns="http://www.w3.org/2000/svg")
			circle(cx="704" cy="387" r="667.5" stroke="url(#paint0_linear_525_779)" stroke-width="73")
			defs
				linearGradient(id="paint0_linear_525_779" x1="704" y1="-317" x2="704" y2="1091" gradientUnits="userSpaceOnUse")
					stop(stop-color="#414141" stop-opacity="0")
					stop(offset="0.479167" stop-color="white" stop-opacity="0.06")
						animate(attributeName="stop-opacity" values="0.06;0.06;0;0.06;" dur="4s" repeatCount="indefinite")
					stop(offset="1" stop-color="#5C5C5C" stop-opacity="0")

		svg.svg-bg.left-grey-big(width="1109" height="774" viewBox="0 0 1109 774" fill="none" xmlns="http://www.w3.org/2000/svg")
			circle(cx="704" cy="387" r="667.5" stroke="url(#paint0_linear_525_780)" stroke-width="73")
			defs
				linearGradient(id="paint0_linear_525_780" x1="704" y1="-317" x2="704" y2="1091" gradientUnits="userSpaceOnUse")
					stop(stop-color="#414141" stop-opacity="0")
					stop(offset="0.479167" stop-color="white" stop-opacity="0.06")
						animate(attributeName="stop-opacity" values="0.06;0;0.06;0.06;" dur="4s" repeatCount="indefinite")
					stop(offset="1" stop-color="#5C5C5C" stop-opacity="0")
		svg.svg-bg.main-line(width="1440" height="640" viewBox="0 0 1440 640" fill="none" xmlns="http://www.w3.org/2000/svg")
			path(d="M1786 387C1786 161.668 1603.33 -21 1378 -21C1152.67 -21 970 161.668 970 387V387C970 506.294 873.294 603 754 603H-2" stroke="url(#paintLinearLine)" stroke-width="73")
			defs
				linearGradient(id="paintLinearLine" x1="1266.5" y1="-6.00001" x2="-1.99997" y2="579" gradientUnits="userSpaceOnUse")
					stop(offset="0" stop-color="#00E0FF" stop-opacity="0.92")
					stop(offset="0.484375" stop-color="#0047FF")
					stop(offset="1" stop-color="#0A79FE" stop-opacity="0")
						animate(attributeName="offset" values="1;0.7;1" dur="6s" repeatCount="indefinite")

</template>

<script setup>
	import PraiUiButtons from "/components/ui/PraiUiButtons.vue";
	import {useModalStore} from "/store/modal";
	const storeModal = useModalStore()
</script>

<style lang="scss">
	.main-screen-nlp{
		width: 100vw;
		max-width: 100%;
		height: 84vh;
		max-height: 770px;
		background: #0E0C15 url("public/img/dot.png") repeat;
		background-size: 14px;
		overflow: hidden;
		position: relative;
		&-bg{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
			width: 100%;
			height: 100%;
			max-width: 1900px;
			max-height: 100%;
			@media(max-width: 576px){
				top: 30%;
				transform: rotate(73deg);
			}
			.svg-bg{
				position: absolute;
				animation: fadeSvg 1s cubic-bezier(.645, .045, .355, 1) forwards;
				opacity: 0;
				&.right-grey,
				&.small-circle,
				&.middle-circle,{
					right: 0;
					top: 50%;
					transform: translateY(-50%);
				}
				&.main-line{
					right: 0;
					top: 0;
					animation-delay: .6s;
				}
				&.middle-circle{
					animation-delay: .8s;
				}
				&.small-circle{
					animation-delay: 1s;
				}
				&.left-grey-big{
					left: 25%;
				}
				&.left-grey-small{
					left: 45%;
					animation-delay: .2s;
				}
				&.right-grey{
					animation-delay: .4s;
				}
				@media(max-width: 1100px) {
					&.left-grey-big{
						left: 10%;
					}
					&.left-grey-small{
						left: 25%;
					}
				}
				@media(max-width: 768px){
					&.left-grey-small,
					&.main-line{
						display: none;
					}
					&.left-grey-big{
						left: 0;
					}
				}
			}
		}
		&-info{
			max-width: 70%;
			color: $white;
			padding-top: 20%;
			position: relative;
			z-index: 1;
			@media(max-width: 870px){
				max-width: 100%;
			}
			@media(max-width: 576px){
				padding-top: 30%;
			}
			.title{
				font-size: 51px;
				font-weight: 600;
				line-height: 140%;
				margin-top: 0;
				@media(max-width: 870px){
					font-size: 39px;
				}
				@media(max-width: 576px){
					font-size: 28px;
				}
			}
			.description{
				font-size: 14px;
				margin: 16px 0 35px;
			}
		}
	}
	@keyframes fadeSvg {
		0% { opacity: 0 }
		100% { opacity: 1 }
	}
</style>
