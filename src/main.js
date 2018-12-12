import Vue from "vue";
import App from "./App.vue";

//import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbootstrap/css/bootstrap.min.css";
import "mdbootstrap/css/mdb.min.css";

import router from "./router";
import resource from "./resource";

import "jquery/dist/jquery.js";
import "popper.js/dist/umd/popper.js";
import "mdbootstrap/js/bootstrap.min.js";
import "mdbootstrap/js/mdb.min.js";

Vue.config.productionTip = false;

new Vue({
  router,
  resource,
  render: h => h(App)
}).$mount("#app");
