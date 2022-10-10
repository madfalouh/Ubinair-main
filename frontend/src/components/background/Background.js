import { useEffect, useRef } from "react"
import React from 'react';
import ReactDOM from 'react-dom'
export default function Background ({circles}) {
const spanref = useRef()
    useEffect(() => {
        const render = ()=>{
        const spans= []
        for(var i = 0 ; i <circles ; i++ ){
        spans.push( <span></span>)
                }
        ReactDOM.render(spans, spanref.current);
       }
       render()
  }, [])
return(
<div className="background  bg-transparent "  ref={spanref}>
                </div>

)

}