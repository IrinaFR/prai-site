<template lang="pug">
.case-header(:style="`--brandColor:${brandColor};`")
	.container
		h1.title(ref="titleCase") {{title}}
		.services
			.service(v-for="service in getListServices" )
				span.bold [
				span  {{service}}
				span.bold ]
		.tags
			.tag(v-for="tag in tags" ) {{tag}}
	.titleBorder.left(ref="leftBorder")
	.titleBorder.top(ref="topBorder")
	.titleBorder.right(ref="rightBorder")
	.titleBorder.bottom(ref="bottomBorder")
</template>

<script>
	import {useServicesStore} from "/store/services";
	export default {
		props: {
			brandColor: String,
			services: Array,
			tags: Array,
			title: String
		},
		mounted() {
			this.$_case_header_animate()
			window.addEventListener('resize', this.$_case_header_animate)
		},
		computed:{
			getListServices(){
				return this.services.map(s => {
					return useServicesStore().getNameServiceById(s)
				})
			}
		},
		methods: {
			$_case_header_animate(){
				this.$nextTick(() => {
					const title = this.$refs.titleCase
					this.$refs.leftBorder.style.left = title.offsetLeft + 'px'
					this.$refs.topBorder.style.top = title.offsetTop + 'px'
					this.$refs.rightBorder.style.left = title.offsetLeft + title.offsetWidth + 'px'
					this.$refs.bottomBorder.style.top = title.offsetTop + title.offsetHeight + 'px'

				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.case-header{
		width: 100%;
		height: 70vh;
		background-image: url("public/img/cases/patterSmallGrid.png");
		background-size: 18.5px;
		background-repeat: repeat;
		background-color: var(--brandColor, $bg-block-black);
		position: relative;
		overflow: hidden;
		.container{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 100%;
			text-align: center;
		}
		.title{
			font-weight: 700;
			line-height: 140%;
			font-size: pxToRem(38);
			color: var(--color, $white);
			margin-bottom: 35px;
			width: fit-content;
			position: relative;
			@media(max-width: 768px) {
				font-size: pxToRem(24);
			}
		}
		.titleBorder{
			position: absolute;
			background: var(--brandColor, $white);
			top: 0;
			left: 0;

			&.left,
			&.right{
				width: 1px;
				height: 0;
				animation: animBorderV 1s ease-in-out forwards;
				animation-delay: .35s;
			}
			&.left{
				animation-delay: .70s;
			}
			&.right{
				animation-delay: .3s;
			}
			&.top,
			&.bottom{
				height: 1px;
				width: 0;
				animation: animBorderH 1s ease-in-out forwards;
			}
			&.top{
				animation-delay: .35s;
			}
			&.bottom{
				animation-delay: .65s;
			}
			@keyframes animBorderV {
				0%{ opacity: 0 }
				50%{ opacity: 1 }
				100%{ height: 100% }
			}
			@keyframes animBorderH {
				0%{ opacity: 0 }
				50%{ opacity: 1 }
				100%{ width: 100% }
			}
		}
		.services{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: 16px;
			font-size: pxToRem(14);
			color: var(--color, $white);
			margin-bottom: 28px;
		}
		.tags{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: 16px;
			font-size: pxToRem(14);
			font-weight: 600;
			color: $white;
			margin-bottom: 28px;
			.tag{
				background: rgba(255, 255, 255, 0.20);
				padding: 4px 15px;
				border-radius: 24px;
			}
		}
	}
</style>

