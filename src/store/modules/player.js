const state = {
  fans: 0,
  money: 0,
  click_val: 1,
  click_mod: 0,
  passive_val: 0,
  passive_mod: 0,
  stages: [],
  idols: [],
  accessories: []
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
  moneyClick ({ commit, state }) {
    const inc = state.click_val + (state.click_val * state.click_mod)
    commit('incMoney', inc)
  },
  passiveMoney ({ commit, state }) {
    const inc = state.passive_val + (state.passive_val * state.passive_mod)
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
