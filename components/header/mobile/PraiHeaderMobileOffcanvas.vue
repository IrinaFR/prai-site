<template lang="pug">
.offcanvas.show(:ref="'offcanvasMobile' + id")
	.offcanvas-header
		button.offcanvas-btn(@click="$_header_mobile_offcanvas_toggle('close')")
			img(src="/img/arrow.svg")
			| Закрыть меню
	.offcanvas-body
		slot
	.offcanvas-footer
		button.offcanvas-btn.back(@click="$_header_mobile_offcanvas_toggle('back')")
			img(src="/img/arrow.svg")
			| Назад
</template>

<script>
	export default {
		emit: ['close', 'back'],
		props: {
			id: String
		},
		methods: {
			async $_header_mobile_offcanvas_toggle(emit){
				await this.$refs['offcanvasMobile' + this.id].classList.toggle('show')
				if(emit) this.$emit(emit)
			}
		}
	}
</script>

<style scoped lang="scss">
	.offcanvas{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 110;
		width: 100vw;
		height: 100vh;
		background: $white;
		transform: translateX(100%);
		transition: $anim-long;
		&.show{
			animation: fade-in $anim-long forwards !important;
		}
		&-header{
			height: 65px;
			width: calc(100% - 20px);
			display: flex;
			align-items: center;
			padding: 0 10px;
			justify-content: end;
		}
		&-body{
			padding: 0 10px;
		}
		&-btn{
			height: 35px;
			padding: 0 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			column-gap: 8px;
			border-radius: 14px;
			background: $white;
			border: solid 1px $light-border;
			font-size: 12px;
			font-weight: 500;
			img{
				filter: brightness(0);
				transform: rotate(90deg);
			}
		}
		&-footer{
			height: 65px;
			align-items: center;
			padding: 0 10px;
			justify-content: end;
			.back{
				position: absolute;
				bottom: 20px;
				right: 20px;
			}
		}
	}
	@keyframes fade-in {
		0% { transform: translateX(100%) }
		100% { transform: translateX(0) }
	}
	@keyframes fade-out {
		0% { transform: translateX(0) }
		100% { transform: translateX(100%) }
	}
</style>
