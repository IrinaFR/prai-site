<template lang="pug">
.container
	.stack
		.title-block
			.subtitle-card.uppercase(:class="props.class") Стек
			h2.title Стек технологий
			.description.black-color Мы используем современные технологии, обеспечивающие скорость, безопасность и надёжность разрабатываемых проектов.
				br
				br
				| Используемый стек определяется под каждый проект и зависит от его требований.
		.stack-tiles.stack-tiles--vertical
			.stack-tiles-line.stack-tiles-line--vertical
				.stack-tiles-line__group
					.tile(v-for="icon in backend" )
						.icon
							img(:src="'/img/stack/' + icon.icon")
						.title {{icon.title}}
				.stack-tiles-line__group
					.tile(v-for="icon in backend" )
						.icon
							img(:src="'/img/stack/' + icon.icon")
						.title {{icon.title}}
			.stack-tiles-line.stack-tiles-line--vertical.stack-tiles-line--reverse
				.stack-tiles-line__group
					.tile(v-for="icon in frontend" )
						.icon
							img(:src="'/img/stack/' + icon.icon")
						.title {{icon.title}}
				.stack-tiles-line__group
					.tile(v-for="icon in frontend" )
						.icon
							img(:src="'/img/stack/' + icon.icon")
						.title {{icon.title}}
			.stack-tiles-line.stack-tiles-line--vertical
				.stack-tiles-line__group
					.tile(v-for="icon in devops" )
						.icon
							img(:src="'/img/stack/' + icon.icon")
						.title {{icon.title}}
				.stack-tiles-line__group
					.tile(v-for="icon in devops" )
						.icon
							img(:src="'/img/stack/' + icon.icon")
						.title {{icon.title}}
</template>

<script setup>
	const props = defineProps({
		class: {
			type: String,
			default: ''
		}
	})

	const backend = [
		{icon: 'nodejs.svg', title: 'NodeJS'},
		{icon: 'postgres.svg', title: 'PostgreSQL'},
		{icon: 'redis.svg', title: 'Redis'},
		{icon: 'mysql.svg', title: 'MySQL'},
		{icon: 'php.svg', title: 'PHP'},
		{icon: 'python.svg', title: 'Python'},
	]
	const frontend = [
		{icon: 'vuejs.svg', title: 'VueJS'},
		{icon: 'nuxtjs.svg', title: 'NuxtJS'},
		{icon: 'react.svg', title: 'ReactJS'},
		{icon: 'typescript.svg', title: 'Type Script'},
		{icon: 'figma.svg', title: 'Figma'},
		{icon: 'capacitorjs.svg', title: 'CapacitorJS'},
		{icon: 'ionic.svg', title: 'Ionic'},
		{icon: 'chartjs.svg', title: 'Chart JS'},
		{icon: 'd3.svg', title: 'D3.js'},
	]
	const devops = [
		{icon: 'gitlab.svg', title: 'GitLab'},
		{icon: 'docker.svg', title: 'Docker'},
		{icon: 'kubernetes.svg', title: 'Kubernetes'},
		{icon: 'elasticsearch.svg', title: 'ElasticSearch'},
		{icon: 'jenkins.svg', title: 'Jenkins'},
		{icon: 'heroku.svg', title: 'Heroku'},
		{icon: 'nginx.svg', title: 'nginx'},
		{icon: 'apache.svg', title: 'Apache'},
		{icon: 'pandas.svg', title: 'Pandas'},
	]
</script>

<style scoped lang="scss">
	.stack{
		border-radius: $radius-small;
		border: solid 1px $light-border;
		background: $white url("/public/img/pattern-stack.png") repeat;
		background-size: 100px;
		display: grid;
		max-height: 428px;
		overflow: hidden;
		grid-template-columns: repeat(2, 1fr);
		margin-bottom: 50px;
		.title-block{
			padding: 30px;
			.description{
				max-width: fit-content;
			}
		}
		&-tiles {
			display: flex;
			flex-direction: column;
			gap: 35px 24px;
			margin: auto;
			max-width: 100%;
			max-height: 428px;
			height: 428px;
			mask-image: linear-gradient(
				to bottom,
				hsl(0 0% 0% / 0),
				hsl(0 0% 0% / 1) 10%,
				hsl(0 0% 0% / 1) 100%,
				hsl(0 0% 0% / 0)
			);
		}
		@media(max-width: 768px){
			display: flex;
			flex-direction: column;
			row-gap: 16px;
			max-height: fit-content;
			.title-block{
				height: fit-content;
			}
		}
	}

	.stack-tiles-line {
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: 35px 24px;

		&:nth-child(3){
			animation-delay: -5s;
		}
		.tile {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 10px;
			width: 128px;
			height: 103px;
			.icon{
				width: 68px;
				height: 68px;
				background: $white;
				border-radius: 15px;
				box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.25);
				display: flex;
				align-items: center;
				justify-content: center;
				img{
					max-width: 42px;
					max-height: 42px;
				}
			}
			.title{
				line-height: 25px;
				border-radius: 12px;
				background: #4E4E4E;
				padding: 0 20px;
				box-shadow: 0 4px 20px 0 rgba(69, 93, 178, 0.12);
				font-size: 12px;
				font-weight: 700;
				color: $white;
				@media(max-width: 400px){
					padding: 0 5px;
				}
			}
		}
	}

	.stack-tiles-line__group {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 35px 24px;
		max-width: 128px;
		animation: scroll-y 30s linear infinite;
	}

	.stack-tiles-line--vertical,
	.stack-tiles-line--vertical .stack-tiles-line__group {
		flex-direction: column;
	}

	.stack-tiles-line--reverse .stack-tiles-line__group {
		animation-direction: reverse;
		animation-delay: -3s;
	}

	@keyframes scroll-y {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(calc(-100% - 16px));
		}
	}



	.stack-tiles--vertical {
		flex-direction: row;
		height: 100%;
	}


</style>
