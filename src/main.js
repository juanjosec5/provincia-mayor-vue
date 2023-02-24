import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import log from "@cuadros/log";

import "the-new-css-reset/css/reset.css";
import "./scss/main.scss";

log("hello");

const app = createApp(App);

app.use(router).mount("#app");
