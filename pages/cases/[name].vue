<template lang="pug">
.root-case(v-if="loaded" )
	PraiCaseHeader(:brandColor="brand_color" :title="caseInfo.name" :services="caseInfo.data.services" :tags="caseInfo.data.tags")
	PraiCaseAbout#aboutClient(:brandColor="brand_color" :about="caseInfo.data.about" v-if="showAbout" )
	PraiCaseTask#taskCase(:brandColor="brand_color" :task="caseInfo.data.task" v-if="caseInfo.data.task" )
	PraiCaseStep#stepsCase(:steps="caseInfo.data.steps" v-if="caseInfo.data.steps.length" )
	PraiCaseFinal(:brandColor="brand_color" :array="caseInfo.data.final" v-if="caseInfo.data.final.length" )
	PraiCaseTest#testCase(:brandColor="brand_color" :test="caseInfo.data.test" v-if="caseInfo.data.test" )
	PraiCaseStack#stackCase(:stack="caseInfo.data.stack" v-if="caseInfo.data.stack.length")
	PraiCaseFeature#featuresCase(:brandColor="brand_color" :text="caseInfo.data.features" v-if="caseInfo.data.features" )
	PraiCaseLikes#reviewCase(:brandColor="brand_color" :likes="12" :review="caseInfo.data.review" :link="'cases/' + caseInfo.short_name" :title="caseInfo.name" :services="caseInfo.data.services" v-if="showReview" )
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
	import PraiCaseHeader from "/components/case/PraiCaseHeader.vue";
	import PraiCaseAbout from '/components/case/PraiCaseAbout.vue'
	import PraiCaseTask from '/components/case/PraiCaseTask.vue'
	import PraiCaseStep from '/components/case/PraiCaseStep.vue'
	import PraiCaseFinal from '/components/case/PraiCaseFinal.vue'
	import PraiCaseTest from '/components/case/PraiCaseTest.vue'
	import PraiCaseStack from '/components/case/PraiCaseStack.vue'
	import PraiCaseFeature from '/components/case/PraiCaseFeature.vue'
	import PraiCaseLikes from '/components/case/PraiCaseLikes.vue'
	import PraiCaseNext from '/components/case/PraiCaseNext.vue'

	import {useHeaderStore} from "/store/header";
	const store = useHeaderStore()
	import {useRequestStore} from "/store/request";
	const storeRequest = useRequestStore()
	import {useRoute} from "nuxt/app";
	const route = useRoute()


	const loaded = ref(false)
	const caseInfo = toRef({})
	const otherCase = ref([])
	const brand_color = ref('')

	await useAsyncData('cases', () => {
		// if(route.query.cat) selectTag.value = +route.query.cat
		// if(route.query.page) currentPage.value = +route.query.page
		$_case_page_loadCase()
	})
	const offsetScroll = (id) => {
		const el = document.getElementById(id)
		window.scrollTo(0, el.offsetTop - 130)
	}
	async function $_case_page_loadCase(){
		const res = await storeRequest.request('GET', 'cases/' + route.params.name)
		if(res&&!res.err){
			caseInfo.value = res.data
			otherCase.value = res.other
			brand_color.value = caseInfo.value.data.about.brand_color

			useHead({
				title: caseInfo.value.title,
			})
			useSeoMeta({
				title: caseInfo.value.name,
				ogTitle: caseInfo.value.name,
				description: caseInfo.value.name.description,
				ogDescription: caseInfo.value.name.description,
				ogImage: `${storeRequest.config.app.apiServerImg}photo/case/${caseInfo.value.img}`,
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