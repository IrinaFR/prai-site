import axios from 'axios'

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()
	const axiosInstance = axios.create({
		baseURL: config.public.apiServer
	})

	return {
		provide: {
			axios: axiosInstance
		}
	}
})