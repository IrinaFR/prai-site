<template lang="pug">
.header-sidebar__content
	.header-sidebar__links
		.semibold.size-14.dark-title-grey.offset-b-24 Услуги
		.links-list
			.links-list__main
				nuxt-link.links-list__item(v-for="service in $store.getters.getOurProducts" :key="service.icon" :to="service.link")
					PraiUiIcon(:icon="'services/'+service.icon" :color="service.color" size="40")
					.info
						.title {{service.title}}
						.description {{service.desc}}
	.header-sidebar__info
		.semibold.size-14.dark-title-grey.offset-b-24.withLink Блог
			nuxt-link(to="/") Читать все
		PraiHeaderBlock
		PraiHeaderBlock
</template>

<script setup>
	import PraiUiIcon from "../ui/PraiUiIcon.vue";
	import PraiHeaderBlock from "./PraiHeaderBlock.vue";
</script>
