import React from "react";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";

import store from "./src/store";
import RootStack from "navigators/Root";

const Navigation = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
