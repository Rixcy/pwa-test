import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // initial state
  state: {
    currencies: ['BTC', 'LTC', 'ETH']
  }
})
