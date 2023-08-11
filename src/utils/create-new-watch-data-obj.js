export const createNewWatchDataObj = (itemInputs) => {
  const newWatchData = {};
  itemInputs.forEach((input) => {
    newWatchData[input.classList[1]] = input.value;
  });

  return newWatchData;
};
