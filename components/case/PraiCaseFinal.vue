<template lang="pug">
.container
	.title-block.center
		.subtitle-card.uppercase(:style="`--brandColor:${brandColor};--brandColorOpacity:${brandColor}33`") Результат работы
		h2.title Что сделано
	.case-final(v-for="(item, idx) in array" :id="'finalCase' + idx")
		.title {{item.title}}
		.description.htmlDescription(v-html="item.description" )
</template>

<script>
	export default {
		props: {
			brandColor: String,
			array: Array
		},
	}
</script>

<style scoped lang="scss">
	.case-final{
		margin: 25px 0;
		padding: 24px 0;
		display: flex;
		column-gap: 16px;
		justify-content: space-between;
		border-bottom: solid 1px $light-border;
		position: relative;
		.title{
			position: sticky;
			top: 150px;
			height: fit-content;
			min-width: 350px;
			font-size: pxToRem(36);
			line-height: 140%;
			font-weight: 600;
		}
		.description{
			flex-grow: 1;
			font-weight: 500;
		}
		@media(max-width: 850px) {
			.title{
				min-width: 300px;
				font-size: pxToRem(30);
			}
		}
		@media(max-width: 700px) {
			flex-wrap: wrap;
			margin: 0;
			.title{
				position: relative;
				top: 0;
				min-width: auto;
				font-size: pxToRem(26);
				margin-bottom: 24px;
			}
		}
	}
</style>