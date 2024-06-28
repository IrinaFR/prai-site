import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
	state: () => ({
		header: {
			logo: '#3843FF',
			opacity: 0.70,
			border: 'rgba(0, 114, 250, 0.18)',
			bgHeader: '255, 255, 255,',
			colorHeader: '#010004',
		},
	}),
	actions: {
		setHeader(settings){
			this.header = settings
		}
	},
	getters: {
		getWidth: state => {
			return state.width
		},
	}
})
