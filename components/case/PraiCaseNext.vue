<template lang="pug">
.container
	.case-slide(v-if="other.length >= 2" )
		router-link.case-slide-item(:to="`/cases/${other[0].short_name}`")
			.case-slide-item-info
				.tip Предыдущий кейс
				.title {{other[0].name}}
			.case-slide-item-preview
				img(:src="`${useRuntimeConfig().public.apiServerImg}photo/case/${other[0].img}`")
		router-link.case-slide-item(:to="`/cases/${other[1].short_name}`")
			.case-slide-item-info
				.tip Следующий кейс
				.title {{other[1].name}}
			.case-slide-item-preview
				img(:src="`${useRuntimeConfig().public.apiServerImg}photo/case/${other[1].img}`")
</template>

<script>
	import {useRuntimeConfig} from "nuxt/app";
	export default {
		methods: {useRuntimeConfig},
		props: {
			other: Array
		},
	}
</script>

<style scoped lang="scss">
	.case-slide{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 16px;
		margin: 50px 0;
		@media(max-width: 760px){
			display: flex;
			flex-direction: column;
			row-gap: 16px;
		}
		&-item{
			display: flex;
			justify-content: space-between;
			background: $bg-block-black;
			transition: $anim-small;
			border-radius: $radius-small;
			overflow: hidden;
			&:last-child{
				flex-direction: row-reverse;
				text-align: end;
				.case-slide-item-preview img{
					border-radius: $radius-small 0 0 $radius-small;
				}
			}

			&-info{
				padding: 20px;
				color: $white;
				.tip{
					text-transform: uppercase;
					font-weight: 500;
				}
				.title{
					line-height: 120%;
					font-weight: 600;
					margin-top: 10px;
				}
			}
			&-preview{
				height: 100%;
				width: 27%;
				min-width: 27%;
				transition: $anim-small;
				background: var(--brandColor, $blue);
				img{
					max-height: 100%;
					height: 100%;
					width: 100%;
					max-width: 100%;
					object-fit: cover;
					border-radius: 0 $radius-small $radius-small 0;
				}
				@media(max-width: 950px){
					min-width: 43%;
				}
			}
			@media(max-width: 450px){
				flex-direction: column;
				&:last-child{
					flex-direction: column;
					text-align: start;
				}
				&-preview{
					height: 200px;
					min-width: auto;
					width: 100%;
					&.min{
						height: 50px;
					}
					img{
						border-radius: 0 !important;
					}
				}
			}
			&:hover{
				box-shadow: -3px 0 0 0 #0072FA inset, 0 3px 0 0 #0072FA inset, 3px 0 0 0 #0072FA inset, 0 -3px 0 0 #0072FA inset;
			}
		}
	}
</style>