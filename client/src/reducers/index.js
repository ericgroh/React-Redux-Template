import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
console.log(authReducer);
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
