import {defineStore} from "pinia";
export const useNotificationStore = defineStore('notification', {
	state: () => {
		return {
			notifications: [],
		}
	},
	actions: {
		addNotification(data) {
			if(data.delete !== undefined) {
				this.notifications.splice(data.delete, 1);
			}else {
				this.notifications.unshift({
					type: data.type,
					text: data.text,
					img: data.img,
					id: new Date().getTime()});
				setTimeout(() => {
					this.notifications.splice(-1, 1)
				}, 5000)
			}
		},
	},
	getters: {
		getNotifications(state){
			return state.notifications
		},
	}
})
