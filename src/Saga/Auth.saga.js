import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import * as VT from '../Redux/action/Actiontype'
import { setAlert } from '../Redux/action/alert.action';
import {googleSignedInAction , logedOutAction, SignedInAction, SingedIn } from '../Redux/action/Auth.action';
import { forgotPasswdAPI, googleSigninAPI ,SignInAPI, signOutAPI, userApi } from './Authapi';

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
   }catch(e){
      console.log(e);
      yield put(setAlert({text:e, color:"error"}))
   }
}
function* googleSignInsaga(action){
   try{
      const user = yield call(googleSigninAPI);
      yield put(googleSignedInAction(user));
      console.log(action.payload);
      yield put(setAlert({text:"Login in successfully",color:"success"}))

   }catch(e){
      console.log(e);
      yield put(setAlert({text:e, color:"error"}))


   }
}
function* forgotPasswd(action){
   try{
      const user = yield call(forgotPasswdAPI,action.payload);

   }catch(e){
      yield put({type:"USER_FETCH_FAILED",message:e.message})
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

function* watchlogOut(){
   yield takeEvery(VT.SIGNOUT_USER,signOutsaga)
}


function* watchForgotPasswd(){
   yield takeEvery(VT.FORGOT_PASSWORD,forgotPasswd)
}

export function* watchAuth(){
   yield all([
     watchSaga(),
     watchSignin(),
     watchForgotPasswd(),
     watchlogOut(),
     watchGoogleSignin()

  ]);
}
export default watchSaga;