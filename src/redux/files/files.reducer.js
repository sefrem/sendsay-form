const initialState = [];

const files = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FILES":
      [...state, action.payload];
      return state;
      default:
          return state
  }
};
