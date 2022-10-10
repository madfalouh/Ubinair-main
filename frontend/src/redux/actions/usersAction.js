import {
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    UPDATE_USERSTATUS_REQUEST,
    UPDATE_USERSTATUS_SUCCESS,
    UPDATE_USERSTATUS_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
} from './constants/userConstants'
import axios from 'axios'
import { toast } from 'react-toastify'
import { checkImage, imageUpload } from '../../utils/ImageUploade'
import { listAllProjects } from './projectActions'
export const GetAllUsers = (token) => async (dispatch) => {
    const tokenn = localStorage.getItem("token")
    try {
        dispatch({
            type: GET_ALL_USERS_REQUEST,
        })
        const { data } = await axios.get('/user/all_infor', {
            headers: { Authorization: tokenn },
        })
        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: data,
        })

        //   localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: GET_ALL_USERS_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}
export const getUserDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })

        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }
        console.log(id);
        const { data } = await axios.get(`http://localhost:3000/users/${id}`, config)
        
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: {
                user: data,
                isAdmin: data.role === 1 ? true : false,
            },
        })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const updateUserStatus =
    (id, creds) => async (dispatch) => {
        try {
            dispatch({
                type: UPDATE_USERSTATUS_REQUEST,
            })
       

            const config = {
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                },
            }

             await axios(
                        {
                    method : "post" ,
                    url : 'http://localhost:3000/users/update' , 
                    headers : config.headers ,
                    data : {
                                id :id ,
                                todolist: creds

}
                    }

                    )

            dispatch({
                type: UPDATE_USERSTATUS_SUCCESS,
            })
        } catch (error) {
            dispatch({
                type: UPDATE_USERSTATUS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
            toast.dismiss()
            toast.error(error.response.data.msg, {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }
export const DeleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST,
        })
        toast.dismiss()
        toast.loading('Please wait...', {
            position: toast.POSITION.TOP_CENTER,
        })

        const { token } = getState()
const tokenn = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: tokenn,
            },
        }

        await axios.delete(`/user/delete/${id}`, config)
        dispatch({
            type: USER_DELETE_SUCCESS,
        })
        toast.dismiss()
        toast.success('Succès Delete !', {
            position: toast.POSITION.TOP_CENTER,
        })
    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
export const updateUserProfile = ({data,avatar,user}) => async (dispatch, getState) => {
    try {
        const { token } = getState()
const tokenn = localStorage.getItem("token")
        let media
        const config = {
            headers: {
                Authorization: tokenn,
            },
        }
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        })
        toast.dismiss()
        toast.loading('Please wait...', {
            position: toast.POSITION.TOP_CENTER,
        })

        console.log('user mn disoatcher', data)
        if (avatar) media = await imageUpload([avatar])
        console.log('media', media)

        // data.avatar = media[0].url ? media[0].url : user.avatar
        console.log('object.....', data.avatar)

        const  res  = await axios.put(`/user/update`,{ ...data, avatar: avatar ? media[0].url : user.avatar}, config)
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
        })
        toast.dismiss()
        toast.success('Succès Update !', {
            position: toast.POSITION.TOP_CENTER,
        })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
        toast.dismiss()
        toast.error('error...', {
            position: toast.POSITION.TOP_CENTER,
        })
    }
}

