<template lang="pug">
.block-share
	.block-share-social(v-if="social" )
		ShareNetwork.share(
			network="vk"
			:url="storeRequest.config.public.baseUrl + link"
			:title="title"
			:description="desc")
			img(src="/img/feedback/vk.svg")
		ShareNetwork.share(
			network="telegram"
			:url="storeRequest.config.public.baseUrl + link"
			:title="title"
			:description="desc")
			img(src="/img/feedback/telegram.svg")
		ShareNetwork.share(
			network="whatsapp"
			:url="storeRequest.config.public.baseUrl + link"
			:title="title"
			:description="desc")
			img(src="/img/feedback/whatsapp.svg")
		ShareNetwork.share(
			network="odnoklassniki"
			:url="storeRequest.config.public.baseUrl + link"
			:title="title"
			:description="desc")
			img(src="/img/feedback/ok.svg")
	.share.copy(@click="$_news_page_copyLink()" ref="copyLink" )
		img(src="/img/feedback/link.svg")
		span(ref="refShareCopy") Скопировать ссылку
	.share.fire
		img(src="/img/news/fire.svg")
		| {{likes}}
</template>

<script>
	import {useRequestStore} from "/store/request";
	export default {
		props: {
			likes: Number,
			link: String,
			title: {
				type: String,
				default: 'Текст'
			},
			desc: {
				type: String,
				default: 'Текст'
			},
			social: {
				type: Boolean,
				default: true
			}
		},
		data(){
			return{
				storeRequest: useRequestStore()
			}
		},
		methods: {
			$_news_page_copyLink(){
				navigator.clipboard
					.writeText(window.location.href)
					.then(() => {
						this.$refs.copyLink.innerHTML = 'Скопировано <img class="copied" style="width: 48px" src="/img/feedback/bellissimo.png"/>'
						setTimeout(() => {
							this.$refs.copyLink.innerHTML = 'Скопировать ссылку'
						}, 2000)
					})
			}
		}
	}
</script>

<style scoped lang="scss">
	.block-share{
		display: flex;
		gap: 16px;
		@media(max-width: 768px){
			flex-wrap: wrap;
		}
		&-social{
			display: flex;
			gap: 16px;
		}
		.share{
			padding: 12px;
			border: solid 1px $bg-block-black;
			border-radius: 13px;
			height: 48px;
			min-width: 48px;
			font-size: 14px;
			line-height: 120%;
			font-weight: 600;
			display: flex;
			align-items: center;
			justify-content: center;
			column-gap: 8px;
			cursor: pointer;
			transition: all $anim-small;
			box-sizing: border-box;
			&:hover{
				border: solid 1px $blue;
			}

			&.fire{
				img{
					filter: brightness(0);
				}
			}
			@media(max-width: 768px){
				&.copy,
				&.fire{
					width: 100%;
				}
			}
			span {
				display: flex;
				column-gap: 5px;
				align-items: center;
			}
			.copied{
				width: 48px;
				max-width: 48px;
			}
		}
		&.light{
			.share{
				border: solid 1px $white;
				color: $white;
				&:hover{
					border: solid 1px $blue;
				}
				img{
					filter: brightness(20);
				}
				&.fire{
					img{
						filter: brightness(1);
					}
				}
			}
		}
	}
</style>