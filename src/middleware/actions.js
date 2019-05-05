import { ApiAction, API } from "./types";

export const apiAction = ({
  url = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}): ApiAction => ({
  type: API,
  payload: {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headersOverride
  }
});
