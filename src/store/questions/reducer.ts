import {
  FETCH_QUESTIONS,
  SET_QUESTIONS,
  QuestionsState,
  QuestionsActionTypes
} from "./types";
import { API_START, API_END } from "middleware/types";

const initialState: QuestionsState = {
  questions: [],
  isLoadingData: false
};

const reducer = (state = initialState, action: QuestionsActionTypes) => {
  console.log("action2 => ", action);
  switch (action.type) {
    case SET_QUESTIONS:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_QUESTIONS) {
        return { ...state, isLoadingData: true };
      }
      break;
    case API_END:
      if (action.payload === FETCH_QUESTIONS) {
        return { ...state, isLoadingData: false };
      }
      break;
    default:
      return state;
  }
};

export default reducer;
