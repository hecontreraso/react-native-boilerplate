export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const API_ERROR = "API_ERROR";

export interface ApiActionTypes {
  type: typeof API | typeof API_START | typeof API_END;
  payload: string;
}
