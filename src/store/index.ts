import { createStore } from 'vuex'

export default createStore({
  state: {
    showModal: false,
  },
  getters: {
  },
  mutations: {
    TOGGLE_MODAL(state){
      state.showModal = !state.showModal
    }
  },
  actions: {
  },
  modules: {
  }
})
