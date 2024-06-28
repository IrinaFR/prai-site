<template lang="pug">
.container
	.nlp-stack
		.title-block.center.white
			.subtitle-card.uppercase.blue Стек
			h2.title Используемые технологии
		.nlp-stack-list
			.nlp-stack-list-item
				.icon
					img(src="/img/stack/python.svg")
				| Python
			.nlp-stack-list-item
				.icon
					img(src="/img/stack/tensorflow.svg")
				| TesnorFlow
			.nlp-stack-list-item
				.icon
					img(src="/img/stack/nodejsWhite.svg")
				| Node JS
			.nlp-stack-list-item
				.icon
					img(src="/img/stack/natasha.svg")
				| NER Natasha
			.nlp-stack-list-item
				.icon
					img(src="/img/stack/csharp.svg")
				| C#
			.nlp-stack-list-item
				.icon
					img(src="/img/stack/pytorch.svg")
				| PyTorch
			.nlp-stack-list-item
				.icon
					img(src="/img/stack/keras.svg")
				| Keras

</template>

<style scoped lang="scss">
	.nlp-stack{
		border-radius: $radius-small;
		background: $bg-block-black url("public/img/pattert-light.png") repeat;
		background-size: 432px;
		padding: 50px 33px;
		margin-bottom: 50px;
		&-list{
			display: flex;
			gap: 10px;
			justify-content: center;
			flex-wrap: wrap;
			&-item{
				display: flex;
				row-gap: 10px;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 17px;
				color: $white;
				font-weight: 600;
				width: 105px;
				.icon{
					width: 70px;
					height: 70px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 9px;
					border: 1px solid #211F27;
					background: #0E0C15;
					box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.25);
					img{
						width: 100%;
						max-width: 45px;
						max-height: 45px;
					}
				}
			}
		}
	}
</style>