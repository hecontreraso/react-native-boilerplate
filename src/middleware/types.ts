export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";

enum Method {
  GET,
  POST
}
export interface ApiAction {
  path: string;
  method: Method;
  data: Object;
  onSuccess: Function;
  onFailure: boolean;
  label: string;
  headersOverride: string;
}
