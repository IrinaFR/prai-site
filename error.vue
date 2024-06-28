<template lang="pug">
.root-not-found
	.root-not-found-content
		.glitch(title="404") 404
		.tip Страница не найдена:
			br
			| {{$route.fullPath}}
		nuxt-link(to="/") На главную
</template>

<style scoped lang="scss">
	.root-not-found{
		background: $bg-block-black;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		&-content{
			color: $white;

			text-align: center;
			.glitch{
				font-size: pxToRem(70);
				font-weight: 600;
				margin-bottom: 50px;
				position: relative;
				line-height: 52px;
				animation: glitch 1s linear infinite;

				@keyframes glitch{
					2%,64%{
						transform: translate(2px,0) skew(0deg);
					}
					4%,60%{
						transform: translate(-2px,0) skew(0deg);
					}
					62%{
						transform: translate(0,0) skew(5deg);
					}
				}
				&:before,
				&:after{
					content: attr(title);
					position: absolute;
					left: 0;
					height: 100%;
					width: 100%;
				}
				&:before{
					animation: glitchTop 1s linear infinite;
					clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
					-webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
				}
				@keyframes glitchTop{
					2%,64%{
						transform: translate(2px,-2px);
					}
					4%,60%{
						transform: translate(-2px,2px);
					}
					62%{
						transform: translate(13px,-1px) skew(-13deg);
					}
				}
				&:after{
					animation: glitchBotom 1.5s linear infinite;
					clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
					-webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
				}

				@keyframes glitchBotom{
					2%,64%{
						transform: translate(-2px,0);
					}
					4%,60%{
						transform: translate(-2px,0);
					}
					62%{
						transform: translate(-22px,5px) skew(21deg);
					}
				}
			}
			.tip{
				font-size: pxToRem(25);
				line-height: 140%;
			}
			a{
				display: block;
				margin-top: 24px;
				color: $blue;
				font-size: pxToRem(20);
			}
		}
	}
</style>