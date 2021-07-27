import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "regenerator-runtime/runtime";

Vue.config.productionTip = false;

const swap = require("@tencent/swap");
const mockData = require("../server/mocker").default;
swap.swapInit({
  mockData,
  isMock: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
