import Vue from 'vue'
import Vuex from 'vuex'
import users from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    users
  }
})
