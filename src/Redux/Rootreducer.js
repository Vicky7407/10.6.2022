import { combineReducers } from "redux";
import { reducerAuth } from "../Redux/action/Reducer/reducer.auth";



export const rootReducer = combineReducers({
      auth:reducerAuth
})