import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import { history } from '../History';
import * as VT from '../Redux/action/Actiontype'
import { setAlert } from '../Redux/action/alert.action';
import {googleSignedInAction , logedOutAction, SignedInAction, SingedIn } from '../Redux/action/Auth.action';
import {  googleSigninAPI ,SignInAPI, signOutAPI, userApi,resetPasswordAPI } from './Authapi';

function* SingUpSaga(action) {
   try {
      const user = yield call(userApi, action.payload);
      console.log(user);
      yield put(setAlert({text:user,color:"success"}));
   } catch(e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put(setAlert({text:e, color:"error"}));
   }
}

function* SignInsaga(action){
   try{
      const user = yield call(SignInAPI,action.payload);
      // yield put(setAlert({type:VT.SET_ALERT,text:"success"}))
      console.log(user);
      yield put(SignedInAction(user))
      yield put(setAlert({text:"Login in successfully",color:"success"}));
      history.push("/");

   }catch(e){
      // yield put({type:"USER_FETCH_FAILED",message:e.message})
      yield put(setAlert({text:e,color:"error"}));
   }
}
function* signOutsaga(action){
   console.log(action,"action Done");
   try{
      const user=yield call(signOutAPI,action.payload);
      yield put(logedOutAction())
      yield put(setAlert({text:user,color:"success"}))
      history.push("/login")
   }catch(e){
      console.log(e);
      yield put(setAlert({text:e, color:"error"}))
   }
}
function* googleSignInsaga(action){
   try{
      const user = yield call(googleSigninAPI);
      yield put(SignedInAction(user));
      console.log(action.payload);
      yield put(setAlert({text:"Login in successfully",color:"success"}))

   }catch(e){
      console.log(e);
      yield put(setAlert({text:e, color:"error"}))


   }
}
function* resetPassword(action) {
   try {
     const user = yield call(resetPasswordAPI, action.payload);
     yield put(resetPassword(user));
     yield put(setAlert({ payload: {text : "Please check your mail", color: "success"}}))
   } catch (e) {
     yield put(setAlert({type: VT.SET_ALERT, payload: {text : " Please try again", color: "error"}}))
     console.log(e);
   }
 }
 
function* watchGoogleSignin(){
   yield takeEvery(VT.GOOGLE_SIGN_USER,googleSignInsaga)
}


function* watchSaga() {
  yield takeEvery(VT.SINGUP_USER, SingUpSaga);
}


function* watchSignin(){
   yield takeEvery(VT.SINGIN_USER,SignInsaga)
}
function* watchResetPassword() {
   yield takeEvery(VT.PASSWOED_RESET, resetPassword); 
 }
function* watchlogOut(){
   yield takeEvery(VT.SIGNOUT_USER,signOutsaga)
}


export function* watchAuth(){
   yield all([
     watchSaga(),
     watchSignin(),
     watchlogOut(),
     watchGoogleSignin(),
     watchResetPassword()

  ]);
}
export default watchSaga;