import * as VT from './Actiontype'


export const signUpAction = (values) => (dispatch) => {
    dispatch({type: VT.SINGUP_USER , payload: values})
}

export const signInAction = (values) => (dispatch) => {
    dispatch({type:VT.SINGIN_USER,payload:values})
}
export const forgotPasswd = (values) =>(dispatch) =>{
    dispatch({type:VT.FORGOT_PASSWORD,payload:values})
 } 