<template lang="pug">
.cookies(v-if="cookies" )
	.cookies-info
		img(src="/img/feedback/eat.png")
		.text Сайт использует cookie.
			nuxt-link(to="/politika") Почему?
	button.agree(@click="$_ui_cookies_agreeCookie") Даю согласие
</template>

<script>
	export default {
		data(){
			return{
				cookies: false
			}
		},
		created() {
			if(process.client)
				if(!localStorage.cookiesAgree) this.cookies = true
		},
		methods: {
			$_ui_cookies_agreeCookie(){
				localStorage.setItem('cookiesAgree', 'true')
				this.cookies = false
			}
		}
	}
</script>

<style scoped lang="scss">
	.cookies{
		position: fixed;
		z-index: 700;
		left: 0;
		right: 0;
		margin: auto;
		bottom: 35px;
		width: 550px;
		max-width: calc(100% - 48px - 10px);
		background: $bg-block-black url("public/img/dot.png") repeat;
		background-size: 14px;
		border-radius: $radius-small;
		padding: 24px;
		color: $white;
		display: flex;
		column-gap: 16px;
		align-items: center;
		justify-content: space-between;
		box-shadow:  0 0 0 5px rgba(20, 29, 246, 0.45);
		&-info{
			display: flex;
			column-gap: 16px;
			align-items: center;
		}
		img{
			max-width: 100px;
		}
		a{
			color: $blue;
			margin-left: 5px;
		}
		.agree{
			height: 50px;
			padding: 0 24px;
			border-radius: $radius-small;
			background: $blue;
			color: $white;
			border: none;
			outline: none;
			cursor: pointer;
			transition: $anim-small;
			&:hover{
				background: $dark-blue;
			}
		}
		@media(max-width: 435px) {
			flex-wrap: wrap;
			row-gap: 16px;
			.agree{
				flex: 1;
			}
		}
	}
</style>