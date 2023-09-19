<template lang="pug">
.bg-black
	.benefits.container
		.gradient_1
		.gradient_2
		.title-block.white.center
			.subtitle-card.uppercase(:class="$props.class") {{$props.subtitle}}
			h2.title Наши преимущества
		.list-benefits
			.list-benefits-item(v-for="item in benefits" )
				.title {{item.title}}
				.desc {{item.desc}}

</template>

<script>
	export default {
		props: {
			class: {
				type: String,
				default: 'blue'
			},
			subtitle: String,
			benefits: Array
		}
	}
</script>

<style lang="scss">
	.benefits{
		position: relative;
		.title-block{
			position: relative;
			z-index: 1;
		}
		.gradient_1 {
			position: absolute;
			width: 270px;
			background: linear-gradient(180deg, #073C8A 0%, #7644B6 100%);
			filter: blur(44px);
			height: 530px;
			transform: rotate(77deg);
			left: 15%;
			top: 160px;
			border-top-left-radius: 150px;
			border-bottom-right-radius: 350px;
			z-index: 0;
			@media(max-width: 768px) {
				display: none;
			}
		}
		.gradient_2 {
			position: absolute;
			width: 270px;
			background: linear-gradient(180deg, #073C8A 0%, #7644B6 100%);
			filter: blur(44px);
			height: 530px;
			transform: rotate(70deg);
			top: -20px;
			right: 12%;
			border-top-left-radius: 150px;
			border-bottom-right-radius: 350px;
			z-index: 0;
			@media(max-width: 1148px) {
				right: 22%;
			}
			@media(max-width: 768px) {
				display: none;
			}
		}
	}
	.list-benefits{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 50px 30px;
		padding: 33px;
		border-radius: $radius-small;
		border: solid 1px $dark-border;
		background: $bg-block-black;
		position: relative;
		z-index: 1;
		@media(max-width: 576px) {
			grid-template-columns: 1fr;
			grid-row-gap: 35px;
		}
		&-item{
			.title{
				position: relative;
				color: $white;
				font-size: 19px;
				font-weight: 600;
				display: flex;
				align-items: center;
				column-gap: 10px;
				&::before{
					content: '';
					display: block;
					min-width: 11px;
					width: 11px;
					height: 11px;
				}
			}
			.desc{
				color: $dark-secondary-text;
				font-size: 14px;
				margin-top: 16px;
			}
			&:nth-child(1) .title::before{
				border-radius: 50%;
				background: #0072FA;
			}
			&:nth-child(2) .title::before{
				background: #D824A5;
				transform: rotate(45deg);
			}
			&:nth-child(3) .title::before{
				background: #F32222;

			}
			&:nth-child(4) .title::before{
				border: dashed 1px #FF7F09;
			}
			&:nth-child(5) .title::before{
				width: auto;
				min-width: auto;
				height: auto;
				border: 5px solid transparent;
				border-bottom: 5px solid #FBF22C;
				transform: scale(1, 1.7);
				margin-bottom: 10px;
				border-bottom: 5px solid #FBF22C;
			}
			&:nth-child(6) .title::before{
				border-radius: 50%;
				border: dashed 1px #31FF10;
			}
		}
	}
</style>
