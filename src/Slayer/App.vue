<template>
	<header>
		<h1>Monster Slayer</h1>
	</header>
	<section>
		<base-button>
			<router-link to="/">Go Back</router-link>
		</base-button>
		<base-card>
			<base-title title="Description" />
			<div class="desc">
				<p>
					Attack the monster and try to win. Every action represents one round and after every action of yours, the
					monster will strike back unless you have defeated it already.
				</p>
				<br />
				<p>Use the <span>special attack</span> to strike harder.</p>
				<p>Use the <span>heal</span> in order to heal yourself.</p>
				<br />
				<p><span>Surrender</span> if you think you are fighting a lost battle and get a draw instead.</p>
				<p>
					Note: <span>Special attack</span> and <span>heal</span> are special actions and you can only use them once
					every 3 and 2 rounds respectively. All actions are of random value and shown below.
				</p>
				<ul>
					<li v-for="action in actions" :key="action">{{ action.name }} --> {{ action.value }}</li>
				</ul>
				<p>
					If you like you can also check the battle log at the bottom of the page to see the progress and the damage
					dealt per round.
				</p>
				<p>Don't forget to submit your name and grab your sword!</p>
			</div>
		</base-card>
		<div class="username">
			<label for="username">Your name</label>
			<input type="text" id="username" name="username" v-model.trim="name" />
			<base-button class="button__name" @click="submitName">Submit</base-button>
		</div>
	</section>
	<div id="game">
		<section v-if="nameProvided" class="container log--damage"><p>Please provide your name!!</p></section>
		<div class="scoreBars">
			<div class="scoreBar">
				<h2>Monster's Score</h2>
				<p>{{ monsterScore }}</p>
			</div>
			<section class="healthbars">
				<section id="monster" class="container">
					<h2>Monster's Health</h2>
					<div class="healthbar">
						<div class="healthbar__value" :style="monsterBarStyles">{{ monsterHealth > 0 ? monsterHealth : "0" }}</div>
					</div>
				</section>
				<section id="player" class="container">
					<h2>{{ inputName }} Health</h2>
					<div class="healthbar">
						<div class="healthbar__value" :style="playerBarStyles">{{ playerHealth > 0 ? playerHealth : "0" }}</div>
					</div>
				</section>
			</section>
			<div class="scoreBar">
				<h2>{{ inputName }} Score</h2>
				<p>{{ playerScore }}</p>
			</div>
		</div>
		<section class="container" v-if="winner">
			<h2>Game Over!</h2>
			<h3 v-if="winner === 'monster'">You lost!</h3>
			<h3 v-else-if="winner === 'player'">You won!</h3>
			<h3 v-else>It's a draw!</h3>
			<button class="gameButton" @click="startGame">Start New Game</button>
		</section>
		<section id="controls" v-else>
			<button class="gameButton" @click="attackMonster">ATTACK</button>
			<button class="gameButton" :disabled="mayUseSpecialAttack" @click="specialAttackMonster">
				SPECIAL ATTACK
			</button>
			<button class="gameButton" :disabled="mayUseHeal" @click="healPlayer">HEAL</button>
			<button class="gameButton" @click="surrender">SURRENDER</button>
		</section>
		<section v-if="nameProvided" class="container log--damage"><p>Please provide your name!!</p></section>
		<section id="log" class="container">
			<h2>Battle Log</h2>
			<ul>
				<li v-for="logMessage in logMessages" :key="logMessage">
					<span class="log--round">{{ logMessage.actionRound }}: </span>
					<span
						:class="{
							'log--player': logMessage.actionBy === 'player',
							'log--monster': logMessage.actionBy === 'monster',
						}"
						>{{ logMessage.actionBy === "player" ? inputedName : "Monster" }}</span
					>
					<span v-if="logMessage.actionType === 'heal'">
						heals for
						<span class="log--heal">{{ logMessage.actionValue }}</span></span
					>
					<span v-else>
						attacks and deals
						<span class="log--damage">{{ logMessage.actionValue }}</span>
					</span>
				</li>
			</ul>
		</section>
	</div>
	<MyFooter />
</template>

<script>
	export default {
		data() {
			return {
				BaseButtonlayerHealth: 100,
				playerHealth: 100,
				monsterHealth: 100,
				currentRound: 0,
				winner: null,
				logMessages: [],
				name: "",
				inputedName: "",
				nameProvided: false,
				monsterScore: 0,
				playerScore: 0,
				actions: [
					{ name: "Attack (Player and Monster)", value: "8-15" },
					{ name: "Special Attack", value: "15-25" },
					{ name: "Heal", value: "8-15" },
				],
			};
		},
		computed: {
			monsterBarStyles() {
				if (this.monsterHealth <= 0) {
					return { width: "0%", padding: "0" };
				}
				return { width: this.monsterHealth + "%" };
			},
			playerBarStyles() {
				if (this.playerHealth <= 0) {
					return { width: "0%", padding: "0" };
				}
				return { width: this.playerHealth + "%" };
			},
			mayUseSpecialAttack() {
				return this.currentRound % 3 !== 0;
			},
			mayUseHeal() {
				return this.currentRound % 2 !== 0;
			},
			inputName() {
				return this.inputedName !== "" ? this.inputedName + "'s" : "Player's ";
			},
		},
		watch: {
			playerHealth(value) {
				if (value <= 0 && this.monsterHealth <= 0) {
					this.winner = "draw";
				} else if (value <= 0) {
					this.winner = "monster";
					this.monsterScore++;
				}
			},
			monsterHealth(value) {
				if (value <= 0 && this.playerHealth <= 0) {
					this.winner = "draw";
				} else if (value <= 0) {
					this.winner = "player";
					this.playerScore++;
				}
			},
		},

		methods: {
			submitName() {
				this.nameProvided = false;
				this.inputedName = this.name;
				this.name = "";
			},
			getRandomValue(min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min);
			},
			startGame() {
				this.playerHealth = 100;
				this.monsterHealth = 100;
				this.winner = null;
				this.currentRound = 0;
				this.logMessages = [];
			},
			attackMonster() {
				if (this.inputedName) {
					this.currentRound++;
					const attackValue = this.getRandomValue(8, 15);
					this.monsterHealth -= attackValue;
					this.addLogMessage("Round " + this.currentRound, "player", "attack", attackValue);
					if (this.monsterHealth <= 0) return;
					this.attackPlayer();
				} else {
					this.nameProvided = true;
				}
			},
			attackPlayer() {
				const attackValue = this.getRandomValue(8, 15);
				this.playerHealth -= attackValue;
				this.addLogMessage("Round " + this.currentRound, "monster", "attack", attackValue);
			},
			specialAttackMonster() {
				if (this.inputedName) {
					this.currentRound++;
					const attackValue = this.getRandomValue(15, 25);
					this.monsterHealth -= attackValue;
					this.addLogMessage("Round " + this.currentRound, "player", "attack", attackValue);
					this.attackPlayer();
				} else {
					this.nameProvided = true;
				}
			},
			healPlayer() {
				if (this.inputedName) {
					this.currentRound++;
					const healValue = this.getRandomValue(8, 15);
					if (this.playerHealth + healValue > 100) {
						this.playerHealth = 100;
					} else {
						this.playerHealth += healValue;
					}
					this.addLogMessage("Round " + this.currentRound, "player", "heal", healValue);
					this.attackPlayer();
				} else {
					this.nameProvided = true;
				}
			},
			surrender() {
				if (this.inputedName) {
					this.winner = "none";
					this.playerScore++;
					this.monsterScore++;
				} else {
					this.nameProvided = true;
				}
			},
			addLogMessage(whichRound, who, what, value) {
				this.logMessages.unshift({
					actionRound: whichRound,
					actionBy: who,
					actionType: what,
					actionValue: value,
				});
			},
		},
	};
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}

	header {
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		padding: 0.5rem;
		background-color: rgb(32, 31, 31);
		color: white;
		text-align: center;
		margin-bottom: 3rem;
	}

	section {
		max-width: 40rem;
		margin: auto;
	}

	.healthbar {
		width: 100%;
		height: 40px;
		margin: 1rem 0;
		background: #fde5e5;
		border-radius: 10px;
		border: none;
	}

	.healthbar__value {
		display: flex;
		background-color: #00a876;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		border: none;
		justify-content: flex-end;
		align-items: center;
		padding-right: 20px;
	}

	.container {
		text-align: center;
		padding: 0.5rem;
		margin: 1rem auto;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 12px;
	}

	#monster h2,
	#player h2 {
		margin: 0.25rem;
	}

	#controls {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.gameButton {
		font: inherit;
		background-color: rgb(32, 31, 31);
		color: white;
		padding: 1rem 2rem;
		border-radius: 12px;
		margin: 1rem;
		width: 12rem;
		cursor: pointer;
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
	}

	.gameButton:focus {
		outline: none;
	}

	.gameButton:hover,
	.gameButton:active {
		background-color: rgb(71, 70, 70);
		box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
	}

	.gameButton:disabled {
		background-color: #ccc;
		border-color: #ccc;
		box-shadow: none;
		color: #3f3f3f;
		cursor: not-allowed;
	}

	#log ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	#log li {
		margin: 0.5rem 0;
	}

	.log--player {
		color: #9860d8;
	}

	.log--monster {
		color: #da8d00;
	}

	.log--damage {
		color: red;
	}

	.log--heal {
		color: green;
	}

	.log--round {
		color: rgb(196, 193, 45);
	}

	.username {
		display: flex;
		margin: 5rem 0;
		justify-content: space-evenly;
		font-size: 1.2em;
	}

	input {
		border-radius: 10px;
		border: none;
		font-size: 1.2em;
	}

	input:focus {
		outline: none;
	}

	.card {
		text-align: justify;
		padding-bottom: 40px;
		margin-top: 3rem;
	}

	.card section {
		margin-left: 0;
	}

	.button__name {
		padding: 0 1.2rem 0 1.2rem;
		font-size: 16px;
		align-items: center;
	}

	#game {
		margin-bottom: 8rem;
	}

	.desc span {
		font-style: italic;
		font-weight: 700;
	}
	.desc p {
		margin: 0;
	}

	a {
		text-decoration: none;
		color: white;
	}

	.scoreBars {
		display: flex;
	}
	.scoreBar {
		display: flex;
		width: 50%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.scoreBar p {
		padding: 20px;
		font-size: 25px;
	}
</style>
