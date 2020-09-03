const data = [];
export const reducer = (state = data, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, action.payload];
    case 'REMOVE_DATA':
      return state.filter((i) => i.id !== action.payload);

    default:
      return state;
  }
};
