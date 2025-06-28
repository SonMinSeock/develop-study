import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// bootstrap 불러오기
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import router from "./router/router";

createApp(App).use(router).mount("#app");
