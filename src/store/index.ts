import { createStore, combineReducers } from "redux";

import questionsReducer from "./questions";

const rootReducer = combineReducers({
  questionsReducer
});

const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
