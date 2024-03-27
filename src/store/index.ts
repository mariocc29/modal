import { MessageType } from '@/enums'
import { createStore } from 'vuex'

export default createStore({
  state: {
    showModal: false,
    kindOf: MessageType.INFO,
  },
  getters: {
  },
  mutations: {
    TOGGLE_MODAL(state){
      state.showModal = !state.showModal
    },
    SET_KIND_OF_MODAL(state, kindOf: MessageType) {
      state.kindOf = kindOf
    }
  },
  actions: {
  },
  modules: {
  }
})
