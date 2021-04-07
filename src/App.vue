<template>
	<router-view />
	<main v-if="!(this.$route.href === '/slayer')">
		<Navigation />
		<Main />
		<MyFooter />
	</main>
</template>

<script>
	import Main from "./components/Main.vue";
	import Navigation from "./components/Navigation.vue";
	import MyFooter from "./components/MyFooter.vue";

	export default {
		name: "App",

		components: {
			Main,
			Navigation,
			MyFooter,
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
