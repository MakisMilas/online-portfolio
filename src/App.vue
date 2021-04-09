<template>
	<router-view />
	<main v-if="checkPath">
		<Navigation />
		<Main />
		<MyFooter />
	</main>
</template>

<script>
	import Main from "./components/Main.vue";
	import Navigation from "./components/Navigation.vue";

	export default {
		name: "App",

		components: {
			Main,
			Navigation,
		},
		computed: {
			checkPath() {
				return this.$route.path === "/";
			},
		},
	};
</script>

<style>
	body {
		margin: 0;
		background-color: #163e50;
		color: white;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}
</style>
