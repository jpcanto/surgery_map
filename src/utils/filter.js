export const filtering = { //eslint-disable-line
  showOnlyUnpaids: (users) => users.filter((user) => !user.paid),
};
