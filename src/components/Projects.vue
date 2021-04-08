<template>
	<section id="myProjects">
		<base-card v-for="project in projectList" :key="project">
			<div class="wrapper">
				<div class="project">
					<img :src="`${project.picture}`" />
					<div class="project_item">
						<p class="project_title">{{ project.title }}</p>
						<router-link v-if="project.type === 'internal'" :to="project.link"
							><base-button>Go</base-button></router-link
						>
						<a v-else target="_blank" :href="project.link"><base-button>Go</base-button></a>
					</div>
				</div>
				<div class="project_desc">
					<p>{{ project.description }}</p>
				</div>
			</div>
		</base-card>
	</section>
</template>

<script>
	export default {
		name: "Projects",

		data() {
			return {
				projectList: [
					{
						type: "external",
						title: "GreekCamps",
						picture: "https://builtforweb.com/wp-content/uploads/2020/10/web-design.jpg",
						link: "https://murmuring-meadow-93919.herokuapp.com/",
						description:
							"Node.js web application with the use of Express, Mongoose, MongoDB, npm and Bootstrap. Deployed on Heroku featuring authentication and responsive design.",
					},
					{
						type: "internal",
						title: "Slayer Game",
						picture: "https://thefilmstage.com/wp-content/uploads/2012/09/monstersinc-759x500.jpeg",
						link: "/slayer",
						description: "A player versus computer game built in Vue 3, utilising Flexbox and Vue router.",
					},
					{
						type: "internal",
						title: "Calculator",
						picture:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYlx0jD8aFQ-RC9nN_xetzVKET_Dah1br_g&usqp=CAU",
						link: "/calculator",
						description: "A simple calculator with HTML, CSS and Javascript.",
					},
					{
						type: "external",
						title: "M.Sc. Thesis",
						picture:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGUkHDiXGtPkX1LXesySK_9mdCVG6IqJ_XQ&usqp=CAU",
						link: process.env.BASE_URL + "Thesis.pdf",
						description: "My M.Sc. thesis in meteorology. A study using Fortran for the calculations.",
					},
					{
						type: "external",
						title: "M.Sc. Internship",
						picture:
							"data:image/jpeg;base64,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",
						link: process.env.BASE_URL + "Internship.pdf",
						description: "My M.Sc. internship report in meteorology. A study using PHP for the calculations.",
					},
				],
			};
		},
	};
</script>

<style scoped>
	#myProjects {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding-top: 20px;
	}

	img {
		padding: 5px;
		width: 350px;
		max-width: 100%;
		height: 30vh;
		border-radius: 20px;
	}

	.card {
		margin-bottom: 30px;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
	}
	.project {
		display: flex;
	}
	.project_item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		margin: 0 auto;
	}
	.project_title {
		font-size: 20px;
		font-weight: 900;
	}
	.project_desc {
		text-align: left;
		width: 35rem;
	}
</style>
