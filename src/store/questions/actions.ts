import { Question, FETCH_QUESTIONS, SET_QUESTIONS } from "./types";
import { apiAction } from "middleware/actions";

export const fetchQuestions = () =>
  apiAction({
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
