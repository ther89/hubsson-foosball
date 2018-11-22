import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blue: {
      striker: {
        name: "Blue S Name"
      },
      defense: {
        name: "Blue D Name"
      },
      score: 0
    },
    red: {
      striker: {
        name: "Red S Name"
      },
      defense: {
        name: "Red D Name"
      },
      score: 0
    },
    history: []
  },
  mutations: {
    setScores(state, scores) {
      state.blue.score = scores.blue;
      state.red.score = scores.red;
    }
  },
  actions: {}
});
