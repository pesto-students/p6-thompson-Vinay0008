const initialState = {
  isOn: true,
};

const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, isOn: !state.isOn };
    default:
      return state;
  }
};

export default lightReducer;
