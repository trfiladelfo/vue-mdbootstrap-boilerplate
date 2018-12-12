import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root = "/api/v2";

Vue.http.interceptors.push(function(req, next) {
  const request = req;
  request.headers.set("Accept", "application/json");

  next(function() {});
});

export default VueResource;
