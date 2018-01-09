import Vue from 'vue';
import Vuex from 'vuex';
import checkAuth from './modules/auth';
import userInfo from './modules/userInfo';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    a: 1
  },
  modules: {
    userInfo,
    checkAuth
  }
})