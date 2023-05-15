import { createApp } from "vue";
import Demo from "./Demo.vue";
import "vue-highlight-code/dist/style.css";
import TvDemo from "todovue-demo";
import "@/assets/scss/_global.scss";

const app = createApp(Demo);
app.component("TvDemo", TvDemo);
app.mount("#todovue-hero");
