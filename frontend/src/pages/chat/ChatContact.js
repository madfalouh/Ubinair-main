import React from 'react'
import "./contact.css"

function ChatContact(props) {
  return (
    <div className='chat-contact'>
        <div className='contact-name'>
            {props.contactName}
        </div>
        <div className='contact-latest-message'>
            {props.latestMessage}
        </div>
    </div>
  )
}

export default ChatContact