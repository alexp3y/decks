export const sortByCreatedOn = (a, b) =>
  new Date(b.createdOn) - new Date(a.createdOn);
