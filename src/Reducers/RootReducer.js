const initialState = {
  contactList: [],
  isLoggedIn: false,
};

const setContactState = (state, action) => {
  console.log(action)
  return {
    ...state,
    contactList: [...action.payload],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getContactList":
      return setContactState(state, action);
    case "login":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
