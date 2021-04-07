<template>
	<div class="card">
		<slot />
	</div>
</template>

<script>
	export default {
		name: "BaseCard",
	};
</script>

<style scoped>
	.card {
		border-radius: 12px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		padding: 1rem;
	}
</style>
