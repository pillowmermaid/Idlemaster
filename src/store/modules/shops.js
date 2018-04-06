import idols from '@/data/idols'

const state = {
  'idols': []
}

const getters = {
  getIdols: state => state.idols
}

const actions = {
  getAllIdols ({ commit }) {
    commit('setIdols', idols)
  }
}

const mutations = {
  setIdols (state, idols) {
    state.idols = idols
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
