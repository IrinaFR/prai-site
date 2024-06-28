<template lang="pug">
.root-cases
	.root-cases-head
		.container
			h1 Реализованные проекты
			.search-input
				img(src="/img/news/search.svg")
				input(placeholder="Найти кейс" v-model="search" @keydown.enter="$_case_index_setSearch")
				transition(name="fade")
					button.btn.search(v-if="search" @click="$_case_index_setSearch") Найти
	.container
		.root-cases-list
			PraiUiCardCase( v-for="item in cases" :data="item")
			.search-empty.white.grid(v-if="search&&!cases.length" ) По запросу "{{search}}" ничего не найдено
		div(ref="refTargetLazy")

</template>

<script setup>
	import PraiUiCardCase from "/components/ui/PraiUiCardCase.vue";
	import {useRequestStore} from "/store/request";
	const storeRequest = useRequestStore()
	import {useHeaderStore} from "/store/header";
	import {watch} from "vue";
	const storeHeader = useHeaderStore()



	await useAsyncData('cases', () => {
		// if(route.query.cat) selectTag.value = +route.query.cat
		// if(route.query.page) currentPage.value = +route.query.page
		$_case_index_loadCase()
	})

	const cases = ref([])
	const lastId = ref(0)
	const search = ref('')
	watch(search, (newValue) => {
		if(!newValue) $_case_index_setSearch()
	})

	const observer = ref(null)
	const refTargetLazy = ref(null)
	const $_case_index_setSearch = () => {
		if(!observer.value.isActive) {
			observer.value.observe(refTargetLazy.value)
		}
		lastId.value = 0
		cases.value = []
	}

	onMounted(() => {
		storeHeader.setHeader({
			logo: '#3843FF',
			opacity: 0.70,
			border: 'rgba(4, 125, 255, 0.42)',
			bgHeader: '10, 10, 10,',
			colorHeader: '#ffffff',
		})
		observer.value = new IntersectionObserver((entries) => {
			if(entries[0].isIntersecting) {
				$_case_index_loadCase()
				observer.value.isActive = true
			}})
		if(refTargetLazy.value) {
			observer.value.observe(refTargetLazy.value)
		}
	})
	onBeforeUnmount(() => {
		if(!observer.value.isActive) observer.value.unobserve(refTargetLazy.value)
	})
	async function $_case_index_loadCase(){
		const res = await storeRequest.request('POST', 'cases/all', {
			id_case: lastId.value,
			search: search.value
		})
		if(!res?.err){
			if(res.cases.length) {
				cases.value = [...cases.value, ...res.cases]
				lastId.value = cases.value.at(-1).id
				console.log(cases.value)
			}
			if(res.cases.length < 10 && observer.value.isActive) {
				observer.value.unobserve(refTargetLazy.value)
				observer.value.isActive = false
			}
		}
	}
</script>

<style scoped lang="scss">
	.root-cases{
		background: $bg-block-black;
		&-head{
			width: 100%;
			padding-top: 130px;
			padding-bottom: 50px;
			color: $white;
			background: url("/public/img/cases/patterSmallGrid.png") repeat;
			background-size: 18.5px;
			mask-image: linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsl(0, 0%, 0%) 0%, hsl(0, 0%, 0%) 90%, hsla(0, 0%, 0%, 0.2));
			@media(max-width: 768px){
				padding-top: 80px;
			}
			h1{
				line-height: 120%;
			}

			.search-input{
				padding: 13px 16px;
				border-radius: 33px;
				border: 1px solid $dark-border;
				background: $bg-block-black;
				display: flex;
				align-items: center;
				column-gap: 10px;
				width: 470px;
				max-width: calc(100% - 40px);
				position: relative;
				z-index: 2;
				margin-top: 30px;
				input{
					font-size: 16px;
					width: 60%;
					border: none;
					outline: none;
					background: none;
					box-shadow: none;
					font-family: "Avenir Next Cyr", sans-serif;
					color: $white;
					&::placeholder{
						color: $dark-secondary-text;
					}
				}
				.btn-outline{
					background: $bg-block-black;
					color: $white;
					border: solid 1px $dark-border;
				}
			}
		}
		&-list{
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 30px;
			padding: 40px 0;
			@media(max-width: 576px){
				grid-template-columns: 1fr;
			}
			.search-empty{
				width: 100%;
				text-align: center;
				font-size: pxToRem(28);
				font-weight: 600;
				color: $white;
				grid-area: 1 / 1 / 2 / 3;
				margin: 50px 0;
				line-height: 120%;
				@media(max-width: 768px){
					font-size: pxToRem(22);
					line-height: 140%;
				}
			}
		}
	}
</style>