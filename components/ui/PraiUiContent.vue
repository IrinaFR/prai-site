<template lang="pug">
.content-page
	slot
</template>

<style lang="scss">
	.content-page{
		background: $white;
		border-top-right-radius: 24px;
		border-top-left-radius: 24px;
		width: 100%;
		height: fit-content;
		position: relative;
		z-index: 10;
	}
</style>
