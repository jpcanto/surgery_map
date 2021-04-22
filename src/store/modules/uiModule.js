const defaultSnackbarInfo = {
  text: '',
  isVisible: false,
  timeout: 5000,
  color: '#fff',
};

export default {
  state: {
    snackbar: defaultSnackbarInfo,
    isUserDrawerVisible: false,
  },
  actions: {
    DISPATCH_SNACKBAR_INFO: ({ commit }, payload) => {
      commit('SET_SNACKBAR_INFO', payload);
    },
    DISPATCH_SNACKBAR_VISIBILITY: ({ commit }, payload) => {
      commit('SET_SNACKBAR_VISIBILITY', payload);
    },
    DISPATCH_USER_DRAWER_VISIBILITY: ({ commit }, payload) => {
      commit('SET_USER_DRAWER_VISIBILITY', payload);
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
    SET_USER_DRAWER_VISIBILITY: (state, payload) => {
      state.isUserDrawerVisible = payload;
    },
  },
};
