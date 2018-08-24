import { combineReducers } from "redux";
//import NavReducer from "../reducer/NavReducer";
import Test from "../reducer/testreducer";

const reducers = combineReducers({
  NavReducer: Test
});
export default reducers;
