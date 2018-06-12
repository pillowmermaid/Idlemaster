const state = {
  fans: 0,
  money: 0,
  click_val: 1,
  click_mod: 0,
  passive_val: 0,
  passive_mod: 0,
  stages: [],
  active_idols: [],
  all_idols: [],
  accessories: []
}

const getters = {
  getActiveIdols: state => state.active_idols,
  getInactiveIdols: state => state.all_idols.filter(idol =>
    !state.active_idols.find(index =>
      idol.name === state.all_idols[index].name
    )),
  getAllIdols: state => state.all_idols
}

const actions = {
  initPlayerIdols ({ commit }) {
    commit('initIdols')
  },
  purchaseIdol ({ commit, state }, idol) {
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
  initIdols (state) {
    state.all_idols = []
  },
  addIdol (state, idol) {
    state.all_idols.push(idol)
    if (state.active_idols.length < 4) {
      const index = state.all_idols.length - 1
      state.active_idols.push(index)
    }
    state.passive_val += idol.cash_mod
  },
  activateIdol (state, idol) {
    state.all_idols.push(idol)
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
