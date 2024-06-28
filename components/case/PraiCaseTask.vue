<template lang="pug">
.case-task
	.container
		.title-block.white.center
			.subtitle-card.uppercase(:style="`--brandColor:${brandColor};--brandColorOpacity:${brandColor}33`") Подготовка к работе
			h2.title Задача
			.description(v-html="task" )
</template>

<script>
	export default {
		props: {
			brandColor: String,
			task: String
		},
	}
</script>

<style scoped lang="scss">
	.case-task{
		width: 100%;
		padding: 50px 0;
		background: $bg-block-black;
		.description{
			@include htmlDescriptionWhite;
			font-size: pxToRem(14);
			text-align: center;
			color: $white !important;
		}
	}
</style>