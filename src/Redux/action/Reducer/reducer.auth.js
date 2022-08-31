import * as VT from "../Actiontype"
const initVal ={
    isLoading:false,
    user:null,
    error:''

}

export const reducerAuth =(state=initVal,action) =>{
     switch (action.type) {
        case VT.SIGNEDIN_USER:
            return{
                ...state,
                user:action.payload,
                isLoading:false,
                error:false,

            }
        default:
            return state;
     }
}