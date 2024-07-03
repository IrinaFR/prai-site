<template lang="pug">
vue-final-modal(
	modal-id="modalFeedbackCall"
	class="modal right"
	content-class="modal-content-right"
	overlay-transition="vfm-fade"
	content-transition="vfm-slide-right")
	.modal-body.modal-feedback
		div
			.modal-feedback-title Оставьте заявку
			.modal-feedback-desc Укажите номер телефона и мы вам перезвоним, чтобы ответить на ваши вопросы
		.modal-feedback-form
			input.grey-input(v-model.trim="name" placeholder="Имя")
			input.grey-input(
				v-model="phone"
				placeholder="+7 (___) ___-__-__"
				:class="{error:!validPhone&&!valid}"
				v-maska="'phone'")
			.form-group
				input.check.light#feedbackSide(type="checkbox" v-model="agreement" :class="{error:!valid&&!agreement}")
				label.check(for="feedbackSide") Согласен с
					nuxt-link(href="/politika") условиями обработки персональных данных
			button.btn.w-100(@click="$_form_feedback_submit") Отправить
</template>

<script>
	import {useVfm, VueFinalModal} from "vue-final-modal";
	import {useNotificationStore} from "/store/notification";
	import {useModalStore} from "/store/modal";
	export default{
		data(){
			return{
				name: '',
				phone: '',
				agreement: false,
				valid: true,
				modal: useVfm(),
				storeNotif: useNotificationStore()
			}
		},
		computed: {
			validPhone(){
				return !!this.phone && this.phone.replace(/[\D]+/g, '').length === 11
			}
		},
		methods: {
			async $_form_feedback_submit(){
				if(!this.validPhone) {
					this.valid = false
					return
				}
				if(this.agreement){
					const res = await useModalStore().sendFormFeedback(this.phone, this.name)
					if(res) {
						this.name = ''
						this.phone = ''
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
			VueFinalModal,
			PraiUiButtons: defineAsyncComponent(() => import('/components/ui/PraiUiButtons.vue'))
		}
	}
</script>

<style scoped lang="scss">
	.modal-feedback{
		padding: 20px 0;
		max-width: 300px;
		height: calc(100% - 40px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&-title{
			font-size: pxToRem(24);
			line-height: 140%;
			font-weight: 600;
		}
		&-desc{
			font-size: pxToRem(14);
			line-height: 140%;
			margin-top: 10px;
		}
		&-form{

			label.check{
				font-size: pxToRem(12);
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