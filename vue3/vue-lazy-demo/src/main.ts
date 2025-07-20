import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.bundle"; // JS 컴포넌트(모달 등) 필요 시
import "@/assets/styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import vLazyBg from "./directives/vLazyBg";

const app = createApp(App);

app.directive("lazy-bg", vLazyBg);
app.mount("#app");
