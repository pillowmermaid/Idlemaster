import idols from '@/data/idols'

const state = {
  'idols': [],
  'accessories': [],
  'stages': []
}

const getters = {
  getIdols: (state, getters, rootState) => {
    return state.idols.filter(idol => !rootState.player.idols.find(playerIdol => idol.name === playerIdol.name))
  }
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
