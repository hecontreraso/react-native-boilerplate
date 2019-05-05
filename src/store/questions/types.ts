export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const SET_QUESTIONS = "SET_QUESTIONS";

export interface Question {
  category: string;
  type: "boolean" | "multiple";
  difficult: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionsState {
  questions: Question[];
  isLoadingData: boolean;
}

interface fetchQuestionsAction {
  type: typeof FETCH_QUESTIONS;
  payload: never;
}

interface setQuestionsAction {
  type: typeof SET_QUESTIONS;
  payload: {
    questions: Question[];
  };
}

export type QuestionsActionTypes = fetchQuestionsAction | setQuestionsAction;
