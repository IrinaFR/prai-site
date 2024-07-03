<template lang="pug">
.root-case(v-if="loaded" )
	PraiCaseHeader(:brandColor="brand_color" :title="caseInfo.name" :services="caseInfo.cat" :tags="caseInfo.data.tags")
	PraiCaseAbout#aboutClient(:brandColor="brand_color" :about="caseInfo.data.about" v-if="showAbout" )
	PraiCaseTask#taskCase(:brandColor="brand_color" :task="caseInfo.data.task" v-if="caseInfo.data.task" )
	PraiCaseStep#stepsCase(:steps="caseInfo.data.steps" v-if="caseInfo.data.steps.length" )
	PraiCaseFinal(:brandColor="brand_color" :array="caseInfo.data.final" v-if="caseInfo.data.final.length" )
	PraiCaseTest#testCase(:brandColor="brand_color" :test="caseInfo.data.test" v-if="caseInfo.data.test" )
	PraiCaseStack#stackCase(:stack="caseInfo.data.stack" v-if="caseInfo.data.stack.length")
	PraiCaseFeature#featuresCase(:brandColor="brand_color" :text="caseInfo.data.features" v-if="caseInfo.data.features" )
	PraiCaseLikes#reviewCase(:brandColor="brand_color" :likes="12" :review="caseInfo.data.review" :link="'cases/' + caseInfo.short_name" :title="caseInfo.name" :services="caseInfo.cat" v-if="showReview" )
	PraiCaseNext(:other="otherCase")
	.case-menu-anchor(:style="`background:${brand_color};color:${caseInfo.data.about.light_header ? '#ffffff' : '#010004'}`")
		.case-menu-anchor-link(@click="offsetScroll('aboutClient')" v-if="showAbout") О клиенте
		.case-menu-anchor-link(@click="offsetScroll('taskCase')" v-if="caseInfo.data.task") Задача
		.case-menu-anchor-link(@click="offsetScroll('stepsCase')" v-if="caseInfo.data.steps.length") Этапы
		.case-menu-anchor-link(v-for="(link, idx) in caseInfo.data.final" @click="offsetScroll('finalCase'+idx)") {{link.title}}
		.case-menu-anchor-link(@click="offsetScroll('testCase')" v-if="caseInfo.data.test") Тест
		.case-menu-anchor-link(@click="offsetScroll('stackCase')" v-if="caseInfo.data.stack.length") Стек
		.case-menu-anchor-link(@click="offsetScroll('featuresCase')" v-if="caseInfo.data.features") Фичи
		.case-menu-anchor-link(@click="offsetScroll('reviewCase')" v-if="showReview") Отзыв
</template>

<script setup>
	const PraiCaseHeader = defineAsyncComponent(() => import('/components/case/PraiCaseHeader.vue'))
	const PraiCaseAbout = defineAsyncComponent(() => import('/components/case/PraiCaseAbout.vue'))
	const PraiCaseTask = defineAsyncComponent(() => import('/components/case/PraiCaseTask.vue'))
	const PraiCaseStep = defineAsyncComponent(() => import('/components/case/PraiCaseStep.vue'))
	const PraiCaseFinal = defineAsyncComponent(() => import('/components/case/PraiCaseFinal.vue'))
	const PraiCaseTest = defineAsyncComponent(() => import('/components/case/PraiCaseTest.vue'))
	const PraiCaseStack = defineAsyncComponent(() => import('/components/case/PraiCaseStack.vue'))
	const PraiCaseFeature = defineAsyncComponent(() => import('/components/case/PraiCaseFeature.vue'))
	const PraiCaseLikes = defineAsyncComponent(() => import('/components/case/PraiCaseLikes.vue'))
	const PraiCaseNext = defineAsyncComponent(() => import('/components/case/PraiCaseNext.vue'))

	import {useHeaderStore} from "/store/header";
	const store = useHeaderStore()
	import {useNuxtApp, useRoute, useRuntimeConfig} from "nuxt/app";
	const route = useRoute()
	const { $makeRequest } = useNuxtApp()


	const loaded = ref(false)
	const caseInfo = toRef({})
	const otherCase = ref([])
	const brand_color = ref('')

	const { data } = await useAsyncData('casePage', async () => {
		return await $_case_page_loadCase()
	})
	if(data.value) $_case_page_setData(data.value)
	const offsetScroll = (id) => {
		const el = document.getElementById(id)
		window.scrollTo(0, el.offsetTop - 130)
	}
	async function $_case_page_loadCase(){
		let caseInfo = null
		try{
			const res = await $makeRequest('GET', 'cases/' + route.params.name)
			if(res&&!res.err){
				caseInfo = {
					data: res.data,
					other: res.other
				}
			}
			return {caseInfo}
		} catch (error) {
			console.error('Error load case', error.message)
			return null
		}
	}
	function $_case_page_setData(data){
		caseInfo.value = data.caseInfo.data
		otherCase.value = data.caseInfo.other
		brand_color.value = caseInfo.value.data.about.brand_color
		useHead({
			title: caseInfo.value.title,
			meta: [
				{name: 'description', content: 'Кейс | ' + caseInfo.value.description},
				{property: 'og:title', content: 'Кейс | ' + caseInfo.value.name},
				{property: 'og:description', content: 'Кейс | ' + caseInfo.value.description},
				{property: 'og:image', content: `${useRuntimeConfig().public.apiServerImg}photo/case/${caseInfo.value.img}`}
			]
		})

		store.setHeader({
			logo: caseInfo.value.data.about.brand_color ,
			opacity: 0.70,
			border: 'rgba(0, 181, 113, 0.5)',
			bgHeader: '14, 12, 21,',
			colorHeader: caseInfo.value.data.about.light_header ? '#ffffff' : '#010004',
		})

		loaded.value = true
	}


	const showAbout = computed(() => {
		return !!(caseInfo.value.data && caseInfo.value.data.about.description);
	})
	const showReview = computed(() => {
		if(caseInfo.value.data){
			for(let key in caseInfo.value.data.review){
				if(caseInfo.value.data.review[key]) return true
			}
			// if(caseInfo.value.data.services.length) return true

		}
		return false
	})

</script>

<style scoped lang="scss">
	.case-menu-anchor{
		position: sticky;
		z-index: 10;
		bottom: 0;
		width: 100%;
		max-width: calc(100% - 40px);
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
		gap: 20px 20px;
		justify-content: center;
		background: $blue;
		&-link{
			cursor: pointer;
			font-size: pxToRem(14);
			font-weight: 500;
		}
	}
</style>