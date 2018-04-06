import Vue from 'vue'
import Vuex from 'vuex'
import idols from '@/data/idols'

Vue.use(Vuex)

const state = {
  'idol_resevoir': idols,
}

const getters = {
}

const actions = {

}

const mutations = {
}

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations
})
