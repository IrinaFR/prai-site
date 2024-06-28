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
			input.grey-input(v-model.trim="form.name" placeholder="Имя")
			input.grey-input(
				v-model="form.phone"
				v-maska="'+7 (###) ###-##-##'"
				placeholder="+7 (900) 000-00-00"
				:class="{error:!validPhone&&!valid}")
			.form-group
				input.check.light#feedbackSide(type="checkbox" v-model="agreement" :class="{error:!valid&&!agreement}")
				label.check(for="feedbackSide") Согласен с
					nuxt-link(href="/politika") условиями обработки персональных данных
			button.btn.w-100(@click="$_form_feedback_submit") Отправить
</template>

<script>
	import {useVfm, VueFinalModal} from "vue-final-modal";
	import PraiUiButtons from "/components/ui/PraiUiButtons.vue";
	import {useNotificationStore} from "/store/notification";
	import {useModalStore} from "/store/modal";
	import {maska} from "maska";
	export default{
		directives: { maska },
		data(){
			return{
				form: {
					name: '',
					phone: ''
				},
				agreement: false,
				valid: true,
				modal: useVfm(),
				storeNotif: useNotificationStore()
			}
		},
		computed: {
			validPhone(){
				return !!this.form.phone && this.form.phone.length === 18
			}
		},
		methods: {
			async $_form_feedback_submit(){
				if(!this.validPhone) {
					this.valid = false
					return
				}
				if(this.agreement){
					const res = await useModalStore().sendFormFeedback(this.form.phone, this.form.name)
					if(res) {
						this.form = {
							name: '',
							phone: ''
						}
						this.valid = true
						this.storeNotif.addNotification({img: '/feedback/fire.gif', text: 'Заявка отправлена, ожидайте звонка'})
					}
					else this.storeNotif.addNotification({img: '/feedback/bellissimo.png', text: 'Произошла какая-то проблема, уже чиним!'})
				} else {
					this.valid = false
				}

			}
		},
		components: { VueFinalModal, PraiUiButtons }
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