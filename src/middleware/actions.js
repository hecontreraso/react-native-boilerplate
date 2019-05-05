import {
  ApiAction,
  API,
  API_START,
  API_END,
  ACCESS_DENIED,
  API_ERROR
} from "./types";

export const apiStart = label => ({
  type: API_START,
  payload: label
});

export const apiEnd = label => ({
  type: API_END,
  payload: label
});

export const accessDenied = url => ({
  type: ACCESS_DENIED,
  payload: {
    url
  }
});

export const apiError = error => ({
  type: API_ERROR,
  error
});

export const apiAction = ({
  path = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}): ApiAction => ({
  type: API,
  payload: {
    path,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headersOverride
  }
});
