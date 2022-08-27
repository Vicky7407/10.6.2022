import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import * as VT from '../Redux/action/Actiontype'
import { setAlert } from '../Redux/action/alert.action';
import { SignInAPI, userApi } from './Authapi';

function* SingUpSaga(action) {
   try {
      const user = yield call(userApi, action.payload);
      yield put(setAlert({text:user,color:"success"}));
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put(setAlert({text:e, color:"error"}));
   }
}

function* SignInsaga(action){
   try{
      const user = yield call(SignInAPI,action.payload);
      // yield put(setAlert({type:VT.SET_ALERT,text:"success"}))
      console.log(user);
      yield put(setAlert({text:user.payload,color:"success"}));

   }catch(e){
      // yield put({type:"USER_FETCH_FAILED",message:e.message})
      yield put(setAlert({text:e.payload,color:"error"}));
   }
}

function* watchSaga() {
  yield takeEvery(VT.SINGUP_USER, SingUpSaga);
}


function* watchSignin(){
   yield takeEvery(VT.SINGIN_USER,SignInsaga)
}

export function* watchAuth(){
   yield all([
     watchSaga(),
     watchSignin(),

  ]);
}
export default watchSaga;