import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Swipe, SwipeItem, Search } from 'vant';

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
