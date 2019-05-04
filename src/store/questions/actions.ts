import { Question } from "./types";
import {
  UPDATE_QUESTIONS__FAILURE,
  UPDATE_QUESTIONS__START,
  UPDATE_QUESTIONS__SUCCESS
} from "./types";

export const updateQuestionsStart = () => ({
  type: UPDATE_QUESTIONS__START
});
export const updateQuestionsSuccess = (questions: Question[]) => ({
  type: UPDATE_QUESTIONS__SUCCESS,
  payload: { questions }
});
export const updateQuestionsFailure = () => ({
  type: UPDATE_QUESTIONS__FAILURE
});
