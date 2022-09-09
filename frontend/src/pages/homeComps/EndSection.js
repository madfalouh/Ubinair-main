import React from 'react'
import Button from './Button'
import {ReactComponent as IndexBGicon} from '../assets/indexBGicon.svg'
import '../styles/endSection.css'

function EndSection() {
  return (
    <div className='end-section'>
      <div className="end-section-content">
        <div className="end-section-title">Tu as un projet et tu n’as pas encore testé la méthode Ubinair !?</div>
        <div className="end-section-subtitle">Fais décoller ta boîte maintenant !</div>
        <div className="end-section-cfa">Ça commence 
        <span className='end-section-button'><Button text='ici' behavior={["purple-button","no-icon"]}/></span>
         par une estimation !</div>
      </div>
        <div className="end-section-icon"><IndexBGicon/></div>
        <div className="end-section-year">2022</div>
    </div>
  )
}

export default EndSection