import axios from "axios";
import { LOGIN, SET_TOKEN, SET_USER_DATA ,SET_USER_FOLLOWING,SET_USER_PLAYLIST } from "./action_types";

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

export const setUserFollowing = (data) => ({
    type: SET_USER_FOLLOWING,
    payload: data

})

export const setUserPlaylist = (data) => ({
    type: SET_USER_PLAYLIST,
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
           
        }).catch(function (error) {
            console.error(error);
        });


    }
}



export const getUserInfo =  (token) => {
    // console.log(token)
    return async (dispatch, getState) => {
        const options = {
            method: 'GET',
            url: 'https://api.spotify.com/v1/me',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `
            }
        };
        // console.log(options)
        axios.request(options).then(function (response) {
          
            dispatch(setUserData(response))
        }).catch(function (error) {
            console.error(error);
        });

    }
}

export const getUserFollowing =  (token) => {
    // console.log(token)
    return async (dispatch, getState) => {
        const options = {
            method: 'GET',
            url: 'https://api.spotify.com/v1/me/following',
            type:'artist',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `
            }
        };
        console.log(options)
        axios.request(options).then(function (response) {
          
            dispatch(setUserFollowing(response))
        }).catch(function (error) {
            console.error(error);
        });

    }
}

export const getUserPlaylist =  (token, userId) => {
    console.log(token, userId)
    return async (dispatch, getState) => {
        const options = {
            method: 'GET',
            url: `https://api.spotify.com/v1/users/${userId}/playlists`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `
            }
        };
        console.log(options)
        // axios.request(options).then(function (response) {
          
        //     dispatch(setUserPlaylist(response))
        // }).catch(function (error) {
        //     console.error(error);
        // });

    }
}