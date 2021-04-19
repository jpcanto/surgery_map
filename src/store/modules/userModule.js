import firebase from 'firebase';

export default {
  state: {
    info: [],
    isLoading: false,
    error: false,
  },
  actions: {
    DISPATCH_USER: async ({ commit }, { name, pass }) => {
      commit('SET_USER_LOADING');
      commit('SET_USER_ERROR', false);
      firebase.auth().signInWithEmailAndPassword(name, pass).then(
        (data) => {
          commit('SET_USER', { name: data.user.email });
        },
        () => {
          commit('SET_USER_ERROR', true);
        },
      );
    },
    DISPATCH_USER_NAME: ({ commit }, payload) => {
      commit('SET_USER', { name: payload });
    },
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.info = payload;
      state.isLoading = false;
      state.error = false;
    },
    SET_USER_ERROR: (state, payload) => {
      state.info = [];
      state.isLoading = false;
      state.error = payload;
    },
    SET_USER_LOADING: (state) => {
      state.isLoading = true;
    },
  },
};
