import firebase from 'firebase';
import { filtering } from '@/utils/filter';
import { sorting } from '@/utils/sort';

export default {
  state: {
    info: [
      {
        name: 'Joao Pedro', id: 1, surgery: 'Bariatrica', date: '12/05/2020', gender: 'male', paid: false,
      },
      {
        name: 'Dilson Canto', id: 2, surgery: 'PNEUMOTORAX ABERTO com a equipe da sol, no hospital norte cor', date: '12/08/2020', gender: 'male', paid: true,
      },
      {
        name: 'Solange Canto', id: 3, surgery: 'Valvuloplastia', date: '12/02/2021', gender: 'female', paid: false,
      },
    ],
    isLoading: false,
    error: false,
    search: '',
    filterParam: null,
  },
  getters: {
    GET_FILTERED_USERS: (state) => {
      switch (state.filterParam) {
        case 0:
          return state.info;
        case 1:
          return filtering.showOnlyUnpaids([...state.info]);
        case 2:
          return [...state.info].sort(sorting.orderByName);
        default:
          return state.info;
      }
    },
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
    DISPATCH_USER_FILTER_PARAM: ({ commit }, payload) => commit('SET_USER_FILTER_PARAM', payload),
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
    SET_USER_FILTER_PARAM: (state, payload) => {
      state.filterParam = payload;
    },
  },
};
