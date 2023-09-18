<template lang="pug">
.container
	.title-block.mt-50
		.subtitle-card.blue.uppercase вопрос - ответ
		h2.title Частые вопросы
	.list-faq
		.list-faq-item(v-for="faq in 5" :key="faq" :ref="'faq' + faq" @click="$_prai_ui_faq_animateHeight('faq' + faq)" )
			.title Какой у вас опыт в разработке нейросетей? опыт в разработке нейросетей?
				img(src="/img/arrow-full.svg")
			.description Мы предоставляем гарантию на свои работы, по истечении её срока мы можем заключить с вами договор на техническую поддержку. Он будет включать в себя определённое количество часов в месяц по установленной абонентской плате (здесь мы с вами обсудим всё индивидуально). В рамках этих часов можно поддерживать актуальность и стабильность работы приложения или проводить доработки по функциональности.

</template>

<script>
	export default {
		methods: {
			$_prai_ui_faq_animateHeight(ref){
				const faq = this.$refs[ref][0]
				if(!faq.classList.contains('open')){
					faq.classList.add('open')
					this.$nextTick(() => {
						faq.style.minHeight = `${ faq.scrollHeight + 34}px`
					})
				} else {
					faq.classList.remove('open')
					faq.style.minHeight = `20px`

				}
			},
		}
	}
</script>

<style lang="scss">
	.list-faq-item{
		border-radius: $radius-small;
		border: 1px solid $light-border;
		background: $white;
		padding: 16px 50px;
		min-height: 20px;
		transition: all $anim-small;
		overflow: hidden;
		cursor: pointer;
		&:hover{
			border: solid 1px $blue;
		}
		& + .list-faq-item{
			margin-top: 16px;
		}
		.title{
			font-weight: 700;
			display: flex;
			column-gap: 12px;
			justify-content: space-between;
			img{
				transition: $anim-small;
			}
		}
		.description{
			height: 0;
			opacity: 0;
			transition: $anim-small;
			margin-top: 0;
		}
		&.open {
			max-height: fit-content;
			.title {
				img{
					transform: scale(1, -1);
				}
			}
			.description{
				opacity: 1;
				margin-top: 35px;
			}
		}

	}
</style>
