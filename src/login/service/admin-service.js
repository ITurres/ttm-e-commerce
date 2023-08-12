const watchesDataURL = 'http://localhost:3000/watches_data';

const watchItems = async () => {
  const response = await fetch(`${watchesDataURL}`);
  return await response.json();
};

const addNewItem = async (newWatchData) => {
  return await fetch(`${watchesDataURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: uuid.v4(),
      ...newWatchData,
    }),
  })
    .then((response) => response)
    .catch((error) =>
      console.error(
        `There was an error trying to Add a new watch, Error: => ${error}`
      )
    );
};

const updateWatchData = async (newWatchData) => {
  return await fetch(`${watchesDataURL}/${newWatchData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...newWatchData,
    }),
  })
    .then((response) => response)
    .catch((error) =>
      console.error(
        `There was an error trying to Update watch data, Error: => ${error}`
      )
    );
};

const deleteItem = async (itemId) => {
  return await fetch(`${watchesDataURL}/${itemId}`, {
    method: 'DELETE',
  });
};

export const adminServices = {
  watchItems,
  addNewItem,
  updateWatchData,
  deleteItem,
};
