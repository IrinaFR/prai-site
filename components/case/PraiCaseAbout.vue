<template lang="pug">
.case-about(:style="`--brandColor:${brandColor};`")
	.container
		.case-about-block
			.case-about-info
				.title-block.white
					.subtitle-card.uppercase(:style="`--brandColor:${brandColor};--brandColorOpacity:${brandColor}33`") Информация
					h2.title О проекте
				.links
					a(:href="about.app_store" title="AppStore" v-if="about.app_store" )
						img(src="/img/cases/appstore.svg" alt="icon")
					a(:href="about.play_market" title="Play Market" v-if="about.play_market" )
						img(src="/img/cases/playmarket.svg" alt="icon")
					a(:href="about.rustore" title="RuStore" v-if="about.rustore" )
						img(src="/img/cases/rustore.svg" alt="icon")
					a(:href="about.app_gallery" title="AppGallery" v-if="about.app_gallery" )
						img(src="/img/cases/appgallery.svg" alt="icon")
				a.site(:href="about.site" v-if="about.site" target="_blank") {{about.site}}
			.case-about-description(v-html="about.description" )
</template>

<script>
	export default {
		props: {
			brandColor: String,
			about: Object
		},
	}
</script>

<style scoped lang="scss">
	.case-about{
		width: 100%;
		padding: 50px 0;
		margin-top: -56px;
		background: $bg-block-black;
		position: relative;
		z-index: 1;
		border-top-left-radius: 50px;
		border-top-right-radius: 50px;
		.case-about-block{
			display: flex;
			justify-content: space-between;
			column-gap: 80px;
			@media(max-width: 715px){
				flex-wrap: wrap;
			}
		}
		&-info{
			min-width: fit-content;
			@media(max-width: 715px){
				margin-bottom: 24px;
			}
			.title{
				margin-bottom: 16px;
			}
			.links{
				display: flex;
				align-items: center;
				column-gap: 16px;
			}
			.site{
				display: block;
				margin-top: 28px;
				font-size: pxToRem(12);
				font-weight: 700;
				color: var(--brandColor, $white);
			}
		}
		&-description{
			flex-grow: 1;
			color: $white;
			@include htmlDescription
		}
	}
</style>