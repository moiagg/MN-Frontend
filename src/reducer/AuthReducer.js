import isEmpty from "../validation/is-empty";
import {AUTHORIZE_USER} from '../actions/types'
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_USER:
    console.log('<',action.payload)
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user:action.payload
      }
    default:
      return state;
  }
};
