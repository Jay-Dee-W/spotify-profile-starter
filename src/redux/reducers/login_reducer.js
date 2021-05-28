import { SET_TOKEN } from "../actions/action_types";

let initialState = {
    token: "",
    clientId: "30f6b103d69d4e178f710947bcd97bb1",
    clientSecret: ""
}


export default function login_reducer(state = initialState, action){
    let copyState = JSON.parse(JSON.stringify(state))
    switch(action.types){
        case SET_TOKEN:
        return {...copyState, token: action.payload}
    default:
        return state;
    }
}