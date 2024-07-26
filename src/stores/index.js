import Vue from 'vue'
import Vuex from 'vuex'
import transactions from './modules/transactions'
import reports from './modules/reports'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    transactions,
    reports,
  },
})
