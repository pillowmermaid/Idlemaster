import idols from '@/data/idols'

const state = {
  'idols': [],
  'accessories': [],
  'stages': []
}

const getters = {
  getIdols: (state, getters, rootState) => state.idols.filter(idol => !rootState.player.all_idols.find(playerIdol => idol.name === playerIdol.name))
}

const actions = {
  initIdols ({ commit }) {
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
