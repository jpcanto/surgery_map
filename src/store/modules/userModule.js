export default {
  state: {
    info: [],
    isLoading: false,
    error: false,
  },
  actions: {
    DISPATCH_USER: ({ commit }, payload) => {
      commit('SET_USER_LOADING');
      commit('SET_USER', payload);
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
