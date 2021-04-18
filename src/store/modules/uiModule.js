const defaultSnackbarInfo = {
  text: '',
  isVisible: false,
  timeout: 5000,
  color: '#fff',
};

export default {
  state: {
    snackbar: defaultSnackbarInfo,
  },
  actions: {
    DISPATCH_SNACKBAR_INFO: async ({ commit }, payload) => {
      commit('SET_SNACKBAR_INFO', payload);
    },
    DISPATCH_SNACKBAR_VISIBILITY: async ({ commit }, payload) => {
      commit('SET_SNACKBAR_VISIBILITY', payload);
    },
  },
  mutations: {
    SET_SNACKBAR_INFO: (state, payload) => {
      console.log(payload);
      state.snackbar = { ...state.snackbar, ...payload };
    },
    SET_SNACKBAR_VISIBILITY: (state, payload) => {
      state.snackbar.isVisible = payload;
    },
  },
};
