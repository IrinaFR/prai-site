<template lang="pug">
nuxt-link.news-card(:to="`/blog/${news.short_name}`")
	.news-card-image
		//.news-card-image-fires
		//	img(src="/img/news/fire.svg")
		//	| 6
		nuxt-img(
			:src="`${useRuntimeConfig().public.apiServerImg}photo/news/${news.img}`"
			placeholder
			placeholder-class="placeholderImage"
			:alt="news.name")
	.news-card-title {{news.name}}
	.news-card-description {{description}}
	hr
	.news-card-date
		nuxt-img(src="/img/news/calendar.svg" alt="icon" width="24" height="24" )
		| {{getDate}}
	button.btn-outline Читать
		nuxt-img(src="/img/arrow.svg" width="7" height="5" alt="icon")
</template>

<script>
	import {useUtilsStore} from "/store/utils";
	import {useRuntimeConfig} from "nuxt/app";
	export default {
		methods: {useRuntimeConfig},
		props: {
			news: Object
		},
		data(){
			return{
				storeUtils: useUtilsStore()
			}
		},
		computed: {
			description(){
				return this.news.content[0].description.replace(/<[^>]*>/g, '').slice(0, 130)
			},
			getDate(){
				const date = new Date(this.news.date_create)
				return `${date.getDate()} ${this.storeUtils.getMothText(date.getMonth())} ${date.getFullYear()}`
			}
		}
	}
</script>
