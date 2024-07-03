import { defineStore } from 'pinia'
import {useRuntimeConfig} from "nuxt/app";
import axios from "axios";

export const useRequestStore = defineStore('request', {
	state: () => ({
		config: useRuntimeConfig()
	}),
	actions: {
		async request(method, url, formData){
			const {apiServer} = this.config.app
			try {
				const {data} = await axios({
					method,
					url: encodeURI(apiServer + url),
					data: formData,
				})
				if(data&&!data.statusCode) return data
				return null
			} catch (error) {
				console.warn('Error', error.message);
				return null
			}
		},
	},
	getters: {
		getWidth: state => {
			return state.width
		},
	}
})
