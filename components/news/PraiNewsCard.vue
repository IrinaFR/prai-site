<template lang="pug">
nuxt-link.news-card(:to="`/blog/${news.short_name}`")
	.news-card-image
		.news-card-image-fires
			img(src="/img/news/fire.svg")
			| 6
		img(:src="`${storeRequest.config.app.apiServerImg}photo/news/${news.img}`")
	.news-card-title {{news.name}}
	.news-card-description {{description}}
	hr
	.news-card-date
		img(src="/img/news/calendar.svg")
		| {{getDate}}
	button.btn-outline Читать
		img(src="/img/arrow.svg")
</template>

<script>
	import {useRequestStore} from "/store/request";
	import {useUtilsStore} from "/store/utils";
	export default {
		props: {
			news: Object
		},
		data(){
			return{
				storeRequest: useRequestStore(),
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
