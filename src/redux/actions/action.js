import axios from "axios";
import { SET_TOKEN } from "./action_types";

export const setToken = (data) => ({
    type: SET_TOKEN,
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
            data: {grant_type: 'client_credentials', '': ''}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });

    }
}