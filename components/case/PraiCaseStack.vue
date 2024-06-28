<template lang="pug">
.container
	.case-stack
		.case-stack-title Стек
		.case-stack-list
			.tile(v-for="icon in stack" )
				.icon
					img(:src="'/img/stack/' + icon.value")
				.title {{icon.name}}
</template>

<script>
	export default {
		props: {
			stack: Array
		},
	}
</script>

<style scoped lang="scss">
	.case-stack{
		margin: 25px 0;
		padding: 24px 0;
		display: flex;
		column-gap: 16px;
		justify-content: space-between;
		border-bottom: solid 1px $light-border;
		&-title{
			min-width: 350px;
			font-size: pxToRem(36);
			line-height: 140%;
			font-weight: 600;
		}
		&-list{
			display: flex;
			flex-wrap: wrap;
			gap: 35px 24px;
		}
		@media(max-width: 850px) {
			&-title{
				min-width: 300px;
				font-size: pxToRem(30);
			}
		}
		@media(max-width: 700px) {
			flex-wrap: wrap;
			margin: 0;
			&-title{
				min-width: auto;
				font-size: pxToRem(26);
				margin-bottom: 24px;
			}
		}
	}
</style>