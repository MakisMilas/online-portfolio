<template>
	<div class="main">
		<TopSection />
		<base-card id="aboutMe">
			<base-title title="About Me" />
			<span>
				<p>
					My name is Chrysostomos Milas (but please call me Makis), I'm a self-starter web developer focused mainly on
					front end technologies and I'm currently based in Aarhus, Denmark.
				</p>
				<p>
					I started coding during my M.Sc. studies with FORTRAN and PHP and since then I've been learning on my own with
					my current focus being HTML5, CSS3, Vue.js, Flexbox and JavaScript. I've also worked with Node.js, Express,
					MongoDB and npm to build a blog app.
				</p>
				<p>
					I have studied Physics (B.Sc.) and Meteorology (M.Sc.) and I have a diverse working experience till now. Due
					to my divergent exposure on different fields, I have developed a very broad skillset, an analytical mindset
					and a very curious personality.
				</p>
			</span>
		</base-card>
		<div class="cvSection">
			<p style="color: black; font-size: 28px; font-weight: 900;">
				Interested to learn more about me?
			</p>
			<p>
				For a full version of my CV, click on my face! Don't be shy...Just do it!
			</p>
			<a :href="cv" target="_blank" title="Makis Milas CV" class="anchorTag">
				<img
					class="image"
					@mouseover="hoveredIn"
					@mouseleave="hoveredOut"
					:class="{ hoveredImage: hoveredValue }"
					:src="fileToDisplay"
				/>
			</a>
		</div>
		<Skills />
		<Projects />
		<Contact />
	</div>
</template>

<script>
	import TopSection from "./TopSection.vue";
	import Skills from "./Skills.vue";
	import Projects from "./Projects.vue";
	import Contact from "./Contact.vue";

	export default {
		name: "Main",
		components: {
			TopSection,
			Skills,
			Projects,
			Contact,
		},
		data() {
			return {
				hoveredValue: false,
				publicPath: process.env.BASE_URL,
				iconToDisplay: "Photo",
			};
		},
		computed: {
			fileToDisplay() {
				return `${this.publicPath}` + this.iconToDisplay + `.png`;
			},
			cv() {
				return `${this.publicPath}` + `CV.pdf`;
			},
		},
		methods: {
			hoveredIn() {
				this.hoveredValue = !this.hoveredValue;
				if (this.hoveredValue) {
					this.iconToDisplay = "pdf";
				}
			},
			hoveredOut() {
				this.hoveredValue = !this.hoveredValue;
				this.iconToDisplay = "Photo";
			},
		},
	};
</script>

<style scoped>
	.main {
		display: flex;
		flex-flow: column;
	}
	#aboutMe {
		text-align: justify;
	}
	.card {
		width: 40rem;
		margin: 0 auto;
	}
	.anchorTag {
		margin-top: 10px;
	}
	.hoveredImage {
		transform: scale(1.1);
		opacity: 0.5;
	}
	.image {
		width: 300px;
		transition: all 0.7s linear;
	}
	.cvSection {
		margin: 20px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.cvSection:first-child {
		display: none;
	}
</style>
