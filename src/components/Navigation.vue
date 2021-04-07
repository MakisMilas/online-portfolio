<template>
	<nav>
		<ul>
			<li v-for="link in links" :key="link">
				<a v-if="link.title" :href="link.to" v-smooth-scroll>
					{{ link.title }}
				</a>
				<a v-else :href="link.to" target="_blank" @mouseenter="hoveredIn" @mouseleave="hoveredOut">
					<i :class="link.link" />
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: "Navigation",
		data() {
			return {
				links: [
					{ title: "Home", to: "#app" },
					{ title: "About", to: "#aboutMe" },
					{ title: "Projects", to: "#myProjects" },
					{ title: "Contact", to: "#contactForm" },
					{ link: "devicon-linkedin-plain", to: "https://www.linkedin.com/in/chrysostomos-makis-milas-60224055/" },
				],
			};
		},
		methods: {
			hoveredIn() {
				this.links[4].link = "devicon-linkedin-plain colored";
			},
			hoveredOut() {
				this.links[4].link = "devicon-linkedin-plain";
			},
		},
	};
</script>

<style scoped>
	nav {
		position: fixed;
		width: 100%;
		background-color: rgb(32, 31, 31);
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		opacity: 0.9;
		z-index: 1;
	}
	ul {
		display: flex;
		align-items: center;
		list-style-type: none;
		padding: 0;
		margin: 0 50px;
		height: 4rem;
	}
	li {
		margin: 0 20px;
		font: 400 16px;
		transition: all 0.4s linear;
		backface-visibility: hidden;
		-webkit-font-smoothing: subpixel-antialiased;
		will-change: font-size;
	}

	li:last-child {
		margin-left: auto;
		font-size: 1.5rem;
	}

	li:hover {
		color: grey;
		font-size: 1.5rem;
	}

	a {
		text-decoration: none;
		color: inherit;
		padding: 10px;
	}
</style>
