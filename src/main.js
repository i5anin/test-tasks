import PortalVue from "portal-vue";
import { createApp } from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vue from "vue";
import App from "./App.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import { createPopper } from "@popperjs/core";
const popcorn = document.querySelector("#popcorn");
const tooltip = document.querySelector("#tooltip");
createPopper(popcorn, tooltip, {
  placement: "top"
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

const app = createApp(App);
app.use(PortalVue);
app.mount("#app");
