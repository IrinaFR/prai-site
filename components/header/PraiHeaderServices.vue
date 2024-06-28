<template lang="pug">
.header-sidebar__content
	.header-sidebar__links
		.semibold.size-14.dark-title-grey.offset-b-24 Услуги
		.links-list
			.links-list__main
				nuxt-link.links-list__item(v-for="service in store.getMainServices" :key="service.icon" :to="service.link")
					PraiUiIcon(:icon="'services/'+service.icon" :color="service.color" size="40")
					.info
						.title {{service.title}}
						.description {{service.desc}}
			.links-list__second
				.links-list__item(v-for="service in store.getOtherServices" :key="service.title" @click="$_header_services_openModal(service.title)")
						.title {{service.title}}
	.header-sidebar__info
		.semibold.size-14.dark-title-grey.offset-b-24 Последние кейсы
		PraiHeaderBlock(v-for="item in storeSite.cases.slice(0, 2)" :key="item.short_name" link_img="case" link="/cases/" :item="item")
</template>

<script setup>
	import PraiUiIcon from "../ui/PraiUiIcon.vue";
	import PraiHeaderBlock from "./PraiHeaderBlock.vue";

	import {useServicesStore} from "/store/services";
	const store = useServicesStore()

	import {useSiteStore} from "/store/site";
	const storeSite = useSiteStore()

	import {useModalStore} from "/store/modal";
	const storeModal = useModalStore()

	const $_header_services_openModal = (link) => {
		storeModal.openModalFeedback('Услуга в меню - ' + link)
	}
</script>
