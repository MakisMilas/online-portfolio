<template>
	<ul class="skills">
		<li v-for="skill in skills" :key="skill">
			<i :class="skill.icon" />
			{{ skill.name }}
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				skills: [
					{ name: "HTML5", icon: "devicon-html5-plain colored" },
					{ name: "CSS3", icon: "devicon-css3-plain colored" },
					{ name: "Node.js", icon: "devicon-nodejs-plain colored" },
					{ name: "JavaScript", icon: "devicon-javascript-plain colored" },
					{ name: "Git", icon: "devicon-git-plain colored" },
					{ name: "jQuery", icon: "devicon-jquery-plain colored" },
					{ name: "Vue.js", icon: "devicon-vuejs-plain colored" },
					{ name: "npm", icon: "devicon-npm-original-wordmark colored" },
					{ name: "Bootstrap4.5", icon: "devicon-bootstrap-plain colored" },
					{ name: "Firebase", icon: "devicon-firebase-plain colored" },
					{ name: "PHP", icon: "devicon-php-plain colored" },
				],
			};
		},
	};
</script>

<style scoped>
	ul {
		display: flex;
		flex-flow: column wrap;
		list-style: none;
		margin: 0 auto;
		padding: 0;
		height: 400px;
		align-content: center;
		width: 800px;
	}
	li {
		font-size: 1.5em;
		display: flex;
		align-items: center;
		width: 150px;
		height: 80px;
		padding: 15px;
		flex-basis: auto;
	}

	i {
		padding: 8px;
		font-size: 2rem;
	}
</style>
