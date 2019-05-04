import { createStore, combineReducers } from "redux";

import questionsReducer from "./questions";

const root = combineReducers({
  questionsReducer
});

const store = createStore(root);

export default store;
