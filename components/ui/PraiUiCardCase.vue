<template lang="pug">
nuxt-link.card-case(:to="`/cases/${data?.short_name}`")
	.card-case-image
		img(:src="`${useRuntimeConfig().public.apiServerImg}photo/case/${data?.img}`")
	.card-case-info
		.title(:style="`--serviceColor:${serviceColor}`") {{data?.name}}
		.list-services(v-if="data" )
			.item(v-for="service in data.cat" :style="`--serviceColor:${storeService.getColorServiceById(service)}`")
				span.bracket [
				|  {{storeService.getNameServiceById(service)}}
				span.bracket  ]
		.list-finals
			.subtitle-card(v-for="tag in (data?.tags ? data.tags : data?.data.tags)" :style="`--brandColor:${serviceColor};--brandColorOpacity:${serviceColor}33`") {{tag}}
</template>

<script>
	import {useServicesStore} from "/store/services";
	import {useRuntimeConfig} from "nuxt/app";
	export default {
		methods: {useRuntimeConfig},
		props: {
			data: Object
		},
		data(){
			return{
				storeService: useServicesStore()
			}
		},
		computed: {
			serviceColor(){
				if(this.data?.cat.length) return this.storeService.getColorServiceById(this.data.cat[0])
			}
		}
	}
</script>

<style lang="scss">
	.card-case{
		display: block;
		border-radius: 24px;
		background: $bg-block-black;
		border: solid 1px $dark-border;
		max-width: 534px;
		width: 100%;
		min-height: fit-content;
		overflow: hidden;
		position: relative;
		z-index: 1;
		flex-grow: 1;
		&:hover{
			.title{
				color: var(--serviceColor, $blue);
			}
		}
		@media(max-width: 768px){
			max-width: 100%;
			min-height: fit-content;
			&:hover{
				.title{
					color: $white;
				}
			}
		}
		&-image{
			width: 100%;
			height: 310px;
			@media(max-width: 930px){
				height: 260px;
			}
			@media(max-width: 760px){
				height: 220px;
			}
			@media(max-width: 600px){
				height: 330px;
			}
			@media(max-width: 495px){
				height: 290px;
			}
			@media(max-width: 410px){
				height: 230px;
			}
			@media(max-width: 345px){
				height: 190px;
			}
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				pointer-events: none;
			}
		}
		&-info{
			padding: 30px;
			width: calc(100% - 60px);
			@media(max-width: 600px) {
				padding: 20px;
				width: calc(100% - 40px);
			}
			.title{
				font-size: 19px;
				font-weight: 600;
				color: $white;
				margin-bottom: 16px;
				line-height: 140%;
				transition: $anim-small;
				@media(max-width: 768px){
					font-size: pxToRem(16);
				}
			}
			.list-services{
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 8px 16px;
				margin-bottom: 16px;
				.item{
					font-size: 14px;
					color: $dark-secondary-text;
					span.bracket{
						font-weight: 700;
						color: var(--serviceColor, #fff);
					}
				}
			}
			.list-finals{
				display: flex;
				flex-wrap: wrap;
				gap: 8px 16px;
			}
		}
	}
</style>
