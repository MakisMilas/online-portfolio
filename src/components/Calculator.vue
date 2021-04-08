<template>
	<header>
		<h1>Calculator</h1>
	</header>
	<section>
		<base-button class="go_back">
			<router-link to="/">Go Back</router-link>
		</base-button>
		<div class="calculator">
			<input type="text" class="calculator-screen" value="0" disabled />

			<div class="calculator-keys">
				<button type="button" class="operator" value="+">+</button>
				<button type="button" class="operator" value="-">-</button>
				<button type="button" class="operator" value="*">&times;</button>
				<button type="button" class="operator" value="/">&divide;</button>

				<button type="button" value="7">7</button>
				<button type="button" value="8">8</button>
				<button type="button" value="9">9</button>

				<button type="button" value="4">4</button>
				<button type="button" value="5">5</button>
				<button type="button" value="6">6</button>

				<button type="button" value="1">1</button>
				<button type="button" value="2">2</button>
				<button type="button" value="3">3</button>

				<button type="button" class="decimal" value=".">.</button>
				<button type="button" value="0">0</button>

				<button type="button" class="all-clear" value="all-clear">AC</button>

				<button type="button" class="equal-sign" value="=">=</button>
			</div>
		</div>
	</section>
	<MyFooter />
</template>

<script>
	import MyFooter from "./MyFooter.vue";
	export default {
		components: {
			MyFooter,
		},
		methods: {
			buttonClicked() {
				console.log("test");
			},
		},
	};
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}
	section {
		max-width: 25rem;
		margin: auto;
	}
	header {
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		padding: 0.5rem;
		background-color: rgb(32, 31, 31);
		color: white;
		text-align: center;
		margin-bottom: 3rem;
	}

	.calculator {
		border: 1px solid #ccc;
		border-radius: 5px;
		top: 50%;
		left: 50%;
		width: 400px;
		margin: 4rem auto;
	}

	.calculator-screen {
		width: 100%;
		font-size: 3rem;
		height: 80px;
		border: none;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		background-color: rgb(32, 31, 31);
		color: #fff;
		text-align: right;
		padding-right: 20px;
		padding-left: 10px;
	}

	button {
		height: 60px;
		background-color: #fff;
		border-radius: 3px;
		border: 1px solid #c4c4c4;
		background-color: transparent;
		font-size: 2rem;
		color: inherit;
		background-image: linear-gradient(to bottom, transparent, transparent 50%, rgba(0, 0, 0, 0.04));
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
			inset 0 -1px 0 0 rgba(255, 255, 255, 0.15), 0 1px 0 0 rgba(255, 255, 255, 0.15);
		text-shadow: 0 1px rgba(255, 255, 255, 0.4);
		transition: all 0.2s linear;
	}

	button:hover {
		background-color: #3a637a;
	}

	.operator {
		color: #337cac;
	}

	.all-clear {
		background-color: #f0595f;
		border-color: #b0353a;
		color: #fff;
		transition: all 0.2s linear;
	}

	.all-clear:hover {
		background-color: #f79093;
	}

	.equal-sign {
		background-color: #2e86c0;
		border-color: #337cac;
		color: #fff;
		height: 100%;
		grid-area: 2 / 4 / 6 / 5;
		transition: all 0.2s linear;
	}

	.equal-sign:hover {
		background-color: #4e9ed4;
	}

	.calculator-keys {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
		padding: 20px;
	}

	.go_back {
		height: inherit;
	}

	a {
		text-decoration: none;
		color: white;
	}
</style>
