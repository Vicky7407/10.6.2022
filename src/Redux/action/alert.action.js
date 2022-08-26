import * as VT from './Actiontype'


export const setAlert = (value) =>(dispatch) =>{
    dispatch({type:VT.SET_ALERT ,payload:value});

}
export const resetAlert = () => (dispatch) =>{
    dispatch({type:VT.RESET_ALERT  });
}