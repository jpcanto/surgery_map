export const sorting = { //eslint-disable-line
  orderByName: (x, y) => {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
  },
};
