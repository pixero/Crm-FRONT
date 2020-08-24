import {AUTH_POST_REQUEST, REQUST_REFRESH_TOKEN, UPDATE_MESSAGE, UPDATE_NAME_USER, UPDATE_PASSWORD_USER} from "./Types";

export function creatorUpdatePasswordUser(password){
    return{
        type: UPDATE_PASSWORD_USER,
        password
    }
}

export function creatorUpdateNameUser(name){
    return{
        type: UPDATE_NAME_USER,
        name
    }
}

export function creatorUpdateMessageText(text){
    return{
        type: UPDATE_MESSAGE,
        messageWrong:text
    }
}

export function creatorAuthPostRequest(){
    return{
        type: AUTH_POST_REQUEST
    }
}

export function creatorRequestRefreshToken(){
    return{
        type: REQUST_REFRESH_TOKEN
    }
}