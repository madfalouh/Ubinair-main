import React from 'react'
import '../styles/firstSection.css'
import { ReactComponent as DownArrow } from '../assets/downArrow.svg'
import { ReactComponent as IconCalc } from '../assets/iconCalc.svg'
import { ReactComponent as FolderBGicon } from '../assets/folderBGicon.svg'
import { ReactComponent as WatchBGicon } from '../assets/watchBGicon.svg'
import Button from './Button'

function FirstSection() {
    return (
        <div className="lp-first-section" id="first">
            <div className="first-sec-header-logo">
                <img src={require('../assets/ubinair.png')} />
            </div>
            <div className="hero-section">
                <div className="hero-title">
                    Tu as un projet web pour ta boîte ?
                </div>
                <div className="hero-sub-title">
                    Bienvenue au One-stop Shop des Métiers du Web !
                </div>
                <div className="first-section-button">
                    <Button
                        text="calculer"
                        behavior={['white-button', 'uppercase', 'purple-glow']}
                        icon={<IconCalc />}
                    />
                </div>
            </div>
            <a href="#onestep" className="first-section-footer">
                <div className="first-section-footer-text">
                    Découvrez plus !
                </div>
                <DownArrow className="arrow" />
            </a>
            <FolderBGicon className="folderBGicon" prefixId="icon-1" />
            <WatchBGicon className="watchBGicon" prefixId="icon-2" />
        </div>
    )
}

export default FirstSection
