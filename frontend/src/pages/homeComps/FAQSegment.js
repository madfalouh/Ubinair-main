import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import '../styles/FAQSegment.css'
import { ReactComponent as DownArrow2 } from '../assets/downArrow2.svg'

function FAQSegment(props) {
    const [show, setShow] = useState(false)
    const [height, setHeight] = useState(60)
    const textRef = useRef()

    useEffect(() => {
        if (textRef.current) {
            if (show) {
                const boundings = textRef.current.getBoundingClientRect()
                const { height } = boundings
                setHeight(height + 60 + 80)
            } else {
                setHeight(60)
            }
        }
    }, [show])

    return (
        <div
            onClick={() => {
                setShow(!show)
            }}
            className={classNames('FAQ-segment', {
                'show-background': show,
                'hide-background': !show,
            })}
            style={{
                height: height,
            }}
            tabindex="1"
        >
            <div className="FAQ-title">
                <div className="FAQ-qst">{props.qst}</div>
                <div
                    className={classNames('FAQ-button', {
                        upside: show === true,
                        downside: show === false,
                    })}
                >
                    <DownArrow2 />
                </div>
            </div>
            <div
                className={classNames('FAQ-text', {
                    show: show === true,
                    hide: show === false,
                })}
                ref={textRef}
            >
                {props.text}
            </div>
        </div>
    )
}

export default FAQSegment
