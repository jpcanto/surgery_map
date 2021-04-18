import { filtering } from '@/utils/filter';
import { sorting } from '@/utils/sort';

export default {
  state: {
    patients: [
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
    loading: false,
    searchParam: '',
    filterParam: null,
    filteredPatients: [
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
  },
  getters: {
    GET_FILTERED_PATIENTS: (state) => (
      filtering.filterByName([...state.filteredPatients], state.searchParam)),
  },
  actions: {
    DISPATCH_PATIENT_FILTER_PARAM: ({ commit }, payload) => {
      commit('SET_PATIENT_LOADING', true);
      commit('SET_PATIENT_FILTER_PARAM', payload);
      commit('SET_PATIENT_FILTERED', payload);
      commit('SET_PATIENT_LOADING', false);
    },
    DISPATCH_PATIENT_SEARCH_PARAM: ({ commit }, payload) => commit('SET_PATIENT_SEARCH_PARAM', payload),
  },
  mutations: {
    SET_PATIENT_LOADING: (state, payload) => {
      state.loading = payload;
    },
    SET_PATIENT_FILTER_PARAM: (state, payload) => {
      state.filterParam = payload;
    },
    SET_PATIENT_FILTERED: (state) => {
      switch (state.filterParam) {
        case 0:
          return state.patients;
        case 1:
          state.filteredPatients = filtering.filterByUnpaids([...state.patients]);
          break;
        case 2:
          state.filteredPatients = [...state.patients].sort(sorting.orderByName);
          break;
        default:
          state.filteredPatients = state.patients;
          break;
      }
    },
    SET_PATIENT_SEARCH_PARAM: (state, payload) => {
      state.searchParam = payload;
    },
  },
};
