<template lang="pug">
.container
	.case-feedback
		.case-review(v-if="showReview" )
			.title-block.center.white
				.subtitle-card.uppercase(:style="`--brandColor:${brandColor};--brandColorOpacity:${brandColor}33`") Отзыв
				h2.title {{review.author}}
				.description(v-html="review.description")
		.case-likes
			.case-likes-title Понравился кейс?
			PraiUiShare.light(:likes="likes" :title="title" :link="link" :desc="services?.length ? getListServices : 'Описание кейса компании ПРАЙ'")
		.case-feedback-form
			.case-form
				.title Связаться с нами
				input.dark(
					v-model="phone"
					placeholder="+7 (___) ___-__-__"
					:class="{error:!validPhone&&!valid}"
					v-maska="'phone'")
				PraiUiButtons(text="Отправить заявку" @click="$_case_likes_submitOrderCall")
			.case-agreement
				input.check#feedbackSide(type="checkbox" v-model="agreement" :class="{error:!valid&&!agreement}")
				label.check(for="feedbackSide") Согласен с
					nuxt-link(href="/politika") условиями обработки персональных данных
</template>

<script>

	import {useServicesStore} from "/store/services";
	import {useModalStore} from "/store/modal";
	import {useNotificationStore} from "/store/notification";
	export default {
		props: {
			brandColor: String,
			likes: Number,
			services: Array,
			title: String,
			review: Object,
			link: String
		},
		data(){
			return{
				phone: '',
				agreement: false,
				valid: true,
				storeNotif: useNotificationStore()
			}
		},
		computed: {
			showReview(){
				return (this.review.author || this.review.post)&&this.review.description
			},
			getListServices(){
				return this.services.map(s => {
					return useServicesStore().getNameServiceById(s)
				}).join(', ')
			},
			validPhone(){
				return !!this.phone && this.phone.replace(/[\D]+/g, '').length === 11
			}
		},
		methods: {
			async $_case_likes_submitOrderCall(){
				if(!this.validPhone) {
					this.valid = false
					return
				}
				if(this.agreement){
					const res = await useModalStore().sendFormFeedback(this.phone, '', `Страница кейса - ${this.title}`)
					if(res) {
						this.phone = ''
						this.agreement = false
						this.valid = true
						this.storeNotif.addNotification({img: '/feedback/fire.gif', text: 'Благодарим за заявку, скоро с вами свяжемся'})
					}
					else this.storeNotif.addNotification({img: '/feedback/bellissimo.png', text: 'Произошла какая-то проблема, уже чиним!'})
				} else {
					this.valid = false
				}
			}
		},
		components: {
			PraiUiShare: defineAsyncComponent(() => import('/components/ui/PraiUiShare.vue')),
			PraiUiButtons: defineAsyncComponent(() => import('/components/ui/PraiUiButtons.vue')),
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
		.case-feedback-form{
			display: flex;
			align-items: end;
			flex-direction: column;
			row-gap: 15px;
			width: fit-content;
			margin: 35px auto auto;
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
		.case-agreement{
			display: flex;
			column-gap: 10px;
			align-items: center;
			label.check{
				font-size: pxToRem(14);
				color: $dark-secondary-text;
				line-height: 18px;
				cursor: pointer;
				a{
					color: $blue;
					text-decoration: underline;
					margin-left: 3px;
				}
			}
			.form-group{
				display: flex;
				column-gap: 15px;
				margin-bottom: 50px;
			}
		}
	}
</style>