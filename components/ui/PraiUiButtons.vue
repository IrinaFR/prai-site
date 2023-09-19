<template lang="pug">
.btn-animate(:class="$props.class")
	.base
	.content {{text}}

</template>

<script>
	export default {
		props: {
			text: String,
			class: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style scoped lang="scss">
	.btn-animate{
		font-size: 14px;
		font-weight: 500;
		color: $white;
		position: relative;
		width: fit-content;
		cursor: pointer;
		transition: $anim-long;
		box-shadow: 0 0 0 rgba(18, 28, 231, 0);
		border-radius: 33px;
		&:hover{
			box-shadow: 0 0 46px 29px rgba(18, 28, 231, 0.20);
			.base{
				top: 0;
				background: #ffffff;
			}
			.content{
				box-shadow: 0 0 0 5px rgba(20, 29, 246, 0.25);
				&::before{
					animation-play-state: running;
					opacity: 1;
				}
			}
		}
		.base{
			height: 48px;
			background: #5487EB;
			border-radius: 33px;
			width: 100%;
			position: absolute;
			top: -2px;
			transition: $anim-long;
		}
		.content{
			background: $blue;
			height: 48px;
			border-radius: 33px;
			display: flex;
			align-items: center;
			column-gap: 8px;
			justify-content: center;
			padding: 0 55px;
			position: relative;
			z-index: 0;
			transition: $anim-long;
			overflow: hidden;
			&::before {
				content: '';
				position: absolute;
				z-index: -2;
				left: -50%;
				top: -150%;
				width: 200%;
				height: 600%;
				background-color: #399953;
				background-repeat: no-repeat;
				background-size: 50% 50%, 50% 50%;
				background-position: 0 0, 100% 0, 100% 100%, 0 100%;
				background-image: linear-gradient(#ffffff, #C521FF), linear-gradient(#C521FF, #C521FF), linear-gradient(#C521FF, #C521FF), linear-gradient(#C521FF, #ffffff);
				animation: rotate 4s linear infinite;
				animation-delay: 1s;
				animation-play-state: paused;
				transition: opacity 3s ease;
				opacity: 0;
			}

			&::after {
				content: '';
				position: absolute;
				z-index: -1;
				left: 2px;
				top: 2px;
				width: calc(100% - 4px);
				height: calc(100% - 4px);
				background: $blue;
				border-radius: 33px;
			}
		}
		&.light-pink{
			&:hover{
				box-shadow: 0 0 46px 29px rgba(246, 20, 156, 0.20);
				.content:hover{
					box-shadow: 0 0 0 5px rgba(246, 20, 156, 0.25);
				}
			}
			.base{
				background: $light-pink;
			}
			.content{
				background: $light-pink;
				&::before{
					background-image: linear-gradient(#ffb4c8, rgba(255, 33, 74, 0.99)), linear-gradient(#ff2121, rgba(255, 33, 59, 0.99)), linear-gradient(#ED2127, #ED2127), linear-gradient(#ED2127, #ffffff);
				}
				&::after{
					background:$light-pink;
				}
			}
		}
	}
	@keyframes rotate {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
