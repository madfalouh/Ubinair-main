import classNames from 'classnames'
import React from 'react'
import '../styles/button.css'

function Button(props) {
  return (
    <div className={classNames("button", {
        "white-button" : props.behavior.includes("white-button"),
        "purple-button" : props.behavior.includes("purple-button"),
        "purple-glow" : props.behavior.includes("purple-glow"),
        "uppercase" : props.behavior.includes("uppercase")
    })}>
        <div className='button-text'>{props.text}</div>
        <div className={classNames('button-icon', {
          "no-icon" : props.behavior.includes("no-icon"),
        })}>{props.icon}</div>
    </div>
  )
}

export default Button