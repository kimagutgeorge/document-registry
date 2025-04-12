import { createStore } from 'vuex';


export default createStore({
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    SET_LOGIN_STATUS(state, status) {
      state.isLoggedIn = status;
    }
  },
  actions: {
    login({ commit }) {
      commit('SET_LOGIN_STATUS', true);
    },
    logout({ commit }) {
      commit('SET_LOGIN_STATUS', false);
    }
  }
});