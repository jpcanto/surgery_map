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
      firebase.auth().signInWithEmailAndPassword(name, pass).then(
        (data) => {
          commit('SET_USER', data.user.email);
        },
        () => {
          commit('SET_USER_ERROR');
        },
      );
    },
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.info = payload;
      state.isLoading = false;
      state.error = false;
    },
    SET_USER_ERROR: (state) => {
      state.info = [];
      state.isLoading = false;
      state.error = true;
    },
    SET_USER_LOADING: (state) => {
      state.isLoading = true;
    },
  },
};
