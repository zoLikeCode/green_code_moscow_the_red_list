export const getPageCount = (totalCount, limitView) => {
  return Math.ceil(totalCount / limitView);
};

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 1; i < totalPages + 1; i++) {
    result.push(i);
  }
  return result;
};
