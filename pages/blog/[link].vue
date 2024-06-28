<template lang="pug">
.root-news-page
	.container(v-if="loaded" )
		.news-page-content
			.news-page-content-head
				img(:src="`${storeRequest.config.app.apiServerImg}photo/news/${news.img}`")
				.news-page-content-info
					.tags
						.subtitle-card.blue.uppercase {{storeSite.getNameTagById(news.cat)}}
						.date
							img(src="/img/news/calendar.svg")
							| {{dateNews}}
					.title {{news.name}}
					PraiUiShare.light(:likes="news.likes || 1" :title="news.name" :link="'blog/' + news.short_name" :desc="news.description" :social="false")
			.news-page-content-description
				.paragraph(v-for="(item, idx) in news.content" :id="'content' + idx")
					.title(v-if="item.title") {{item.title}}
					.description.htmlDescription.black(v-html="item.description" )
			hr
			PraiUiShare.my-25(:likes="news.likes || 1" :title="news.name" :link="'blog/' + news.short_name" :desc="news.description")
		.news-page-toc
			.news-page-toc-progress
				.dot(v-for="count in news.content.length" :class="[`dot-${count-1}`]")
			.news-page-toc-titles
				.title(v-for="(dot, idx) in news.content" @click="offsetScroll('content' + idx)") {{dot.title}}

</template>


<script setup>
	import {ref, toRef, computed, nextTick, onMounted} from 'vue'
	import PraiUiShare from "/components/ui/PraiUiShare.vue";

	import {useHeaderStore} from "/store/header";
	const storeHeader = useHeaderStore()
	import {useRequestStore} from "/store/request";
	const storeRequest = useRequestStore()
	import {useSiteStore} from "/store/site";
	const storeSite = useSiteStore()
	import {useUtilsStore} from "/store/utils";
	const storeUtils = useUtilsStore()

	import { gsap } from "gsap/all";
	import { ScrollTrigger } from "gsap/ScrollTrigger";


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

	await useAsyncData('news', () => {
		$_blog_page_loadNews()
	})

	const dateNews = computed(() => {
		const date = new Date(news.value.date_create)
		return `${date.getDate()} ${storeUtils.getMothText(date.getMonth())} ${date.getFullYear()}`
	})

	async function $_blog_page_loadNews(){
		const res = await storeRequest.request('GET', 'news/' + route.params.link)
		if(res&&!res.err){
			news.value = res.news

			const step = 1 / news.value.content.length
			news.value.content.forEach((p, idx) => {
				p.step = idx * step
			})

			loaded.value = true

			nextTick(() => $_blog_page_setGSAP())


			useHead({
				title: news.value.title
			})
			useSeoMeta({
				title: news.value.name,
				ogTitle: news.value.name,
				description: news.value.name.description,
				ogDescription: news.value.name.description,
				ogImage: `${storeRequest.config.app.apiServerImg}photo/news/${news.value.img}`,
			})
		}
	}

</script>
