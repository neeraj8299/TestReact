const initialState = {
  name: '',
  email: '',
  dob: '',
  gender: '',
};

const setContactState = (state, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetContactState':
      return setContactState(state, action);
    default:
      return state;
  }
};

export default reducer;
