<template lang="pug">
.form-feedback(:class="[{full:fullBtn}], $props.class")
	input.dark(
		placeholder="+7 (___) ___-__-__"
		v-maska="'phone'"
		v-model="phone"
		:class="{error:!validPhone&&!valid}")
	PraiUiButtons(:text="text" @click="$_form_feedback_submit" :class="[$props.class, {'btn-full':fullBtn}]")
	slot
	.form-group
		input.check(:id="id" type="checkbox" v-model="agreement" :class="{error:!valid&&!agreement}")
		label.check(:for="id") Согласен с
			nuxt-link(href="/politika") условиями обработки персональных данных
</template>

<script>
	import {useModalStore} from "/store/modal";
	import {useNotificationStore} from "/store/notification";
	export default {
		emits: ['send'],
		components: {
			PraiUiButtons: defineAsyncComponent(() => import('/components/ui/PraiUiButtons.vue'))
		},
		props: {
			fullBtn: {
				type: Boolean,
				default: false
			},
			text: {
				type: String,
				default: 'Отправить'
			},
			class: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			id: {
				type: String,
				default: 'agreement'
			}
		},
		data(){
			return{
				phone: '',
				agreement: false,
				storeModal: useModalStore(),
				valid: true,
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
					const res = await useModalStore().sendFormFeedback(this.phone, '', this.title)
					if(res) {
						this.phone = ''
						this.valid = true
						this.storeNotif.addNotification({img: '/feedback/fire.gif', text: 'Благодарим за заявку, скоро с вами свяжемся'})
					}
					else this.storeNotif.addNotification({img: '/feedback/bellissimo.png', text: 'Произошла какая-то проблема, уже чиним!'})
				} else {
					this.valid = false
				}

			}
		}
	}
</script>

<style scoped lang="scss">
	.form-feedback{
		.form-group{
			display: flex;
			align-items: center;
			column-gap: 16px;
			margin-top: 16px;
		}
		input.dark{
			width: 100%;
			box-sizing: border-box;
		}
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
		.btn-animate{
			margin-top: 24px;
		}
		&.full{
			.btn-animate{
				width: 100%;
			}
		}
		&.light-pink{
			input.check{
				border: solid 1px $light-pink;
			}
			label.check a{
				color: $light-pink;
			}
		}
		&.green{
			input.check{
				border: solid 1px $green;
			}
			label.check a{
				color: $green;
			}
		}
	}
</style>