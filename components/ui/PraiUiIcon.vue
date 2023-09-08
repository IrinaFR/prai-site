<template lang="pug">
.prai-icon(:style="style")
	img(:src="`/img/${icon}`")
</template>

<script>
	export default {
		props: {
			icon: String,
			color: String,
			size: {
				type: [String, Number],
				default: 32
			},
			shadow: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			style(){
				let style = `background:${this.color};width:${this.size}px;min-width:${this.size}px;height:${this.size}px;`
				if(this.shadow) style += `box-shadow: 0px 13px 21px 7px ${this.hexToRgb(this.color)}`
				return style
			}
		},
		methods: {
			hexToRgb(hex) {
				const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
				return result
					? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, .30)`
					: 'transparent';
			}
		}
	}
</script>

<style lang="scss">
	.prai-icon{
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		img{
			width: 80%;
		}
	}
</style>
