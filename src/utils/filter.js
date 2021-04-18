export const filtering = { //eslint-disable-line
  filterByUnpaids: (patients) => patients.filter((patient) => !patient.paid),
  filterByName: (patients, searchParam) => {
    if (!searchParam) {
      return patients;
    }
    return patients.filter((patient) => (
      (patient.name.toLowerCase().includes(searchParam.toLowerCase()))));
  },
};
