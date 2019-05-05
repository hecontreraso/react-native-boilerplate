import { FETCH_QUESTIONS, SET_QUESTIONS, QuestionsActionTypes } from "./types";
import { API_START, API_END, ApiActionTypes } from "middleware/types";

const initialState: any = {
  questions: [],
  isLoadingData: false
};

const reducer = (
  state = initialState,
  // action: QuestionsActionTypes | ApiActionTypes
  action: any
) => {
  const { type, payload } = action;

  switch (type) {
    case SET_QUESTIONS:
      return { data: payload.questions };
    case API_START:
      if (payload === FETCH_QUESTIONS) {
        return { ...state, isLoadingData: true };
      }
      break;
    case API_END:
      if (payload === FETCH_QUESTIONS) {
        return { ...state, isLoadingData: false };
      }
      break;
    default:
      return state;
  }
};

export default reducer;
