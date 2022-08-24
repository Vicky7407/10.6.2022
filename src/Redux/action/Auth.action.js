import * as VT from '../ActionType'


export const sighUpAction = (values) => (dispatch) => {
    dispatch({type: VT.SINGUP_USER , payload: values})

    console.log(values);
}