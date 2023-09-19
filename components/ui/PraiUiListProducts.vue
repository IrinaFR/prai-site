<template lang="pug">
.list-products-bg
	.container
		.title-block
			.subtitle-card.uppercase(:class="$props.class") {{$props.subtitle}}
			h2.title Что мы можем
		.list-products
			.list-products-item(v-for="product in products")
				.head
					PraiUiIcon(:color="product.color" :icon="'about/' + product.icon")
					| {{product.title}}
				.desc {{product.desc}}
</template>

<script>
	import PraiUiIcon from "/components/ui/PraiUiIcon.vue";
	export default {
		components: {
			PraiUiIcon
		},
		props: {
			products: Array,
			subtitle: String,
			class: {
				type: String,
				default: 'blue'
			},
		}
	}
</script>

<style lang="scss">
	.list-products-bg{
		padding: 50px 0;
		background: radial-gradient(229.1% 141.42% at 100% 100%, rgba(220, 69, 187, 0.47) 0%, rgba(150, 136, 236, 0.09) 38.54%, rgba(255, 255, 255, 0.00) 100%);
	}
	.list-products{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 16px;
		&-item{
			border-radius: $radius-small;
			border: solid 1px $light-border;
			padding: 20px;
			.head{
				display: flex;
				flex-direction: column;
				gap: 16px 8px;
				font-size: 19px;
				font-weight: 600;
				margin-bottom: 16px;
				line-height: 140%;
			}
			.desc{
				font-size: 14px;
				font-weight: 400;
				line-height: 140%;
			}
		}
		@media(max-width: 860px){
			grid-template-columns: repeat(5, 352px);
			overflow-x: scroll;
			padding-bottom: 20px;
			mask-image: linear-gradient(
					var(--mask-direction, to right),
					hsl(0 0% 0% / 1),
					hsl(0 0% 0% / 1) 20%,
					hsl(0 0% 0% / 1) 80%,
					hsl(0 0% 0% / 0)
			);
			&::-webkit-scrollbar-track{
				background: $light-border;
			}
			&::-webkit-scrollbar {
				height: 7px;
				border-radius: 5px;
			}
			.head{
				font-size: 14px;
				flex-direction: row;
			}
			.desc{
				font-size: 12px;
			}
		}
	}
</style>
