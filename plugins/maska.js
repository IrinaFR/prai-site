function onInput(event, model){
	let value = event.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы

	if (value.length > 11) {
		value = value.substring(0, 11)
	}

	const formattedValue = formatPhoneNumber(value)
	event.target.value = formattedValue

	if (model.instance && model.value) {
		model.instance[model.value] = formattedValue;
	}
}
function formatPhoneNumber(value) {
	if (!value) return '';

	let formattedInput = ''

	formattedInput = '+7 ('
	if (value.length === 1){

		if(value[0] !== '8' && value[0] !== '7' && value[0] !== '+') {
			formattedInput += value[0]
		}
	}
	if (value.length > 1) {
		formattedInput += value.substring(1, 4)
	}
	if (value.length >= 5) {
		formattedInput += ') ' + value.substring(4, 7)
	}
	if (value.length >= 8) {
		formattedInput += '-' + value.substring(7, 9)
	}
	if (value.length >= 10) {
		formattedInput += '-' + value.substring(9, 11)
	}

	return formattedInput
}
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.directive('maska', {
		mounted(el, model) {
			el.addEventListener('input', (event) => onInput(event, model))
			// el.addEventListener('change', onInput)
		},

		unmounted(el) {
			el.removeEventListener('input', onInput)
			// el.removeEventListener('change', onInput)
		}
	});
});