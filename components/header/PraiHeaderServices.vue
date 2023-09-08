<template lang="pug">
.header-sidebar__links
	.semibold.size-14.dark-title-grey.offset-b-24 Услуги
	.links-list
		.links-list__main
			.links-list__item(v-for="item in 3" )
				PraiUiIcon(icon="services/ai.svg" color="#0072FA" size="40")
				.info
					.title Нейросети (NLP)
					.description Работаем с естесственным языком. Создаем и внедряем решения в области машинного зрения
		.links-list__second
			.links-list__item(v-for="item in 6" )
				.title Нейросети (NLP)
.header-sidebar__info
	.semibold.size-14.dark-title-grey.offset-b-24 Последние кейсы
	.info-case
		.image
			img()
</template>

<script setup>
	import PraiUiIcon from "../ui/PraiUiIcon.vue";
</script>

<style lang="scss">
	.header-sidebar__links{
		width: 65%;
		.links-list{
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 1fr;
			grid-column-gap: 12px;
			&__main{
				grid-area: 1 / 1 / 2 / 3;
				.links-list__item + .links-list__item{
					margin-top: 16px;
				}
				.title{
					font-size: 14px;
					font-weight: 700;
				}
				.description{
					margin-top: 8px;
					font-size: 12px;
					color: $light-secondary-text
				}
			}
			&__second{
				grid-area: 1 / 3 / 2 / 4;
				.links-list__item + .links-list__item{
					margin-top: 24px;
				}
				.title{
					font-size: 14px;
					font-weight: 600;
				}
			}
			&__item{
				display: flex;
				column-gap: 24px;
			}
		}
	}
	.header-sidebar__info{
		width: 35%;

	}

</style>
