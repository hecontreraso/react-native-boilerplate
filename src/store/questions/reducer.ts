import {
  FETCH_QUESTIONS,
  SET_QUESTIONS,
  QuestionsState,
  QuestionsActionTypes
} from "./types";

const initialState: QuestionsState = {
  questions: []
};

const reducer = (state = initialState, action: QuestionsActionTypes) => {
  console.log("action type => ", action.type);
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, isLoadingData: true };
    case SET_QUESTIONS:
      return { ...state, questions: action.payload.questions };
    default:
      return state;
  }
};

export default reducer;
