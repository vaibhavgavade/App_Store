export const actionOne = (data) => {
  return {
    type: 'ADD_DATA',
    payload: data,
  };
};
export const deleteItem = (id) => {
  return {
    type: 'REMOVE_DATA',
    payload: id,
  };
};
