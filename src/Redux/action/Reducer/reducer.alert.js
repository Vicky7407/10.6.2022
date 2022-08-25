import { RESET_ALERT, SET_ALERT } from "../Actiontype"



const initval = {
    text:"",
    color:""
}

export const alertReducer=(state=initval,action) =>{
    switch(action.type){
        case SET_ALERT:
            return{
                ...state,
                text:action.payload.text,
                color:action.payload.color
            }
        case RESET_ALERT:
            return{
                ...state,
                text:"",
                color:""
            }
        default:
            return state;

    } 
    
}