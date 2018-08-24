import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import { persistStore, persistCombineReducers } from "redux-persist";

import ReduxNavigation from "./src/ReduxNavigation";
import configureStore from "./src/store/configureStore";
/*
const reducer = persistCombineReducers(config, { navigation });
const store = createStore(reducer, applyMiddleware(logger));
persistStore(store, null, () => {
  store.getState(); // if you want to get restoredState
});
*/

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: null
    };
  }
  async componentWillMount() {
    const store = await configureStore();
    this.setState({ store });
    console.log(store, "store");
  }
  render() {
    if (!this.state.store) return <View style={{ backgroundColor: "red" }} />;
    return (
      <Provider store={this.state.store}>
        <ReduxNavigation />
      </Provider>
    );
  }
}
