import { Question, FETCH_QUESTIONS, SET_QUESTIONS } from "./types";
import { apiAction } from "middleware/actions";

const OPEN_TRIVIA_BASE_URL = "https://opentdb.com";

export const fetchQuestions = () =>
  apiAction({
    url: OPEN_TRIVIA_BASE_URL,
    path: "/api.php",
    data: {
      amount: "10",
      difficulty: "hard",
      type: "boolean"
    },
    onSuccess: setQuestions,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_QUESTIONS
  });

const setQuestions = (questions: Question[]) => ({
  type: SET_QUESTIONS,
  payload: { questions }
});
