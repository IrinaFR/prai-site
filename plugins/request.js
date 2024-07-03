export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide('makeRequest', async (method, url, formData, params) => {
		const { $axios } = nuxtApp
		try {
			const { data } = await $axios({
				method,
				url: encodeURI(url),
				data: formData,
				params
			})
			if (data && !data.statusCode) {
				return data
			}
			return null
		} catch (error) {
			console.error('Error', error.message)
			return null
		}
	})
})