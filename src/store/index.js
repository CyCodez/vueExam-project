import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload;
    },
    decrement(state, payload) {
      state.counter = state.counter - payload;
    },
    reset(state) {
      state.counter = 0;
    },
    setState(state, payload) {
      state.counter = state.counter + payload;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
    reset(context) {
      context.commit("reset");
    },
    setState(context, payload) {
      context.commit("setState", payload);
    },
  },
});

export default store;
