import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../components/sidebar'
import './chat.css'
import ChatContact from './ChatContact'
import Message from './Message'
import jwt_decode from "jwt-decode";
import { set } from 'mongoose'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchFetchChat } from '../../redux/actions/chatAction'
import { getUserDetails } from '../../redux/actions/usersAction'









function ChatPage() {


    const [users, setUsers] = useState([])
    const [userList, setUserList] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    const newSocket = useRef(new WebSocket("ws://localhost:8000"))
    const [type, setType] = useState("")
    const getMesgs = useSelector((state) => state.msgs)
    const details = useSelector((state) => state.userDetailsReducer)
    const dispatch = useDispatch()
    const chatArea = useRef()
    const sendArea = useRef()
    let temp = []

    const token = sessionStorage.getItem("token")
    const decoded_token = jwt_decode(token);


    useEffect(() => {

        console.log(decoded_token);
        dispatch(dispatchFetchChat(decoded_token.id))


    }, [])

    useEffect(() => {
        if (getMesgs.messages) {
            const res = getMesgs.messages.messages[0]
            console.log("res" + res);
            if (res.userId === decoded_token.id) {
                dispatch(getUserDetails(res.receiverId))
            } else {
                dispatch(getUserDetails(res.senderId))
            }

        }
    }, [getMesgs])



    useEffect(() => {
        if (getMesgs.messages) {


            getMesgs.messages.messages.map((res) => {
                if (selectedUser != undefined) {
                    if (res.senderId === decoded_token.id && res.receiverId === selectedUser._id) {
                        temp.push(<Message sentBy="user" messageContent={res.content} />)
                        setMessages(temp)
                    } if (res.receiverId === decoded_token.id && res.senderId === selectedUser._id) {
                        temp.push(<Message sentBy="other" messageContent={res.content} />)
                        setMessages(temp)
                    }
                }
            })
        }
        chatArea.current.scrollTop = chatArea.current.scrollHeight
    }, [selectedUser])




    useEffect(() => {

        if (details.user != undefined && details.user._id != undefined && !(userList.some(user => user._id === details.user._id))) {

            users.push(<div onClick={() => { setSelectedUser(details.user); }} ><ChatContact contactName={details.user.fullName} latestMessage="Click to Start Chat" /></div>)
            setUsers(users)
            userList.push(details.user);
            setUserList(userList)
        }
    }, [details])




















    newSocket.current.onmessage = function (message) {
        const temp = messages
        const msg = JSON.parse(message.data)
        if (msg.senderId === decoded_token.id && msg.receiverId === selectedUser._id) {
            temp.push(<Message sentBy="user" messageContent={msg.content} />)
            console.log(messages);

        } if (msg.receiverId === decoded_token.id && msg.senderId === selectedUser._id) {
            temp.push(<Message sentBy="other" messageContent={msg.content} />)

        }
        let tempReset = []

        setMessages(tempReset)
        setMessages(temp)

    }




    const hundleSend = () => {

        newSocket.current.send(JSON.stringify(
            {
                content: message,
                userId: decoded_token.id,
                senderId: decoded_token.id,
                receiverId: selectedUser._id,
            }
        ));
        chatArea.current.scrollTop = chatArea.current.scrollHeight
    }






    return (
        <div className="chat-page">
            <div className="sidebar">
                <Sidebar ></Sidebar>
            </div>
            <div className="users-list">
                <div className="chat-search-bar">
                    <img
                        src={require('./chatAssets/search.svg').default}
                        alt="search"
                    />
                    <input
                        type="text"
                        name="search"
                        className="search"
                        placeholder="Search ..."
                    />
                </div>
                <div className='contact-list'>
                    {users}

                </div>
            </div>
            <div className="chat-area" ref={chatArea}>
                <div className='message-area'>
                    {messages}
                </div>
                <div className="write-area">
                    <img
                        src={require('./chatAssets/paperclip.svg').default}
                        alt="paperclip"
                    />
                    <div id="message-container" ref={sendArea} >
                        <input
                            type="text"
                            name="message"
                            className="message"
                            placeholder="Taper un message ..."
                            onChange={(e) => { setMessage(e.target.value) }}
                        />
                        <button onClick={hundleSend} >
                            <img
                                src={require('./chatAssets/sendMsg.svg').default}
                                alt="send"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
