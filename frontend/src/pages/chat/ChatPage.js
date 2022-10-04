import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import './chat.css'
import ChatContact from './ChatContact'
import Message from './Message'







function ChatPage() {


const [users , setUsers] = useState([]) 

useEffect ( async ()=>  {
let temp = []

await axios({

url:'http://localhost:3000/users' ,
method : "get" , 
headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    
      },
}).then((res)=>{

res.data.map((res)=>{
console.log(res);
temp.push(<ChatContact contactName={res.fullName} latestMessage="shgjfdlkhgfdj"/>)


})

setUsers(temp)

} )

} , [] )



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
                </div>
                <div className="write-area">
                    <img
                        src={require('./chatAssets/paperclip.svg').default}
                        alt="paperclip"
                    />
                    <form id="message-container">
                    <input
                        type="text"
                        name="message"
                        className="message"
                        placeholder="Taper un message ..."
                    />
                    <button>
                    <img
                        src={require('./chatAssets/sendMsg.svg').default}
                        alt="send"
                    />
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
