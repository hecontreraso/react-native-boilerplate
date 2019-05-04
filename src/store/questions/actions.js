export const UPDATE_QUESTIONS__FAILURE = "UPDATE_QUESTIONS__FAILURE";
export const UPDATE_QUESTIONS__START = "UPDATE_QUESTIONS__START";
export const UPDATE_QUESTIONS__SUCCESS = "UPDATE_QUESTIONS__SUCCESS";

export const updateQuestionsStart = () => ({
  type: UPDATE_QUESTIONS__START
});
export const updateQuestionsSuccess = questions => ({
  type: UPDATE_QUESTIONS__SUCCESS,
  payload: { questions }
});
export const updateQuestionsFailure = () => ({
  type: UPDATE_QUESTIONS__FAILURE
});
