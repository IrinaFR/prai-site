<template lang="pug">
nuxt-link.info-block(:to="link + item.short_name")
	.image
		img(:src="`${useRuntimeConfig().public.apiServerImg}photo/${link_img}/${item.img}`")
	.info
		.title {{item.name}}
		.link Смотреть
			img(src="/img/arrow.svg")
</template>

<script>
	import {useRuntimeConfig} from "nuxt/app";
	export default {
		methods: {useRuntimeConfig},
		props: {
			link: String,
			link_img: String,
			item: Object
		},
	}
</script>
