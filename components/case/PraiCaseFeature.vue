<template lang="pug">
.case-features
	.container
		.title-block.center
			.subtitle-card.uppercase(:style="`--brandColor:${brandColor};--brandColorOpacity:${brandColor}33`") Фичи
			h2.title Особенности
		.case-features-description(v-html="text" )
</template>

<script>
	export default {
		props: {
			brandColor: String,
			text: String
		},
	}
</script>

<style scoped lang="scss">
	.case-features{
		margin-top: 26px;
		padding: 24px 0 50px;
		&-description{
			max-width: 85%;
			text-align: center;
			margin: auto;
			@include htmlDescription;
			@media(max-width: 750px){
				max-width: 100%;
			}
		}
	}
</style>