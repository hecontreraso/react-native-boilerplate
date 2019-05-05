import { applyMiddleware, createStore, combineReducers, compose } from "redux";

// TODO: try to type api middleware
//@ts-ignore
import apiMiddleware from "../middleware/api";
import questionsReducer from "./questions";

const rootReducer = combineReducers({
  questions: questionsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(apiMiddleware))
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
