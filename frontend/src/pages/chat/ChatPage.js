import React from 'react'
import './chat.css'

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
            </div>
            <div className="chat-area">
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
