import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    count: 110,
    todos: [
      {
        id: 1,
        title: "This is long, I hope that it gets abbreviated",
        done: false
      },
      {
        id: 2,
        title: "Scary Vue 3 presentation",
        done: true
      },
      {
        id: 3,
        title: "Find the good bits in Vue 3",
        done: false
      }
    ],
  },
  actions: {
    ADD_TODO ({ commit }, payload) {
      commit('SET_TODO', payload);
    },
    REMOVE_TODO ({ commit }, payload) {
      commit('DELETE_TODO', payload)
    },
  },
  mutations: {
    SET_TODO (state, payload) {
      state.todos = [...state.todos, payload];
      // console.log(state.todos)
    },
    DELETE_TODO (state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload);
      state.todos.splice(index, 1);
      // console.log('delete', index)
    }
  },
  getters: {
    todos (state) {
      return state.todos
    }
  },
  // plugins: [
  //   createPersistedState()
  // ]
  // plugins: [createPersistedState({
  //   storage: window.sessionStorage
  // })]
})