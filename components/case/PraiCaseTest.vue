<template lang="pug">
.case-test
	.container
		.title-block.center
			.subtitle-card.uppercase(:style="`--brandColor:${brandColor};--brandColorOpacity:${brandColor}33`") Финал
			h2.title Тест
		.case-test-description(v-html="test" )
</template>

<script>
	export default {
		props: {
			brandColor: String,
			test: String
		},
	}
</script>

<style scoped lang="scss">
	.case-test{
		width: 100%;
		margin-top: 50px;
		background: url("/public/img/pattert-light.png") repeat;
		background-size: 450px;
		padding: 33px 0;
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