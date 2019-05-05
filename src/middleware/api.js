import axios from "axios";
import { apiStart, apiEnd, apiError, apiFailure } from "./actions";
import { API } from "./types";

const OPEN_TRIVIA_BASE_URL = "https://opentdb.com";

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== API) return;

  const {
    path,
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

  if (label) dispatch(apiStart(label));

  console.log("OME", {
    url: path,
    method,
    headers,
    [dataOrParams]: data
  });
  axios
    .request({
      url: path,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => dispatch(onSuccess(data.results)))
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
