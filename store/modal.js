import { defineStore } from 'pinia'
import {useVfm} from "vue-final-modal";
import {useRequestStore} from "/store/request";

export const useModalStore = defineStore('modal', {
	state: () => ({
		trigger: '',
	}),
	actions: {
		openModalFeedback(trigger){
			this.trigger = trigger
			useVfm().open('modalFeedbackCall')
		},
		closeModalFeedback(){
			useVfm().close('modalFeedbackCall')
			this.trigger = ''
		},
		async sendFormFeedback(phone, description, trigger){
			const data = {
				phone: phone.replace(/[\D]+/g, ''),
				title: trigger || this.trigger,
				description
			}
			const res = await useRequestStore().request('POST', 'leads', data)
			if(res&&!res.err){
				await useVfm().closeAll()
				return true
			}
			return false
		},
	},
})
