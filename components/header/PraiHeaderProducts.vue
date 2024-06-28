<template lang="pug">
.header-sidebar__content
	.header-sidebar__links
		.semibold.size-14.dark-title-grey.offset-b-24 Услуги
		.links-list
			.links-list__main
				nuxt-link.links-list__item(v-for="service in store.getOurProducts" :key="service.icon" :to="service.link")
					PraiUiIcon(:icon="'services/'+service.icon" :color="service.color" size="40")
					.info
						.title {{service.title}}
						.description {{service.desc}}
	.header-sidebar__info
		.semibold.size-14.dark-title-grey.offset-b-24.withLink Блог
			nuxt-link(to="/blog") Читать все
		PraiHeaderBlock(v-for="news in storeSite.news.slice(0, 2)" link_img="news" link="/blog/" :item="news")
</template>

<script setup>
	import PraiUiIcon from "../ui/PraiUiIcon.vue";
	import PraiHeaderBlock from "./PraiHeaderBlock.vue";
	import {useServicesStore} from "/store/services";
	import {useSiteStore} from "/store/site";
	const store = useServicesStore()
	const storeSite = useSiteStore()
</script>
