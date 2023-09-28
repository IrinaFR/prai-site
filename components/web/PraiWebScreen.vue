<template lang="pug">
.main-screen-web
	.main-screen-web-bg
	.container
		.main-screen-web-info
			.title Веб-приложения нового уровня
			.desc Передовая разработка веб-приложений с использованием передовых технологий. Мы создаем крупные и сложные веб-проекты, поднимающие ваш бизнес на новый уровень.
			PraiUiButtons(text="Заказать разработку" class="green")
</template>

<script setup>
	import PraiUiButtons from "/components/ui/PraiUiButtons.vue";
</script>

<style scoped lang="scss">
	.main-screen-web{
		width: 100%;
		overflow: hidden;
		height: 100vh;
		background: #060606;
		position: relative;
		display: flex;
		align-items: center;
		color: $white;
		&-info{
			max-width: 50%;
			.title{
				font-size: 56px;
				font-weight: 700;
				line-height: 120%;
			}
			.desc{
				font-size: 14px;
				margin: 16px 0 35px;
				line-height: 140%;
			}
		}
	}
</style>
