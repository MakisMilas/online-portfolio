<template>
	<base-dialog v-if="formIsSent" title="Thank you!" @close="closeDialog">
		<template #default>Your form has been succesfully submitted!</template>
		<template #actions>
			<base-button @click="closeDialog">Ok</base-button>
		</template>
	</base-dialog>
	<div id="contactForm">
		<base-title title="Contact Me" />
		<form @submit.prevent="submitForm">
			<div class="form-control" :class="{ invalid: !name.isValid }">
				<label for="name">Full Name</label>
				<i class="fas fa-user" />
				<input
					name="name"
					type="text"
					id="name"
					placeholder="John Doe"
					v-model.trim="name.val"
					@blur="checkValidity('name')"
				/>
				<p v-if="!name.isValid">Fullname is required. Please provide yours.</p>
			</div>
			<div class="form-control" :class="{ invalid: !email.isValid }">
				<label for="email">Email</label>
				<i class="fas fa-envelope" />
				<input
					name="email"
					type="email"
					id="email"
					placeholder="email@email.com"
					v-model.trim="email.val"
					@blur="checkValidity('email')"
				/>
				<p v-if="!email.isValid">Email is required in a valid format. Please provide yours correctly.</p>
			</div>
			<div class="form-control">
				<label for="phone">Phone Number (optional)</label>
				<i class="fas fa-phone-alt" />
				<input
					name="phone"
					type="number"
					id="phone"
					@keypress="specialCharacters($event)"
					v-model.trim="phone.val"
					placeholder="+00 0123456789"
				/>
			</div>
			<div class="form-control" :class="{ invalid: !message.isValid }">
				<label for="message">Your message</label>
				<textarea
					name="message"
					v-model.trim="message.val"
					id="message"
					rows="10"
					placeholder="Your message..."
					@blur="checkValidity('message')"
				/>
				<p v-if="!message.isValid">You need to fill out this area. Please write your message.</p>
			</div>
			<base-button>Send</base-button>
		</form>
	</div>
</template>

<script>
	import emailjs from "emailjs-com";
	export default {
		name: "Contact",
		data() {
			return {
				name: {
					val: "",
					isValid: true,
				},
				email: {
					val: "",
					isValid: true,
				},
				phone: {
					val: "",
					isValid: true,
				},
				message: {
					val: "",
					isValid: true,
				},
				formIsValid: true,
				formIsSent: false,
				pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
			};
		},
		methods: {
			checkValidity(input) {
				this[input].isValid = true;
			},
			validateForm() {
				this.formIsValid = true;
				if (this.name.val === "") {
					this.name.isValid = false;
					this.formIsValid = false;
				}
				if (this.message.val === "") {
					this.message.isValid = false;
					this.formIsValid = false;
				}

				if (this.email.val === "" || !this.pattern.test(this.email.val)) {
					this.email.isValid = false;
					this.formIsValid = false;
				}
			},
			submitForm(e) {
				this.validateForm();

				if (!this.formIsValid) {
					return;
				}

				emailjs.sendForm("makis_gmail", "template_le2hpvk", e.target, "user_O0cJBCEunqt3b6xTw27ou", {
					name: this.name,
					email: this.email,
					phone: this.phone,
					message: this.message,
				});
				this.formIsSent = true;
				this.name.val = "";
				this.email.val = "";
				this.phone.val = "";
				this.message.val = "";
			},
			specialCharacters(evt) {
				evt = evt || window.event;
				const charCode = evt.which || evt.keyCode;
				if (charCode === 101 || charCode === 69 || charCode === 46 || charCode === 45) {
					evt.preventDefault();
				} else {
					return true;
				}
				return false;
			},
			closeDialog() {
				this.formIsSent = false;
			},
		},
	};
</script>

<style scoped>
	#contactForm {
		margin: 0 auto;
		max-width: 500px;
		width: 100%;
	}

	.form-control {
		margin: 0.5rem 0;
		position: relative;
	}
	input {
		height: 24px;
		text-indent: 35px;
	}

	input,
	textarea {
		width: 100%;
		padding: 5px 5px;
		margin-left: 10px;
		font: inherit;
		border: none;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		transition: background-color 0.4s linear;
		resize: vertical;
	}
	label {
		font-weight: bold;
		display: flex;
		margin-bottom: 0.5rem;
	}
	i {
		position: absolute;
		color: black;
		left: 20px;
		top: 38px;
		border-right: solid 1px grey;
		padding-right: 8px;
	}
	input:focus,
	textarea:focus {
		background-color: #f0e6fd;
		outline: none;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}

	.invalid label,
	.invalid {
		color: rgb(199, 90, 90);
	}
</style>
