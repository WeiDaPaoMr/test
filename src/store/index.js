// import {
//   from
// } from 'core-js/core/array'
import Vue from 'vue'
import Vuex from 'vuex'
import {
  GetLoginList,
  GetLoginImg
} from "../api/login"
import {
  setToken,
  getToken,
  setUserInfo,
  getUserInfo,
  removeTokenAddUserInfo
} from "../utils/auth"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: setToken() || "",
    userInfo: setUserInfo() || ""
  },
  getters: {
    token(state) {
      return state.token
    },
    userInfo(state) {
      return state.userInfo
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})