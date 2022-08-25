import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import * as VT from '../Redux/action/Actiontype'
import { SignInAPI, userApi } from './Authapi';

function* SingUpSaga(action) {
   try {
      const user = yield call(userApi, action.payload);
      // yield put({type:AT.SINGUP_USER, user: action.payload});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* SignInsaga(action){
   try{
      const user = yield call(SignInAPI,action.payload);

   }catch(e){
      yield put({type:"USER_FETCH_FAILED",message:e.message})
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
     watchSignin()

  ]);
}
export default watchSaga;