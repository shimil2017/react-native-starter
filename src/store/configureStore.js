import { createStore, applyMiddleware, compose } from "redux";

import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./combineReducer";

import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";
const isDebuggingInChrome = false;
const loggerMiddleware = createLogger();
const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(loggerMiddleware);
}

export default function configureStore() {
  return new Promise((resolve, reject) => {
    try {
      let store = createStore(
        reducers,
        applyMiddleware(...middlewares),
        autoRehydrate()
      );

      persistStore(
        store,
        {
          storage: AsyncStorage,
          whitelist: null
        },
        () => resolve(store)
      );
    } catch (e) {
      reject(e);
    }
  });
}
