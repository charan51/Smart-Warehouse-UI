import axios from 'axios';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
const apiHost = "http://localhost:5000" 
export const register = (userData) => async dispatch => {
    try {
        const res = await axios.post(`${apiHost}/api/auth/register`, userData);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data
        });
    }
};

export const login = (userData) => async dispatch => {
    try {
        const res = await axios.post(`${apiHost}/api/auth/login`, userData);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data
        });
    }
};

export const LOGOUT = 'LOGOUT';
export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({
        type: LOGOUT
    });
};