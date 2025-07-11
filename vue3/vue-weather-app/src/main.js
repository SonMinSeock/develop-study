import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBarsStaggered, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import store from "./store/store";

// 사용할 아이콘 불러오기

// 아이콘 등록하기
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
