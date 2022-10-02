import React from 'react'
import "./message.css"
import classNames from 'classnames';


function Message(props) {
  return (
    <div className={classNames('chat-message', {
        "follow-up-message" : props.followUp === "true",
        "user-message" : props.sentBy === "user",
        "other-message" : props.sentBy === "other"
    })}>
        <div className='sent-by'>
            {props.nameOfSender}
        </div>
        <div className='message-wrapper'>
            <div className='message-txt'>
                {props.messageContent}
            </div>
            <div className='message-tail'></div>
        </div>
    </div>
  )
}

export default Message