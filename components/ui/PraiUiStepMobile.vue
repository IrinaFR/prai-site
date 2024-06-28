<template lang="pug">
.step-work-mobile
	.container
		.title-block.center
			.subtitle-card.uppercase(:class="$props.class") Agile
			h2.title Этапы работы
		.step-work-mobile-trigger.hide-scroll(ref="scrollContainer")
			.step-swiper-slide-mobile(v-for="step in steps")
				.item
					img(:src="'/img/steps/' + step.icon")
					| {{step.title}}
				ul
					li(v-for="item in step.list" ) {{item}}
</template>

<script>
	export default {
		props: {
			class: {
				type: String,
				default: ''
			},
			steps: Array
		}
	}
</script>

<style scoped lang="scss">
	.step-work-mobile{
		padding: 50px 0;
		background: url("/public/img/pattert-light.png") repeat;
		background-size: 300px;
		&-trigger{
			overflow: scroll;
			max-width: 100%;
			display: flex;
			column-gap: 16px;
			scroll-behavior: smooth;
			scroll-snap-type: x mandatory;
			.step-swiper-slide-mobile{
				max-width: 240px;
				min-width: 240px;
				position: relative;
				padding: 20px 18px;
				border-radius: $radius-small;
				border: solid 1px #E7E8EE;
				background: #FFFFFF;
				border: solid 1px $light-pink;
				font-size: 14px;
				transition: $anim-small;
				z-index: 1;
				scroll-snap-align: start;
				scroll-snap-stop: always;
				.item{
					max-width: 250px;
					min-width: 250px;
					display: flex;
					align-items: center;
					column-gap: 8px;
					font-weight: 600;
					font-size: 14px;
					color: $text-black;
				}
				ul{
					padding-left: 18px;
				}
				li + li{
					margin-top: 16px;
				}
			}

		}
	}

</style>
