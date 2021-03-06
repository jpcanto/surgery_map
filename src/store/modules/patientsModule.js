import { filtering } from '@/utils/filter';
import { sorting } from '@/utils/sort';
import { listPatients } from '@/services/patients';

export default {
  state: {
    patients: [],
    patient: {},
    error: false,
    loading: false,
    searchParam: '',
    filterParam: null,
    filteredPatients: [],
  },
  getters: {
    GET_FILTERED_PATIENTS: (state) => {
      let filteredPatients = state.patients;

      switch (state.filterParam) {
        case 0:
          filteredPatients = state.patients;
          break;
        case 1:
          filteredPatients = filtering.filterByUnpaids([...state.patients]);
          break;
        case 2:
          filteredPatients = [...state.patients].sort(sorting.orderByName);
          break;
        default:
          filteredPatients = state.patients;
          break;
      }
      return filtering.filterByName(Array.from(filteredPatients), state.searchParam);
    },
    GET_PATIENTS_NUMBER: (state) => state.patients.length || 0,
    GET_PATIENTS_FILTERED_NUMBER: (state) => {
      const filtered = filtering.filterByName([...state.patients], state.searchParam);
      return filtered.length || 0;
    },
  },
  actions: {
    DISPATCH_PATIENTS_LIST: async ({ commit }, payload) => {
      const patients = await listPatients(payload);
      commit('SET_PATIENTS_LOADING', true);

      if (!patients) {
        commit('SET_PATIENTS_ERROR', true);
      }

      commit('SET_PATIENTS_LOADING', false);
      commit('SET_PATIENTS_ERROR', false);
      commit('SET_PATIENTS', patients);
    },
    DISPATCH_PATIENT_PROCEDURE_DATE: ({ commit }, payload) => commit('SET_PATIENT_PROCEDURE_DATE', payload),
    DISPATCH_PATIENT_PAY_DATE: ({ commit }, payload) => commit('SET_PATIENT_PAY_DATE', payload),
    DISPATCH_PATIENT_FILTER_PARAM: ({ commit }, payload) => {
      commit('SET_PATIENTS_LOADING', true);
      commit('SET_PATIENTS_FILTER_PARAM', payload);
      commit('SET_PATIENTS_LOADING', false);
    },
    DISPATCH_PATIENT_SEARCH_PARAM: ({ commit }, payload) => commit('SET_PATIENTS_SEARCH_PARAM', payload),
    DISPATCH_PATIENT_READY_TO_EDIT: ({ commit }, payload) => commit('SET_PATIENT_READY_TO_EDIT', payload),
  },
  mutations: {
    SET_PATIENTS: (state, payload) => {
      state.patients = payload;
    },
    SET_PATIENT_PROCEDURE_DATE: (state, payload) => {
      state.patient.procedureDate = payload;
    },
    SET_PATIENT_PAY_DATE: (state, payload) => {
      state.patient.payDate = payload;
    },
    SET_PATIENTS_ERROR: (state, payload) => {
      state.error = payload;
    },
    SET_PATIENTS_LOADING: (state, payload) => {
      state.loading = payload;
    },
    SET_PATIENTS_FILTER_PARAM: (state, payload) => {
      state.filterParam = payload;
    },
    SET_PATIENTS_SEARCH_PARAM: (state, payload) => {
      state.searchParam = payload;
    },
    SET_PATIENT_READY_TO_EDIT: (state, payload) => {
      state.patient = payload;
    },
  },
};
