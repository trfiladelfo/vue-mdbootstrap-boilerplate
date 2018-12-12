import Vue from "vue";
import App from "./App.vue";

//import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbootstrap/css/bootstrap.min.css";
import "mdbootstrap/css/mdb.min.css";

import VueMask from "v-mask";
import VueSweetalert2 from "vue-sweetalert2";
import router from "./router";
import resource from "./resource";

import "jquery/dist/jquery.js";
import "popper.js/dist/umd/popper.js";
import "mdbootstrap/js/bootstrap.min.js";
import "mdbootstrap/js/mdb.min.js";

Vue.config.productionTip = false;

Vue.use(VueMask);
Vue.use(VueSweetalert2);

new Vue({
  router,
  resource,
  render: h => h(App)
}).$mount("#app");
