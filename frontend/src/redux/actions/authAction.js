import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL,
    USER_LOGOUT ,USER_LOGOUT_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL, GET_TOKEN_REQUEST
} from './constants/userConstants'
import axios from 'axios'
import { dispatchToken } from './tokenAction'
import { useSelector } from 'react-redux'

//fetch data from db
//send the data to the DB so that it knows to signin the user
//log in the user ..
export const dispatchLogin = (creds) => async (dispatch) => {

    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        let data=''  ; 
        await axios({
            method: 'POST',
            url: 'http://localhost:3000/auth/login',
            headers: config.headers,
            data:creds 
        }).then( (response) =>{
            data=response 
            console.log(data);
        }).catch( (err) =>{
            console.log(err);
        })
  
        
  
   dispatch({
            type: GET_TOKEN_REQUEST,
        })

      
        dispatch({
            type: USER_LOGIN_SUCCESS,
           
            payload: {
                userInfo: data,
                isAdmin: data.role === 1 ? true : false,
            },
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('firstLogin', true)
        localStorage.setItem("isLogin", true) 
    } catch (error) {
        dispatch({
            type:  USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}
export const dispatchRegister = (creds) => async (dispatch) => {
    try {
        dispatch({
            type:  USER_REGISTER_REQUEST, 
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        let data=''  ; 
        await axios({
            method: 'POST',
            url: 'http://localhost:3000/users/',
            headers: config.headers,
            data:creds 
        }).then( (response) =>{
            data=response 
        }).catch( (err) =>{
            console.log(err);
        })
        dispatch({
            type:  USER_REGISTER_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log(error);
        dispatch({
            type:  USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}
export const logout = () => async (dispatch) => {
    try {
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        localStorage.removeItem('userInfo')
        window.location.href = '/'
        localStorage.setItem("token",null)
        dispatch({ type:  USER_LOGOUT }) 

        //   localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}

export const dispatchGetUser = (token) => async (dispatch) => {
 
    console.log(token);
   try {
        dispatch({
            type:  GET_USER_REQUEST,
        })
            console.log(token);
        const { data } = await axios.get('/user/infor', {
            headers: { Authorization: token },
        })
        dispatch({
            type:  GET_USER_SUCCESS,
            payload: {
                user: data,
                isAdmin: data.role === 1 ? true : false,
            },
        })
       localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}

