<template>
	<button class="myButton">
		<slot />
	</button>
</template>

<style scoped>
	.myButton {
		text-decoration: none;
		border: none;
		padding: 0.75rem 1.5rem;
		font: inherit;
		background-color: #309097;
		color: white;
		cursor: pointer;
		border-radius: 30px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		transition: all 0.4s linear;
	}
	.myButton:hover {
		background-color: #216368;
	}
	.myButton:focus {
		outline: none;
	}
</style>
