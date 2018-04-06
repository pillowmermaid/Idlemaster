import Vue from 'vue'
import Vuex from 'vuex'
import player from '@/store/modules/player'
import shops from '@/store/modules/shops'
import settings from '@/store/modules/settings'

Vue.use(Vuex)

const state = {
}

const getters = {
}

const actions = {

}

const mutations = {
}

export default new Vuex.Store({
  strict: true,
  modules: {
    player,
    shops,
    settings
  },
  state,
  getters,
  actions,
  mutations
})
