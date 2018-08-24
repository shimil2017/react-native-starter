import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "./routes";

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams("WelcomeScreen");
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
  return router.getStateForAction(action, state);
};

export default NavReducer;
