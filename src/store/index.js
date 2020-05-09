import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  keyword: '肉',
  searchTitle: '',
};

export default new Vuex.Store({
  state,
  mutations: {
    changeKeyword(state, key) {
      state.keyword = key
      // console.log(state.keyword);
    },

    changeSearchTitle(state, val) {
      state.searchTitle = val
    },

  },
  actions: {
  },
  modules: {
  }
})
