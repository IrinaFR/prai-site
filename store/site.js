import { defineStore } from 'pinia'
export const useSiteStore = defineStore('site', {
	state: () => ({
		news: [],
		newsTags: [
			{title: 'Все', value: 0},
			{title: 'Технологии', value: 1},
			{title: 'Дизайн', value: 2},
			{title: 'Разработка', value: 3},
			{title: 'Реклама', value: 4},
			{title: 'Аналитика', value: 5}
		],
		cases: [],
		count_case: 0,
		count_hack: 0
	}),
	getters: {
		getNameTagById: state => id => {
			return state.newsTags.filter(t => t.value === id)[0].title
		}
	},
	actions: {
		async setNews(news){
			this.news = news
		},
		async setCases(cases){
			this.cases = cases
		},
		async setCounts(count_case, count_hack){
			this.count_case = count_case
			this.count_hack = count_hack
		}
	}
})
