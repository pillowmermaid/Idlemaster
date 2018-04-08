const state = {
  fans: 0,
  money: 0,
  stages: [],
  idols: []
}

const getters = {
  activeIdols: state => {
    state.idols.map(idol => idol.active ? idol : null)
  },
  getFullRoster: state => state.idols
}

const actions = {
  getPlayerIdols ({ commit }) {
    commit('setPlayerIdols')
  },
  purchaseIdol ({ commit }, idol) {
    commit('addIdol', idol)
  },
  moneyClick ({ commit }) {
    const inc = 1
    commit('incMoney', inc)
  }
}

const mutations = {
  setPlayerIdols (state) {
    state.idols = []
  },
  addIdol (state, idol) {
    state.idols.push(idol)
  },
  incMoney (state, inc) {
    state.money += inc
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
