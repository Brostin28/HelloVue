import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css";

Vue.use(VueMaterial);

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",

  data: {
    tasks: [
      { description: "Go home", completed: "true" },
      { description: "Go to the mall", completed: "false" }
    ],
    word: "Hello World!"
  }
});
