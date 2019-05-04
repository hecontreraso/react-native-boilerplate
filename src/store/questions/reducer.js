import {
  UPDATE_QUESTIONS__FAILURE,
  UPDATE_QUESTIONS__START,
  UPDATE_QUESTIONS__SUCCESS
} from "./actions";

const initialState = {
  questions: [],
  searchFailure: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_QUESTIONS__START:
      return { ...state, searchFailure: false };

    case UPDATE_QUESTIONS__SUCCESS:
      return { ...state, questions: payload.questions };

    case UPDATE_QUESTIONS__FAILURE:
      return { ...state, searchFailure: true };
    default:
      return state;
  }
};

export default reducer;
