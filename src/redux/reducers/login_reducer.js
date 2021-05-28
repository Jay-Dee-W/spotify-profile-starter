import { LOGIN, SET_TOKEN, SET_USER_DATA } from "../actions/action_types";

let initialState = {
    token: "",
    loggedIn: false,
    userData: {}
}


export default function login_reducer(state = initialState, action){
    let copyState = JSON.parse(JSON.stringify(state))
    switch(action.types){
        case SET_TOKEN:
        return {...copyState, token: action.payload}

        case LOGIN:
            return {...copyState, loggedIn: true}
        case  SET_USER_DATA: 
            return {...copyState, userData: action.payload}

    default:
        return state;
    }
}