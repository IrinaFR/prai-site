<template lang="pug">
.integration
	.container
		.title-block.center
			.subtitle-card.blue.uppercase Интеграции
			h2.title
				span.pacifico Интеграция
				| различных сервисов
			.description Мы усилим функциональность ваших продуктов через интеграцию с различными сервисами, включая платежные системы, социальные сети, геолокационные данные и другие приложения. Наша команда обеспечит гладкое взаимодействие, расширяя функциональность продукта и повышая удовлетворение клиентов.

	.list-tiles
		.list-tiles-line
			.group
				.tile(v-for="tile in services.part_1" :title="tile.title")
					img(:src="'/img/integration/'+tile.icon"  :alt="tile.title")
			.group(aria-hidden='true')
				.tile(v-for="tile in services.part_1" :title="tile.title")
					img(:src="'/img/integration/'+tile.icon" :alt="tile.title")
		.list-tiles-line.list-tiles-line--reverse
			.group
				.tile(v-for="tile in services.part_2" :title="tile.title")
					img(:src="'/img/integration/'+tile.icon" :alt="tile.title")
			.group(aria-hidden='true')
				.tile(v-for="tile in services.part_2" :title="tile.title")
					img(:src="'/img/integration/'+tile.icon" :alt="tile.title")
</template>

<script setup>
	const services = {
		part_1: [
			{title: 'Интеграция с Альфа Банк', icon: 'alpha.svg'},
			{title: 'Интеграция с ФИАС', icon: 'fias.svg'},
			{title: 'Интеграция с Calltouch', icon: 'calltouch.svg'},
			{title: 'Интеграция с Ройстат', icon: 'roistat.svg'},
			{title: 'Интеграция с Яндекс.Метрика', icon: 'yandex.svg'},
			{title: 'Интеграция с СДЭК', icon: 'cdek.svg'},
			{title: 'Интеграция с Юкасса', icon: 'ukassa.svg'},
			{title: 'Интеграция с Битрикс24', icon: 'bitrix.svg'},
		],
		part_2: [
			{title: 'Интеграция с 1С', icon: '1c.svg'},
			{title: 'Интеграция с Ozon', icon: 'ozon.svg'},
			{title: 'Интеграция с AmoCRM', icon: 'amo.svg'},
			{title: 'Интеграция с RetailCRM', icon: 'retail.svg'},
			{title: 'Интеграция со Сбер банком', icon: 'sber.svg'},
			{title: 'Интеграция с Тинькофф', icon: 'tinkoff.svg'},
			{title: 'Интеграция с Google Analytics', icon: 'gAnalitics.svg'},
			{title: 'Интеграция с Amazon Web Service', icon: 'aws.svg'},
		]
	}
</script>

<style scoped lang="scss">
	.integration{
		margin: 50px 0;
	}
	.list-tiles {
		display: flex;
		flex-direction: column;
		row-gap: 16px;
		margin: 35px auto auto;
		max-width: 100vw;
		.list-tiles-line {
			display: flex;
			overflow: hidden;
			user-select: none;
			column-gap: 16px;
			.group {
				flex-shrink: 0;
				display: flex;
				column-gap: 16px;
				align-items: center;
				justify-content: space-around;
				min-width: 100%;
				animation: scroll-x 60s linear infinite;
				.tile{
					height: 120px;
					width: 217px;
					background: $white;
					border-radius: $radius-small;
					border: solid 1px $light-border;
					display: flex;
					align-items: center;
					justify-content: center;
					img{
						pointer-events: none;
					}
					@media(max-width: 620px){
						height: 90px;
						width: 147px;
						img{
							max-width: 90px;
							max-height: 50px;
						}
					}
				}
			}
			&--reverse .group{
				animation-direction: reverse;
				animation-delay: -3s;
			}
		}
		@keyframes scroll-x {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(calc(-100% - 16px));
			}
		}
	}


</style>
