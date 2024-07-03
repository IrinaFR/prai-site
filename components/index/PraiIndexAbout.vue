<template lang="pug">
.bg-black.mt-50
	.container
		.title-block.white
			.subtitle-card.blue.uppercase О нас
			h2.title Кто мы такие
		.about-grid
			.about-grid-info
				.item
					PraiUiIcon(color="#0019FA" icon="about/test.svg" shadow)
					.desc Разработчики с 20-летним стажем и опытом работы в бизнесе
				.item
					PraiUiIcon(color="#3CC50B" icon="about/test.svg" shadow)
					.desc Многократные призёры и победители всероссийского хакатона «Цифровой прорыв» президентского проекта «Россия страна возможностей»
				.item
					PraiUiIcon(color="#D6A322" icon="about/test.svg" shadow)
					.desc Участники акселерации «Фонда содействия инновациям»
				.item
					PraiUiIcon(color="#9604EF" icon="about/test.svg" shadow)
					.desc Аккредитованные специалисты RPA (Robotic process automation)
			.about-grid-animate
				.axis-icons
					.icon-parent
					.icon-parent.icon-parent-2
						.icon
							img(src="/img/stack/nodejsWhite.svg")
					.icon-parent.icon-parent-3
						.icon
							img(src="/img/stack/vuejs.svg")
					.icon-parent.icon-parent-4
						.icon
							img(src="/img/stack/kubernetes.svg")
					.icon-parent.icon-parent-5
						.icon
							img(src="/img/stack/capacitorjs.svg")
					.icon-parent.icon-parent-6
						.icon
							img(src="/img/stack/figma.svg")
					.icon-parent.icon-parent-7
						.icon
							img(src="/img/stack/docker.svg")
					.icon-parent.icon-parent-8
						.icon
							img(src="/img/stack/tensorflow.svg")
					.icon-parent.icon-parent-9
						.icon
							img(src="/img/stack/redis.svg")
					.icon-logo PRAI
				svg.line.line-1(xmlns="http://www.w3.org/2000/svg" width="184" height="62" viewBox="0 0 184 62" fill="none")
					path(d="M0.833333 59C0.833333 60.4728 2.02724 61.6667 3.5 61.6667C4.97276 61.6667 6.16667 60.4728 6.16667 59C6.16667 57.5272 4.97276 56.3333 3.5 56.3333C2.02724 56.3333 0.833333 57.5272 0.833333 59ZM178.333 3C178.333 4.47276 179.527 5.66667 181 5.66667C182.473 5.66667 183.667 4.47276 183.667 3C183.667 1.52724 182.473 0.333333 181 0.333333C179.527 0.333333 178.333 1.52724 178.333 3ZM4 59V40H3V59H4ZM40.5 3.5H181V2.5H40.5V3.5ZM4 40C4 19.8416 20.3416 3.5 40.5 3.5V2.5C19.7893 2.5 3 19.2893 3 40H4Z" fill="url(#paint0_linear_1_1009)")
					defs
						linearGradient(id="paint0_linear_1_1009" x1="182" y1="2.00001" x2="3" y2="59" gradientUnits="userSpaceOnUse")
							stop( offset="0.395833" stop-color="#211F27")
								animate(attributeName="offset" values="1;0" dur="2s" repeatCount="indefinite")
							stop( offset="0.494792" stop-color="#0019FF")
								animate(attributeName="offset" values="1.1;0.1" dur="2s" repeatCount="indefinite")
							stop( offset="0.588542" stop-color="#211F27")
								animate(attributeName="offset" values="1.2;0.2" dur="2s" repeatCount="indefinite")
				svg.line.line-2(xmlns="http://www.w3.org/2000/svg" width="253" height="206" viewBox="0 0 253 206" fill="none")
					path( d="M247.333 3.5C247.333 4.97276 248.527 6.16667 250 6.16667C251.473 6.16667 252.667 4.97276 252.667 3.5C252.667 2.02724 251.473 0.833333 250 0.833333C248.527 0.833333 247.333 2.02724 247.333 3.5ZM0.833333 202.5C0.833333 203.973 2.02724 205.167 3.5 205.167C4.97276 205.167 6.16667 203.973 6.16667 202.5C6.16667 201.027 4.97276 199.833 3.5 199.833C2.02724 199.833 0.833333 201.027 0.833333 202.5ZM250 3H163V4H250V3ZM125.5 40.5V165.5H126.5V40.5H125.5ZM89 202H3.5V203H89V202ZM125.5 165.5C125.5 185.658 109.158 202 89 202V203C109.711 203 126.5 186.211 126.5 165.5H125.5ZM163 3C142.289 3 125.5 19.7893 125.5 40.5H126.5C126.5 20.3416 142.842 4 163 4V3Z" fill="#211F27")
					path( d="M247.333 3.5C247.333 4.97276 248.527 6.16667 250 6.16667C251.473 6.16667 252.667 4.97276 252.667 3.5C252.667 2.02724 251.473 0.833333 250 0.833333C248.527 0.833333 247.333 2.02724 247.333 3.5ZM0.833333 202.5C0.833333 203.973 2.02724 205.167 3.5 205.167C4.97276 205.167 6.16667 203.973 6.16667 202.5C6.16667 201.027 4.97276 199.833 3.5 199.833C2.02724 199.833 0.833333 201.027 0.833333 202.5ZM250 3H163V4H250V3ZM125.5 40.5V165.5H126.5V40.5H125.5ZM89 202H3.5V203H89V202ZM125.5 165.5C125.5 185.658 109.158 202 89 202V203C109.711 203 126.5 186.211 126.5 165.5H125.5ZM163 3C142.289 3 125.5 19.7893 125.5 40.5H126.5C126.5 20.3416 142.842 4 163 4V3Z" fill="url(#paint0_linear_1_1008)")
					defs
						linearGradient( id="paint0_linear_1_1008" x1="243.5" y1="-11" x2="-6.0724" y2="76.0613" gradientUnits="userSpaceOnUse")
							stop( offset="0.59375" stop-color="#211F27")
								animate(attributeName="offset" values="0;1;0" dur="4s" repeatCount="indefinite")
							stop( offset="0.6875" stop-color="#FF0000")
								animate(attributeName="offset" values="0.1;1.1;0.1" dur="4s" repeatCount="indefinite")
							stop( offset="0.744792" stop-color="#211F27")
								animate(attributeName="offset" values="1;1;1" dur="4s" repeatCount="indefinite")
				svg.line.line-3(xmlns="http://www.w3.org/2000/svg" width="6" height="115" viewBox="0 0 6 115" fill="none")
					path(d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM0.333333 111.5C0.333333 112.973 1.52724 114.167 3 114.167C4.47276 114.167 5.66667 112.973 5.66667 111.5C5.66667 110.027 4.47276 108.833 3 108.833C1.52724 108.833 0.333333 110.027 0.333333 111.5ZM2.5 3V111.5H3.5V3H2.5Z" fill="url(#paint0_linear_1_1010)")
					defs
						linearGradient( id="paint0_linear_1_1010" x1="3" y1="3" x2="3" y2="113.5" gradientUnits="userSpaceOnUse")
							stop(offset="0.369792" stop-color="#211F27")
								animate(attributeName="offset" values="0;1" dur="1.5s" repeatCount="indefinite")
							stop(offset="0.5" stop-color="#05F300")
								animate(attributeName="offset" values="0.1;1.1" dur="1.5s" repeatCount="indefinite")
							stop(offset="0.604167" stop-color="#211F27")
								animate(attributeName="offset" values="0.2;1.2" dur="1.5s" repeatCount="indefinite")
		PraiUiButtons(text="Связаться с нами" @click="storeModal.openModalFeedback('Блок о нас на главной')")
		.about-title
			.status
				img(src="/img/about/it.svg")
				| Компания входит в реестр IT-компаний
			.resident Входим в ассоциацию
				a(href="https://russoft.org/members/?filter=view:main;title:45086;sortingfilter:name;sortingbyfilter:asc;memtype:0;lang:ru;" target="_blank")
					img(src="/img/about/russoft.svg")

</template>

<script setup>
	const PraiUiIcon = defineAsyncComponent(() => import('/components/ui/PraiUiIcon.vue'))
	const PraiUiButtons = defineAsyncComponent(() => import('/components/ui/PraiUiButtons.vue'))
	import {useModalStore} from "/store/modal";
	const storeModal = useModalStore()
</script>

<style scoped lang="scss">
	.about-grid{
		display: flex;
		align-items: center;
		gap: 35px;
		margin-bottom: 50px;
		@media(max-width: 768px){
			flex-direction: column;
		}
		&-info{
			max-width: 30%;
			@media(max-width: 768px){
				max-width: 100%;
			}
			.item{
				display: flex;
				column-gap: 16px;
				color: $white;
				font-size: 14px;
				line-height: 140%;
				& + .item{
					margin-top: 24px;
				}
			}
		}
		&-animate{
			flex-grow: 1;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			@media(max-width: 360px){
				width: calc(100% - 15px);
				margin: 0 -15px;
				padding: 0 15px;
				overflow: hidden;
			}
			.line{
				position: absolute;
				&.line-1{
					top: -5%;
					right: 15%;
					@media(max-width: 1000px){
						right: 7%;
					}
					@media(max-width: 768px){
						transform: rotate(90deg);
						top: 80px;
						right: -110px;
					}
					@media(max-width: 360px){
						top: 80px;
						right: -64px;
					}
				}
				&.line-2{
					left: -110px;
					bottom: 20px;
					@media(max-width: 1020px){
						left: -160px;
					}
					@media(max-width: 768px){
						left: -150px;
						top: 0;
					}
					@media(max-width: 360px){
						left: -124px;
					}

				}
				&.line-3{
					right: 32%;
					bottom: -10%;
					@media(max-width: 1000px){
						right: 29%;
					}
				}
			}
		}
	}
	.about-title{
		margin-top: 50px;
		display: flex;
		align-items: center;
		column-gap: 24px;
		color: $white;
		font-size: 14px;
		font-weight: 600;
		@media(max-width: 478px){
			flex-direction: column;
			row-gap: 16px;
			align-items: start;
		}
		.status{
			border-radius: $radius-small;
			background: $blue;
			padding: 20px;
			width: fit-content;
			max-width: 230px;
			display: flex;
			align-items: center;
			column-gap: 16px;
		}
		.resident{
			display: flex;
			flex-direction: column;
			row-gap: 8px;
		}
	}
	.axis-icons  {
		width: 334px;
		height: 334px;
		border-radius: 50%;
		border: 1px solid #211F27;
		margin: 50px auto;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		.icon-logo{
			position: relative;
			width: 221px;
			height: 221px;
			border: 1px solid #211F27;
			padding: 2px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: $white;
			&::after{
				content: '';
				z-index: 0;
				font-weight: 600;
				display: flex;
				align-items: center;
				font-size: 24px;
				justify-content: center;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) rotate(-45deg);
				border-radius: 50%;
				background: linear-gradient(180deg, #135FD0 0%, #20881E 19.27%, #B06015 47.4%, #8815B0 76.04%, #B01515 100%);
				width: 107px;
				height: 107px;
				animation: gradient 5s ease-in-out infinite;
			}
			&::before{
				z-index: 1;
				content: 'PRAI';
				font-weight: 600;
				display: flex;
				align-items: center;
				font-size: 24px;
				justify-content: center;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				border-radius: 50%;
				background: #0E0C15;
				width: 103px;
				height: 103px;
			}
			@keyframes gradient {
				0% { transform: translate(-50%, -50%) rotate(0) }
				100% { transform: translate(-50%, -50%) rotate(360deg) }
			}
		}
		@media(max-width: 440px){
			width: 260px;
			height: 260px;
			.icon-logo{
				width: 173px;
				height: 173px;
				&::after{
					width: 84px;
					height: 84px;
				}
				&::before{
					width: 80px;
					height: 80px;
				}
			}
		}

	}

	.icon-parent {
		width: 42px;
		height: 42px;
		position: absolute;
		top: -25px;
		left: 150px;
		transform-origin: 21px 190px;
		@media(max-width: 440px){
			left: 110px;
			transform-origin: 21px 155px;
		}
		.icon{
			width: 42px;
			height: 42px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 9px;
			border: 1px solid #211F27;
			background: #0E0C15;
			box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.25);
			img{
				max-width: 29px;
				max-height: 29px;
			}
		}
		&-2 {
			transform: rotate(0);
		}
		&-3 {
			transform: rotate(-45deg);
			.icon{
				position: absolute;
				transform: rotate(45deg);
			}
		}
		&-4 {
			transform: rotate(-90deg);
			.icon{
				position: absolute;
				transform: rotate(90deg);
			}
		}
		&-5 {
			transform: rotate(-135deg);
			.icon{
				position: absolute;
				transform: rotate(135deg);
			}
		}
		&-6 {
			transform: rotate(-180deg);
			.icon{
				position: absolute;
				transform: rotate(180deg);
			}
		}
		&-7 {
			transform: rotate(45deg);
			.icon{
				position: absolute;
				transform: rotate(-45deg);
			}
		}
		&-8 {
			transform: rotate(90deg);
			.icon{
				position: absolute;
				transform: rotate(-90deg);
			}
		}
		&-9 {
			transform: rotate(135deg);
			.icon{
				position: absolute;
				transform: rotate(-135deg);
			}
		}

	}


</style>
