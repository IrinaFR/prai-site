<template lang="pug">
.container
	.case-feedback
		.case-review(v-if="showReview" )
			.title-block.center.white
				.subtitle-card.uppercase(:style="`--brandColor:${brandColor};--brandColorOpacity:${brandColor}33`") Отзыв
				h2.title {{review.author}}
				.description(v-html="review.description" )
		.case-likes
			.case-likes-title Понравился кейс?
			PraiUiShare.light(:likes="likes" :title="title" :link="link" :desc="services.length ? services.join(', ') : 'Описание кейса компании ПРАЙ'")
		.case-form
			.title Связаться с нами
			input.dark(placeholder="+7 999 000-00-00" v-mask="'+7 (###) ###-##-##'")
			PraiUiButtons(text="Связаться с нами")
</template>

<script>
	import PraiUiShare from "/components/ui/PraiUiShare.vue";
	import PraiUiButtons from "/components/ui/PraiUiButtons.vue";
	import {maska} from "maska";
	export default {
		props: {
			brandColor: String,
			likes: Number,
			services: Array,
			title: String,
			review: Object,
			link: String
		},
		computed: {
			showReview(){
				return (this.review.author || this.review.post)&&this.review.description
			}
		},
		directives: {
			mask: maska
		},
		components: {
			PraiUiShare, PraiUiButtons
		}
	}
</script>

<style scoped lang="scss">
	.case-feedback{
		border-radius: $radius-small;
		border: dashed 3px $white;
		padding: 30px;
		background: $bg-block-black url("/public/img/pattert-light.png") repeat;
		background-size: 450px;
		.case-review{
			margin-bottom: 50px;
		}
		.case-likes{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			row-gap: 24px;
			&-title{
				font-size: pxToRem(36);
				color: $white;
				font-weight: 600;
			}
		}
		.case-form{
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 16px;
			margin-top: 35px;
			.title{
				color: $white;
				font-size: pxToRem(18);
				font-weight: 600;
			}
			input,
			.btn-animate{
				width: 245px;
			}
			@media(max-width: 750px){
				flex-wrap: wrap;
				row-gap: 16px;
				justify-content: start;
				input{
					width: 100%;
				}
			}
		}
	}
</style>