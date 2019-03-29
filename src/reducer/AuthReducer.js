import isEmpty from "../validation/is-empty";
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_USER:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    default:
      return state;
  }
};
