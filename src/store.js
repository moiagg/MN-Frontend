import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducer";

import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const Store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);
export default Store