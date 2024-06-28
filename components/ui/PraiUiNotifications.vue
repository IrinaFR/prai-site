<template lang="pug">
.contentNotifications(v-if="storeNotification.notifications.length")
	transition-group(name="notification" tag="p")
		.notification(v-for="(n, index) in storeNotification.getNotifications" :key="n.id" :class="n.type")
			img.icon(:src="'/img/' + n.img" v-if="n.img")
			.text(v-html="n.text")
			.del(@click="storeNotification.addNotification({delete:index})")
				img(src="/img/feedback/close-grey.svg")
</template>

<script>
	import {useNotificationStore} from "/store/notification";
	export default {
		data(){
			return{
				storeNotification: useNotificationStore(),
			}
		},
		methods: {
			// $_ui_notifications_getStyle(type) {
			// 	switch (type){
			// 		case 'warning': return '#FF9500'
			// 		case 'success': return '#00B46F'
			// 		case 'danger': return '#E73B0F'
			// 		case 'info': return '#4773FC'
			// 		default: return 'red'
			// 	}
			// }
		}
	}
</script>

<style scoped lang="scss">

	.contentNotifications{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 16px;
		z-index: 2100;
		background: none;
		p{
			width: calc(100% - 32px);
			display: flex;
			justify-content: end;
		}
		.notification {
			position: relative;
			background: $white;
			box-shadow: 0 0 2px 0 rgba(0,0,0, 0.12), 0 8px 16px 0 rgba(0,0,0, 0.14);
			transition: .5s ease-in-out;
			border: solid 1px $light-border;
			transform: none;
			width: fit-content;
			height: fit-content;
			padding: 13px 16px;
			border-radius: 12px;
			display: flex;
			column-gap: 16px;
			align-items: center;
			max-width: 768px;
			&-enter-active,
			&-leave-active {
				animation: bounce-in .5s ease-in-out;
				animation-fill-mode: forwards;
			}
			.icon{
				max-width: 24px;
				width: 24px;
				max-height: 24px;
			}
			.text{
				flex-grow: 1;
				font-weight: 500;
				font-size: pxToRem(18);
				line-height: 22px;
				color: $text-black;
			}
			.del{
				max-height: 24px;
				cursor: pointer;
				& img{
					width: 24px;
					height: 24px;

				}
			}
			@media (max-width: 500px){
				width: 100%;
			}
			// синее
			&.info{
				background: $blue;
				.text{
					color: $white;
				}
				img{
					filter: brightness(10);
				}
			}
			// зелёный
			&.success{
				background: $green;
				.text{
					color: $white;
				}
				img{
					filter: brightness(10);
				}
			}
		}
	}
	.notification-enter-active, .notification-leave-active {
		animation: bounce-in .5s ease-in-out;
		animation-fill-mode: forwards;
	}
	.notification-enter, .notification-leave-to {
		animation: bounce-of .3s ease-in-out;
		animation-fill-mode: forwards;
	}
	@keyframes bounce-in {
		0% {
			transform: translateX(150%);
		}
		80% {
			transform: translateX(-30px);
		}
		100% {
			transform: translateX(0);
		}
	}
	@keyframes bounce-of {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(150%);
		}
	}
</style>
