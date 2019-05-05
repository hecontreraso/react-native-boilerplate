export const API = "API";

enum Method {
  GET,
  POST
}
export interface ApiAction {
  url: string;
  method: Method;
  data: Object;
  onSuccess: Function;
  onFailure: boolean;
  label: string;
  headersOverride: string;
}
