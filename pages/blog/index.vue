<template lang="pug">
.root-news
	.container
		.news-filter
			svg(width="1082" height="309" viewBox="0 0 1082 309" fill="none" xmlns="http://www.w3.org/2000/svg")
				path(opacity="0.5" d="M1 190.5C112 86.1667 332.6 -79.7999 327 91.0001C320 304.5 329 384 509.5 225C690 66.0002 836.5 -65.4998 811 34.5002C785.5 134.5 826.5 249 1081 246" stroke="white" stroke-width="2" stroke-dasharray="32 32")
			.title.pacifico Блог команды
			.search-input
				nuxt-img(src="/img/news/search.svg" alt="icon" width="24" height="24" )
				input(placeholder="Поиск" v-model="search" @keydown.enter="$_blog_index_setFilter()")
				transition(name="fade")
					button.btn-outline.search(v-if="search" @click="$_blog_index_setFilter()") Найти
			.news-filter-tags
				.news-filter-tags-item(
					v-for="tag in storeSite.newsTags"
					:key="tag.value"
					:class="{active:selectTag===tag.value}"
					@click="$_blog_index_setFilter(tag.value)") {{tag.title}}
		.news-list
			PraiNewsCard(v-for="item in news" :key="item.short_name" :news="item")
		.news-pagination
			paginate.news-pagination(
				v-if="pages > 1"
				:page-count="pages"
				:current-page="currentPage"
				:click-handler="$_blog_index_setPage"
				prev-text="Назад"
				next-text="Вперёд")

</template>

<script setup>
	import {onMounted, ref, watch} from 'vue'
	const PraiNewsCard = defineAsyncComponent(() => import('/components/news/PraiNewsCard.vue'))
	import {useHeaderStore} from "/store/header";
	import Paginate from "vuejs-paginate-next";

	import {useRoute, useRuntimeConfig} from "nuxt/app";
	const route = useRoute()
	import {useRouter} from "nuxt/app";
	const router = useRouter()

	import {useSiteStore} from "/store/site";
	import {log} from "three/nodes";
	const storeSite = useSiteStore()
	const store = useHeaderStore()

	const { $makeRequest } = useNuxtApp()

	const defaultTitle = 'Блог - рассказываем о полезном и интересном'
	const defaultDescription = 'Полезные статьи на темы нейросетей, разработки, дизайна и других тем | ПРАЙ'
	useHead({
		title: defaultTitle,
		meta: [
			{ name: 'description', content:  ''},
			{ property: 'og:title', content: defaultTitle },
			{ property: 'og:description', content: defaultDescription },
		]
	})

	onMounted(() => {
		store.setHeader({
			logo: '#3843FF',
			opacity: 0.70,
			border: 'rgba(0, 114, 250, 0.5)',
			bgHeader: '255, 255, 255,',
			colorHeader: '#010004',
		})
	})


	const news = ref([])
	const pages = ref(1)
	const currentPage = ref(1)
	function $_blog_index_setPage(page){
		currentPage.value = page
		router.push(`${route.path}?cat=${selectTag}&page=${page}`)
		$_blog_index_loadNews()
	}

	const selectTag = ref(0)
	const search = ref('')
	watch(search, (newValue) => {
		if(!newValue) $_blog_index_setFilter()
	})



	const { data } = await useAsyncData('news', async () => {
			if(route.query.cat) selectTag.value = +route.query.cat
			if(route.query.page) currentPage.value = +route.query.page
		return await $_blog_index_loadNews()
	})
	if(data.value) $_blog_index_setData(data.value)
	function $_blog_index_setFilter(cat){
		if(cat||cat===0) {
			selectTag.value = cat
			search.value = ''
			router.push(`${route.path}?cat=${cat}`)
		}
		currentPage.value = 1

		$_blog_index_loadNews()
	}

	async function $_blog_index_loadNews(){
		const res = await $makeRequest('POST', 'news/' + currentPage.value, {
			search: search.value,
			cat: selectTag.value
		})
		if(res&&!res.err){
			news.value = res.news
			const countPages = await $makeRequest('POST', 'news/pages', {
				cat: selectTag.value
			})
			if(countPages&&!countPages.err) pages.value = countPages.count
		}
		return {news: news.value, pages: pages.value}
	}
	function $_blog_index_setData(data){
		news.value = data.news
		pages.value = data.pages
	}
</script>
