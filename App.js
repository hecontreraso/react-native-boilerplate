import React from "react";
import Home from "screens/Home";
import store from "./src/store";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
