import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    // AUTH_USER,
    // LOGOUT_USER,
    // ADD_TO_CART_USER,
    // GET_CART_ITEMS_USER,
    // REMOVE_CART_ITEM_USER,
    // ON_SUCCESS_BUY_USER,
    // UPDATE_DATA_USER,
    // CLEAR_UPDATE_USER_DATA
} from './type';


import {USER_SERVER} from '../components/utils/misc';

export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}