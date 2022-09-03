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
 
export const logOutAction = () => (dispatch) =>{
    dispatch({type:VT.SIGNOUT_USER});
}

export const SignedInAction = (values) => (dispatch) =>{
    dispatch({type:VT.SIGNEDIN_USER,payload:values})
}
export const logedOutAction = () => (dispatch) => {
    dispatch({type:VT.SIGNEDOUT_USER})
}

export const resetPasswordAction = (mail) => (dispatch) => {
    dispatch({type: VT.PASSWOED_RESET, payload:mail})
}

export const googleSignedInAction = () =>(dispatch) => {
    dispatch({type:VT.GOOGLE_SIGN_USER});
}