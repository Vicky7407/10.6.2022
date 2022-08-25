import * as VT from './Actiontype'


export const signUpAction = (values) => (dispatch) => {
    dispatch({type: VT.SINGUP_USER , payload: values})

    console.log(values);
}

export const signInAction = (values) => (dispatch) => {
    dispatch({type:VT.SINGIN_USER,payload:values})
}