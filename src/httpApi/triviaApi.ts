import axios from "axios";

const OPEN_TRIVIA_URL = "https://opentdb.com";

class triviaApi {
  async fetchRandomQuestions(params: Object) {
    try {
      const response = await axios.get(`api.php`, { params });
      console.log(response);
      // TODO: PUT REDUX ERROR HERE
    } catch (error) {
      // TODO: put sentry here
      console.error(error);
    }
  }
}

export default triviaApi;
