import { LOGIN, SET_TOKEN, SET_USER_DATA, SET_USER_FOLLOWING, SET_USER_PLAYLIST } from "../actions/action_types";

let initialState = {
    token: "",
    loggedIn: false,
    userData: {},
    following: {},
    playlist: {}
}


export default function login_reducer(state = initialState, action){
    let copyState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case SET_TOKEN:
        return {...copyState, token: action.payload}

        case LOGIN:
            return {...copyState, loggedIn: true}
        case  SET_USER_DATA: 
            return {...copyState, userData: action.payload}
        case  SET_USER_FOLLOWING: 
            return {...copyState, following: action.payload}
        case  SET_USER_PLAYLIST: 
            return {...copyState, playlist: action.payload}
    default:
        return state;
    }
}