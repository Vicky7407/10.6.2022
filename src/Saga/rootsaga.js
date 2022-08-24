import { watchAuth } from "./Auth.saga";
import { all } from "redux-saga/effects";

export function* rootsaga(){
    yield all([watchAuth()]);
}