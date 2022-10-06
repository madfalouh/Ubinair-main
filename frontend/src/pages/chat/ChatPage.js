import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import './chat.css'
import ChatContact from './ChatContact'
import Message from './Message'
import jwt_decode from "jwt-decode";
import { set } from 'mongoose'









function ChatPage() {


const [users , setUsers] = useState([])
const [selectedUser , setSelectedUser] = useState(null) ; 
const [messages , setMessages] = useState([])
const [message , setMessage] = useState("")
const [newSocket , setNewSocket] = useState(null)
const [type , setType] = useState("")

let temp = []

const token = sessionStorage.getItem("token")
const decoded_token=  jwt_decode(token);
useEffect ( ()=>  {

const fetchMessages=  async ()=>  {
let temp = []
await axios({

url:'http://localhost:3000/chat/'+decoded_token.id ,
method : "get" , 
headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    
      },
}).then((res)=>{
console.log(res);
res.data.map((res)=>{

getUser(res.receiverId );


if(res.senderId===decoded_token.id) {


temp.push( <Message sentBy="user" messageContent={res.content} />)
setMessages(temp)
}



})
//
} )
}
fetchMessages() ; 
} , [] )














useEffect (  ()=>  {

const newSocket = new WebSocket("ws://localhost:8000/")
newSocket.onmessage = function(message) {
const msg = JSON.parse(message.data)
messages.push(<Message sentBy="user" messageContent={msg.content}/>)


setMessages(messages)

}


} , [] )



async function getUser(id )  {

console.log('"rejjkergjkretgjklrtgojklmgrb');
await axios({
url:'http://localhost:3000/users/'+id ,
method : "get" , 
headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
      },
}).then((res)=>{


users.push( <div onClick={ () =>{ setSelectedUser(res.data);    }} ><ChatContact contactName={res.data.fullName} latestMessage="shgjfdlkhgfdj"   /></div>) 
setUsers(users)
} )

} 


useEffect ( ()=>  {


console.log("hadi");
let newSocket = new WebSocket("ws://localhost:8000")

setNewSocket(newSocket)
newSocket.onmessage = function(message) {
const msg = JSON.parse(message.data)
messages.push(<Message sentBy="user" messageContent={msg.content}/>)


setMessages(messages)

}


} , [] )





useEffect ( ()=>  {

if(type !=""){

newSocket.onmessage = function(message) {
const msg = JSON.parse(message.data)
messages.push(<Message sentBy="user" messageContent={msg.content}/>)


setMessages(messages)

}

}

} , [type] )


const hundleSend=  ()=>{

newSocket.send(JSON.stringify(
        {
          content: message,
          sender: "token.user_id",
          group:"selectedGroup",
          receiver: "selectedUser" ,
          receivers:"selectedGroup.users"
        }
      ));


setType("dfdfzk")
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
            <div className="chat-area">
                <div className='message-area'>
                    <Message sentBy="other" nameOfSender="Mr. john doe" messageContent="fjghsfdhkljfmhljhmdlkjdsmh"/>
                    <Message followUp="true" sentBy="other" nameOfSender="Mr. john doe" messageContent="fjghsfdhkljfmhljhmdlkjdsmh"/>
                    <Message sentBy="user" messageContent="fjghsfdhkljfmhljhmdlkjdsmh"/>
                    <Message sentBy="user" followUp="true" messageContent="fjghsfdhkljfmhljhmdlkjdsmh"/>
                    <Message sentBy="user" messageContent="fjghsfdhkljfmhljhmdlkjdsmh"/>
                    {messages}
                </div>
                <div className="write-area">
                    <img
                        src={require('./chatAssets/paperclip.svg').default}
                        alt="paperclip"
                    />
                    <div id="message-container">
                    <input
                        type="text"
                        name="message"
                        className="message"
                        placeholder="Taper un message ..."
                        onChange={(e)=> {setMessage(e.target.value)}  }
                    />
                    <button  onClick={hundleSend} >
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
