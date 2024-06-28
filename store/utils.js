import { defineStore } from 'pinia'

export const useUtilsStore = defineStore('utils', {
	state: () => ({
		width: 1000,
		month: [
			'января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декарбя'
		]
	}),
	actions: {
		setWidthScreen(width){
			this.width = width
		},
	},
	getters: {
		getWidth: state => {
			return state.width
		},
		getMothText: state => idx => {
			return state.month[idx]
		}
	}
})
