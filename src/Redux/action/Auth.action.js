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
    console.log("Done runing");
    dispatch({type:VT.SIGNOUT_USER});
}

export const SingedIn = (values) => (dispatch) =>{
    dispatch({type:VT.SIGNEDIN_USER,payload:values})
}