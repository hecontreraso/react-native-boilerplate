export const UPDATE_QUESTIONS__START = "UPDATE_QUESTIONS__START";
export const UPDATE_QUESTIONS__SUCCESS = "UPDATE_QUESTIONS__SUCCESS";
export const UPDATE_QUESTIONS__FAILURE = "UPDATE_QUESTIONS__FAILURE";

enum Type {
  boolean,
  multiple
}
enum Difficulty {
  easy,
  medium,
  hard
}
export interface Question {
  category: string;
  type: Type;
  difficult: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionsState {
  questions: Question[];
  searchFailure: boolean;
}

interface updateQuestionsStartAction {
  type: typeof UPDATE_QUESTIONS__START;
  payload: never;
}

interface UpdateQuestionsSuccessAction {
  type: typeof UPDATE_QUESTIONS__SUCCESS;
  payload: {
    questions: Question[];
  };
}

interface updateQuestionFailureAction {
  type: typeof UPDATE_QUESTIONS__FAILURE;
  payload: never;
}

export type QuestionsActionTypes =
  | updateQuestionsStartAction
  | UpdateQuestionsSuccessAction
  | updateQuestionFailureAction;
