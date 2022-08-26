import { combineReducers } from "redux";
import { alertReducer } from "./action/Reducer/reducer.alert";
import { reducerAuth } from "../Redux/action/Reducer/reducer.auth";



export const rootReducer = combineReducers({
      auth:reducerAuth,
      alert:alertReducer
})