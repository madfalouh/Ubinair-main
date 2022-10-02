import React from 'react'
import './chat.css'
import ChatContact from './ChatContact'
import Message from './Message'

function ChatPage() {
    return (
        <div className="chat-page">
            <div className="sidebar">nav</div>
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
                    <ChatContact contactName="Mr. john doe" latestMessage="shgjfdlkhgfdjglfhdhssjlhdlgfdgjkhdsfgjkshdfglkjdsfhgsdflkjghdsflgsdf"/>
                    <ChatContact contactName="Mr. john doe" latestMessage="shgjfdlkhgfdjglfhdhssj"/>

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
