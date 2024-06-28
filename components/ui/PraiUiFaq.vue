<template lang="pug">
.container
	.title-block.mt-50
		.subtitle-card.blue.uppercase вопрос - ответ
		h2.title Частые вопросы
	.list-faq
		.list-faq-item(v-for="(faq, idx) in faqList" :key="faq" :ref="'faq' + idx" @click="$_prai_ui_faq_animateHeight('faq' + idx)" )
			.title {{faq.title}}
				img(src="/img/arrow-full.svg")
			.description {{faq.desc}}

</template>

<script>
	export default {
		data(){
			return{
				faqList: [
					{title: 'Какой опыт у вашей компании в разработке нейросетей, веб и мобильных приложений?', desc: ''},
					{title: 'Какова стоимость разработки проекта и каковы ваши условия оплаты?', desc: 'Стоимость разработки проекта зависит от его масштаба, сложности и требований. Мы готовы обсудить ваши потребности и предоставить подробную смету стоимости после тщательного анализа проекта. Что касается условий оплаты, мы гибки и открыты для обсуждения различных вариантов, включая оплату по факту завершённых этапов проекта, ежемесячные выплаты или другие согласованные условия.'},
					{title: 'Каковы сроки выполнения проекта?', desc: 'Сроки выполнения проекта также зависят от его сложности и объема. Мы стремимся к эффективной и своевременной разработке, при этом учитываем ваши желаемые сроки. После более подробного изучения требований к проекту мы можем предоставить точные сроки выполнения.'},
					{title: 'Есть ли у вас опыт работы с проектами в нашей отрасли?', desc: 'Мы имеем опыт работы с клиентами из различных отраслей, включая недвижимость, здравоохранение, производство, образование, транспорт и логистика, интернет вещей (IoT) и др. Наша адаптивная методология разработки позволяет нам успешно реализовывать проекты разной сложности в различных областях бизнеса.'},
					{title: 'Какой подход к разработке вы используете?', desc: 'Мы применяем гибкий подход к разработке, основанный на методологии спринтов. Это позволяет нам эффективно управлять проектом, быстро реагировать на изменения требований и предоставлять клиенту рабочие результаты на каждом этапе разработки. Мы также стремимся к постоянной коммуникации с клиентом для обеспечения прозрачности и высокого уровня удовлетворённости.'},
					{title: 'Каков ваш подход к поддержке и сопровождению после завершения проекта?', desc: 'Наша компания предоставляет полноценную поддержку и сопровождение после завершения проекта. Мы готовы предоставить обновления, исправления ошибок, техническую поддержку и консультации по дальнейшему развитию проекта. Наша цель - установить долгосрочные отношения с клиентами и обеспечить им надежное функционирование и успех их продуктов.'},
				]
			}
		},
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
