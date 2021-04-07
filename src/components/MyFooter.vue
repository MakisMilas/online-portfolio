<template>
	<footer>
		<span>Powered by Makis Milas</span>
		<span>{{ year }}</span>
	</footer>
</template>

<script>
	export default {
		name: "MyFooter",
		data() {
			return {
				year: null,
			};
		},
		created() {
			return this.fullYear();
		},
		methods: {
			fullYear() {
				this.year = new Date().getFullYear();
			},
		},
	};
</script>

<style scoped>
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
		height: 4rem;
		background-color: rgb(32, 31, 31);
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		margin-top: 5rem;
	}
</style>
