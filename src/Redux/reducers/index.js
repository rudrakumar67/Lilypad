import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
