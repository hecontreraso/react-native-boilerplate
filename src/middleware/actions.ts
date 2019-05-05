import { API, API_START, API_END, API_ERROR } from "./types";

export const apiStart = (label: string) => ({
  type: API_START,
  payload: label
});

export const apiEnd = (label: string) => ({
  type: API_END,
  payload: label
});

export const apiError = (error: Object) => ({
  type: API_ERROR,
  error
});

interface ApiActionParams {
  path: string;
  method?: "GET" | "POST";
  data?: object | null;
  onSuccess: Function;
  onFailure: Function;
  label: string;
  headers?: object | null;
}
export const apiAction = ({
  path = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headers = null
}: ApiActionParams) => ({
  type: API,
  payload: {
    path,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headers
  }
});
