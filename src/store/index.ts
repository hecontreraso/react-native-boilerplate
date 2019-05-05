import { applyMiddleware, createStore, combineReducers } from "redux";

// TODO: try to type api middleware
//@ts-ignore
import * as apiMiddleware from "../middleware/api";
import questionsReducer from "./questions";

const rootReducer = combineReducers({
  questionsReducer
});

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));

export type AppState = ReturnType<typeof rootReducer>;

export default store;
