import { Question, QuestionsState, QuestionsActionTypes } from "./types";

import {
  UPDATE_QUESTIONS__FAILURE,
  UPDATE_QUESTIONS__START,
  UPDATE_QUESTIONS__SUCCESS
} from "./types";

const initialState: QuestionsState = {
  questions: [],
  searchFailure: false
};

const reducer = (
  state = initialState,
  action: QuestionsActionTypes
): QuestionsState => {
  const { type } = action;

  switch (type) {
    case UPDATE_QUESTIONS__START:
      return { ...state, searchFailure: false };

    case UPDATE_QUESTIONS__SUCCESS:
      return { ...state, questions: action.payload.questions };

    case UPDATE_QUESTIONS__FAILURE:
      return { ...state, searchFailure: true };
    default:
      return state;
  }
};

export default reducer;
