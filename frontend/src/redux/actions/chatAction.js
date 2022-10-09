import { 
CHAT_CREATE_FAIL, 
CHAT_CREATE_REQUEST,
CHAT_CREATE_SUCCESS,
CHAT_GET_REQUEST,
CHAT_GET_SUCCESS ,
CHAT_GET_FAIL 
} from "./constants/chatConstants";
import axios from 'axios'

export const dispatchFetchChat = (id) => async (dispatch) => {
  console.log(id);
    try {
        dispatch({
            type: CHAT_GET_REQUEST,
        })
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }
        let data=''  ; 
        await axios({
            method: 'GET',
            url: 'http://localhost:3000/chat/'+id,
            headers: config.headers,
        }).then( (response) =>{
            data=response 
        }).catch( (err) =>{
            console.log(err);
        })
      console.log(data);
        dispatch({
            type: CHAT_GET_SUCCESS ,
           
            payload: {
                messages: data.data,
            },
        })
    } catch (error) {
        dispatch({
            type: CHAT_GET_FAIL ,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}


export const dispatchCreateChat = (creds) => async (dispatch) => {

    try {
        dispatch({
            type: CHAT_CREATE_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        let data=''  ; 
        await axios({
            method: 'POST',
            url: 'http://localhost:3000/chat/',
            headers: config.headers,
            data : creds
        }).then( (response) =>{
            data=response 
        }).catch( (err) =>{
            console.log(err);
        })
      
        dispatch({
            type: CHAT_CREATE_SUCCESS ,
           
            payload: {
                messages: 'created',
            },
        })
    } catch (error) {
        dispatch({
            type: CHAT_CREATE_FAIL ,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}



