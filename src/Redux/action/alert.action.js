import * as VT from './Actiontype'


export const setAlert = (values) =>(dispatch) =>{
    dispatch({type:VT.SET_ALERT ,payload:values});

}

export const resetAlert = () => (dispatch) =>{
    dispatch({type:VT.RESET_ALERT  });
}

export const resetPasswordAction = (mail) => (dispatch) => {
    dispatch({type: VT.PASSWOED_RESET, payload:mail})
}