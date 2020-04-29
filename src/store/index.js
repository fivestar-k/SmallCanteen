import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: '肉'
  },
  mutations: {
    changeKeyword(state, key) {
      state.keyword = key
      // console.log(state.keyword);
    }
  },
  actions: {
  },
  modules: {
  }
})
