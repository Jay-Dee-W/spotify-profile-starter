import axios from "axios";
import { LOGIN, SET_TOKEN, SET_USER_DATA } from "./action_types";

export const setToken = (data) => ({
    type: SET_TOKEN,
    payload: data
})

export const loggedIn = (data) => ({
    type: LOGIN,
    payload: data
})


export const setUserData = (data) => ({
    type: SET_USER_DATA,
    payload: data

})

export const getData = () => {
    return async (dispatch, getState) => {
        const options = {
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            headers: {

                Authorization: 'Basic MzBmNmIxMDNkNjlkNGUxNzhmNzEwOTQ3YmNkOTdiYjE6NTk4MTgzNjgyYjhmNDJhNmJhNWEzZWYwYTQyNzY3N2M='
            },
            data: { grant_type: 'client_credentials', '': '' }
        };

        axios.request(options).then(function (response) {
            
            dispatch(setUserData(response.data))
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });


    }
}


export const getUserInfo =  (token) => {
    return async (dispatch, getState) => {
        const options = {
            method: 'GET',
            url: 'https://api.spotify.com/v1/me',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer BQD2Sk_WNAGq4nxCx0D7MhLhcpVi-wRPUqnCYvMQbmy4Fj23RqHbUzkldgeMlfnIvJ5ArpCgKDYlG_VejErleYHde6NfggOuaJEIHnohUHZz1e8LCA7YDw8lrAld-cS9Dn27UPQrQDWiVtuXxdOpz71Mp2WdQeNi_BM4MBVVtnSbFenM'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }
}