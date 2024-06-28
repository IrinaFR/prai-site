<template lang="pug">
.container
	.case-step
		.title Этапы работы
		ol
			li(v-for="step in steps" ) {{step}}
</template>

<script>
	export default {
		props: {
			steps: Array
		},
	}
</script>

<style scoped lang="scss">
	.case-step{
		border-radius: $radius-small;
		padding: 30px;
		background: $bg-block-black url("/public/img/dot.png") repeat;
		background-size: 14px;
		margin: 50px 0;
		.title{
			font-size: pxToRem(36);
			color: $white;
			margin-bottom: 35px;
			font-weight: 600;
		}
		ol{
			padding-left: 20px;
			margin: 0;
			color: $white;
			font-size: pxToRem(19);
			font-weight: 600;
			line-height: 140%;
			li ~ li{
				margin-top: 24px;
			}
		}
	}
</style>