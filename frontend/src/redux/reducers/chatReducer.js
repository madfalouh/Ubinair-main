import  { 
    CHAT_CREATE_FAIL, 
    CHAT_CREATE_REQUEST,
    CHAT_CREATE_SUCCESS,
    CHAT_GET_REQUEST,
    CHAT_GET_SUCCESS ,
    CHAT_GET_FAIL 
    }  from "../actions/constants/chatConstants";



    export const chatCreateReducer = (state = {}, action) => {
        switch (action.type) {
            case CHAT_CREATE_REQUEST:
                return { loading: true }
            case CHAT_CREATE_SUCCESS:
                return { loading: false, success: true, messages: action.payload }
            case CHAT_CREATE_FAIL:
                return { loading: false, error: action.payload }
            default:
                return state
        }
    }


    export const chatFetchMsgReducer = (state = {}, action) => {
        switch (action.type) {
            case CHAT_GET_REQUEST:
                return { loading: true }
            case CHAT_GET_SUCCESS:
                return { loading: false, success: true, messages: action.payload }
            case CHAT_GET_FAIL :
                return { loading: false, error: action.payload }
            default:
                return state
        }
    }

