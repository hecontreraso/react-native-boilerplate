import axios from "axios";
import { Action, Dispatch, Middleware, MiddlewareAPI } from "redux";
import { ThunkAction } from "redux-thunk";

import { API } from "./types";
import { AppState } from "../store";
import { apiError, apiStart, apiEnd } from "./actions";

const OPEN_TRIVIA_BASE_URL = "https://opentdb.com";

const apiMiddleware = state => next => action => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // axios default configuration
  axios.defaults.baseURL = OPEN_TRIVIA_BASE_URL;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => dispatch(onSuccess(data)))
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
