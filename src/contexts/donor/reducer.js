import * as Types from "./types";
import { Sign, Login, LoginWithGoogle } from "../../firebase/providers/donor"


export const reducer = (state, action) => {
    switch(action.type){
        case Types.LOGIN: {
            Login({email: state.email, pass: action.payload}, action.dispatch, action.cb);
            return {...state};
        }
        case Types.LOGOUT: {
            return {...state};
        }
        case Types.SIGN: {
            Sign({...state, pass: action.payload}, action.dispatch, action.cb);
            return {...state};
        }
        case Types.LOGINGOOGLE: {
            LoginWithGoogle(action.dispatch);
            return {...state};
        }

        case Types.SETNAME: {
            return {...state, name: action.payload};
        }
        case Types.SETEMAIL: {
            return {...state, email: action.payload};
        }
        case Types.SETPHONE: {
            return {...state, phone: action.payload};
        }
        case Types.SETLOGGED: {
            return {...state, ...action.payload, logged: true};
        }
        default: {
            console.log("Action não encontrada", action.type);
            return {...state};
        }
    }
}