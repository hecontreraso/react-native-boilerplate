import React from "react";
import { createSwitchNavigator } from "react-navigation";

import Home from "screens/Home";
import Quiz from "screens/Quiz";
import Results from "screens/Results";

/**
 * We don't want to enable "back" actions for the main screens, so a Switch Navigator is a perfect fit
 */
export default createSwitchNavigator(
  {
    Home,
    Quiz,
    Results
  },
  {
    initialRouteName: "Home"
  }
);
