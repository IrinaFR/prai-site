<template lang="pug">
nuxt-link.info-block(:to="link + item.short_name")
	.image
		img(:src="`${storeRequest.config.app.apiServerImg}photo/${link_img}/${item.img}`")
	.info
		.title {{item.name}}
		.link Смотреть
			img(src="/img/arrow.svg")
</template>

<script>
	import {useRequestStore} from "/store/request";
	export default {
		props: {
			link: String,
			link_img: String,
			item: Object
		},
		data(){
			return{
				storeRequest: useRequestStore()
			}
		}
	}
</script>
