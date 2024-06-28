<template lang="pug">
.list-products-bg
	.container
		.title-block
			.subtitle-card.uppercase(:class="$props.class") {{$props.subtitle}}
			h2.title Что мы можем
		.list-products
			.list-products-item(v-for="product in products")
				.head
					PraiUiIcon(:color="product.color" :icon="'products/' + product.icon")
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
		},
		// mounted() {
		// 	this.$_ui_list_products_setPaws()
		// },
		// methods: {
		// 	$_ui_list_products_setPaws(){
		//
		// 	}
		// }
	}
</script>

<style lang="scss">
	.list-products-bg{
		padding: 50px 0;
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
			display: flex;
			overflow-x: auto;
			padding-bottom: 20px;
			&-item{
				min-width: 270px;
			}
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
				display: flex;
				align-items: center;
			}
			.desc{
				font-size: 12px;
			}
		}
	}
</style>
