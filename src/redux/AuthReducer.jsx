import {AUTH_POST_REQUEST, REQUST_REFRESH_TOKEN, UPDATE_MESSAGE, UPDATE_NAME_USER, UPDATE_PASSWORD_USER} from "./Types";
import Axios from "axios";

const initialState = {
    name: '',
    password: '',
    messageWrong: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PASSWORD_USER:
            return {...state, password: action.password};
        case UPDATE_NAME_USER:
            return {...state, name: action.name};
        case UPDATE_MESSAGE:
            return {...state, messageWrong: action.messageWrong};
        case AUTH_POST_REQUEST:

            let arr = {
                'username': state.name,
                'password': state.password
            }
            arr = JSON.stringify(arr)
            Axios.post('/authenticate', arr, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then(response => {
                    if (response.data.access_token != null) {
                        localStorage.setItem('accessToken', response.data.access_token);
                        localStorage.setItem('refreshToken', response.data.refresh_token);
                        localStorage.setItem('isAuth', true);
                        localStorage.setItem('username', response.data.username);
                        localStorage.setItem('picture', response.data.picture);
                        window.location.reload()
                    } else {
                        //  message in form
                    }
                })
                .catch(error => {
                    console.error(error)
                })
            return {...state};
        case REQUST_REFRESH_TOKEN :

            Axios.get('authenticate/updateTokens',{headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem('refreshToken')
                }})
                .then( response  =>{

                            localStorage.setItem('accessToken',response.data.access_token);
                            localStorage.setItem('refreshToken', response.data.refresh_token);

                })
                .catch(error =>{
                    localStorage.clear();
                    window.location.reload();
                })
            return {...state};
        default:
            return state
    }
}