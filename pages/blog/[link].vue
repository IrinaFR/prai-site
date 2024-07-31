<template lang="pug">
.root-news-page
	.container(v-if="loaded" )
		.news-page-content
			.news-page-content-head
				nuxt-img(
					:src="`${useRuntimeConfig().public.apiServerImg}photo/news/${news.img}`"
					placeholder-class="placeholderImage"
					:alt="news.title")
				.news-page-content-info
					.tags
						.subtitle-card.blue.uppercase {{storeSite.getNameTagById(news.cat)}}
						.date
							nuxt-img(src="/img/news/calendar.svg" width="24" height="24" alt="icon" )
							| {{dateNews}}
					.title {{news.name}}
					PraiUiShare.light(:title="news.name" :link="'blog/' + news.short_name" :desc="news.description" :social="false")
			.news-page-content-description
				.paragraph(v-for="(item, idx) in news.content" :id="'content' + idx")
					.title(v-if="item.title") {{item.title}}
					.description.htmlDescription.black(v-html="item.description" )
			hr
			PraiUiShare.my-25(:title="news.name" :link="'blog/' + news.short_name" :desc="news.description")
		.news-page-toc
			.news-page-toc-progress
				.dot(v-for="count in news.content.length" :class="[`dot-${count-1}`]")
			.news-page-toc-titles
				.title(v-for="(dot, idx) in news.content" @click="offsetScroll('content' + idx)") {{dot.title}}

</template>


<script setup>
	import {ref, toRef, computed, nextTick, onMounted} from 'vue'
	import {useRuntimeConfig} from "nuxt/app";
	const PraiUiShare = defineAsyncComponent(() => import('/components/ui/PraiUiShare.vue'))

	import {useHeaderStore} from "/store/header";
	const storeHeader = useHeaderStore()
	import {useSiteStore} from "/store/site";
	const storeSite = useSiteStore()
	import {useUtilsStore} from "/store/utils";
	const storeUtils = useUtilsStore()

	import { gsap } from "gsap/all";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	const { $makeRequest } = useNuxtApp()


	onMounted(() => {
		storeHeader.setHeader({
			logo: '#3843FF',
			opacity: 0.70,
			border: 'rgba(0, 114, 250, 0.5)',
			bgHeader: '255, 255, 255,',
			colorHeader: '#010004',
		})
	})

	const $_blog_page_setGSAP = () => {
		gsap.registerPlugin(ScrollTrigger);

		for(let i=0; i< news.value.content.length; i++){
			let tl = gsap.timeline({
				duration: 5,
				onStart: () => {
					tl.to(`.dot-${i}`, {
						background: "#0072FA"
					})
				},
				ease: "expo.out",
				scrollTrigger: {
					trigger: "#content" + i,
					start: `top +=${window.innerHeight - 450}`,
					end: '0',
					scrub: 1
				},
			})
			tl.from(`.dot-${i}`, {
				background: "#0072FA"
			})
		}
	}
	const offsetScroll = (id) => {
		const el = document.getElementById(id)
		window.scrollTo(0, el.offsetTop - 130)
	}

	import {useRoute} from "nuxt/app";
	const route = useRoute()

	const news = toRef({})
	const loaded = ref(false)
	const cats = ['Технологии', 'Дизайн', 'Разработка', 'Реклама', 'Аналитика']

	const { data } = await useAsyncData('newsPage', async () => {
		return await $_blog_page_loadNews()
	})
	if(data.value) $_blog_page_setData(data.value)

	const dateNews = computed(() => {
		const date = new Date(news.value.date_create)
		return `${date.getDate()} ${storeUtils.getMothText(date.getMonth())} ${date.getFullYear()}`
	})

	async function $_blog_page_loadNews(){
		try{
			let newsPage = null
			const res = await $makeRequest('GET', 'news/' + route.params.link)
			if(res&&!res.err){
				newsPage = res.news
				const step = 1 / newsPage.content.length
				newsPage.content.forEach((p, idx) => {
					p.step = idx * step
				})
			}

			return {news: newsPage}
		} catch (error) {
			console.error('Error load news', error.message)
			return null
		}
	}

	function $_blog_page_setData(data){
		news.value = data.news
		useHead({
			title: news.value.title,
			meta: [
				{ name: 'description', content: news.value.description },
				{ property: 'og:title', content: news.value.title },
				{ property: 'og:description', content: news.value.description },
				{ property: 'og:image', content: `${useRuntimeConfig().public.apiServerImg}photo/news/${news.value.img}` },
				{ property: 'og:type', content: 'article' },
				{ property: 'article:author', content: 'Компания разработчик PRAI' },
				{ property: 'article:section', content: cats[news.value.cat - 1] },
				{ property: 'article:published_time', content: news.value.date_create },
				{ property: 'article:modified_time', content: news.value.date_create },
			]
		})
		loaded.value = true
	}
	onMounted(() => {
		nextTick(() => $_blog_page_setGSAP())
	})

</script>
