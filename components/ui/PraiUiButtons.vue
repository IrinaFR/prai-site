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

<style scoped>
	@property --x {
		syntax: '<length>';
		inherits: false;
		initial-value: 0px;
	}
	@property --r {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}
	.btn-animate{
		width: fit-content;
		height: 48px;
		padding: 1px;
		position: relative;
		border-radius: 50px;
		cursor: pointer;
		transition: .5s cubic-bezier(.645, .045, .355, 1);
		color: #ffffff;
		font-size: 14px;
		font-weight: 500;
	}
	.btn-animate:hover{
		box-shadow: 0 0 46px 29px rgba(18, 28, 231, 0.20), 1px 1px 0 5px rgba(20, 29, 246, 0.25);
	}
	.btn-animate::after{
		content: '';
		position: absolute;
		z-index: 0;
		border-radius: 50px;
		width: calc(100% + 2px);
		height: calc(100% + 2px);
		background: conic-gradient(from calc(var(--r) - 80deg) at var(--x) 28px, #AA03E4 0%, #FFD6FB 20%, #AA03E4 25%);
		animation: -0.64s rotate 3s linear infinite, -0.64s x 3s linear infinite;
		opacity: 0;
		top: 0;
		left: 0;
		transition: 1.5s cubic-bezier(.645, .045, .355, 1);
	}
	.btn-animate:hover::after{
		opacity: 1;
	}
	.btn-animate .content{
		padding: 0 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 1;
		height: 100%;
		background: #0072FA;
		inset: 1px;
		border-radius: 45px;
	}
	 /*light-pink */
	.btn-animate.light-pink::after{
		background: conic-gradient(from calc(var(--r) - 80deg) at var(--x) 28px, #8F00FF 0%, #D6D6FF 20%, #8F00FF 25%);
	}
	.btn-animate.light-pink:hover{
		box-shadow: 0 0 46px 29px rgba(250, 0, 150, 0.20), 1px 1px 0 5px rgba(250, 0, 150, 0.25);
	}
	.btn-animate.light-pink .content{
		background: #FA0096;
	}
	/* green */
	.btn-animate.green::after{
		background: conic-gradient(from calc(var(--r) - 80deg) at var(--x) 28px, #FFA800 0%, #FFF6D6 20%, #FFA800 25%);
	}
	.btn-animate.green:hover{
		box-shadow: 0 0 46px 29px rgba(0, 200, 56, 0.20), 1px 1px 0 5px rgba(0, 200, 56, 0.25);
	}
	.btn-animate.green .content{
		background: #00C838;
	}

	/*full*/
	.btn-animate.btn-full::after{
		animation: -0.64s rotate 3s linear infinite, -0.64s xFull 3s linear infinite;
	}
	@media(max-width: 945px){
		.btn-animate.btn-full::after{
			animation: -0.64s rotate 3s linear infinite, -0.64s x 3s linear infinite;
		}
	}

	@keyframes x {
		0% {
			--x: 40px;
		}
		32.82275711% {
			--x: 227px;
		}
		50% {
			--x: 227px;
		}
		82.82275711% {
			--x: 40px;
		}
		100% {
			--x: 40px;
		}
	}
	@keyframes xFull {
		0% {
			--x: 40px;
		}
		32.82275711% {
			--x: 430px;
		}
		50% {
			--x: 430px;
		}
		82.82275711% {
			--x: 40px;
		}
		100% {
			--x: 40px;
		}
	}

	@keyframes rotate {
		0% {
			--r: 0deg;
		}
		32.82275711% {
			--r: 0deg;
		}
		50% {
			--r: 180deg;
		}
		82.82275711% {
			--r: 180deg;
		}
		100% {
			--r: 360deg;
		}
	}


	/*transition: $anim-long;
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
		}*/



</style>
