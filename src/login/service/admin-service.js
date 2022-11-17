const watchItems = async () => {
  const response = await fetch("http://localhost:3000/watches_data");
  return await response.json();
};

export const adminServices = {
  watchItems,
};
