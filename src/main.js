import { createApp, defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import VueSmoothScroll from "vue3-smooth-scroll";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseTitle from "./components/UI/BaseTitle.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import MyFooter from "./components/MyFooter.vue";
import Index from "./components/Index.vue";

import Slayer from "./Slayer/App.vue";
import Calculator from "./components/Calculator.vue";
const BaseDialog = defineAsyncComponent(() => import("./components/UI/BaseDialog.vue"));

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Index",
			component: Index,
		},
		{
			path: "/slayer",
			name: "SlayerGame",
			component: Slayer,
		},
		{
			path: "/calculator",
			name: "calculator",
			component: Calculator,
		},
		{
			path: "/:notFound(.*)",
			redirect: "/",
		},
	],
	scrollBehavior(to) {
		if (to.path !== "/") return { left: 0, top: 0 };
	},
});

const app = createApp(App);

app.use(VueSmoothScroll, {
	duration: 1000,
	offset: -80,
});
app.component("base-card", BaseCard);
app.component("base-title", BaseTitle);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("index", Index);
app.component("MyFooter", MyFooter);
app.component("calculator", Calculator);

app.use(router);

app.mount("#app");
