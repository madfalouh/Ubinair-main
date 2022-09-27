import '../styles/navbar.css'
import { ReactComponent as UbiLogo } from '../assets/ubiLogo.svg'
import { ReactComponent as SideArrow } from '../assets/sideArrow.svg'
import { ReactComponent as BurgerIcon } from '../assets/burgerIcon.svg'
import { ReactComponent as NavCheck } from '../assets/navCheck.svg'
import { ReactComponent as NavIntero } from '../assets/navIntero.svg'
import { ReactComponent as NavPhone } from '../assets/navPhone.svg'

import React, { useState } from 'react'
import classNames from 'classnames'

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="nav-wrapper">
            <div className="lp-nav">
                <a href="#first" className="ubiLogo">
                    {' '}
                    <UbiLogo />
                </a>
                <div className="nav-options-container">
                    <a href="#onestep" className="nav-option">
                        C'est quoi ?
                    </a>

                    <a href="#ccm" className="nav-option">
                        Comment ça marche ?
                    </a>
                    <a href="#missions" className="nav-option">
                        Missions Réussies
                    </a>
                    <a
                        href="#calender"
                        className="nav-option reserve-call-option"
                    >
                        Je réserve un call
                    </a>
                </div>
            </div>
            <div
                className={classNames('burger-icon', {
                    'burger-icon-hidden': open,
                })}
                onClick={() => setOpen(true)}
            >
                <BurgerIcon />
            </div>
            <div
                className={classNames('side-nav', {
                    'side-nav-open': open,
                    // "side-nav-closed": !open,
                })}
            >
                <div className="go-back" onClick={() => setOpen(false)}>
                    <div className="side-arrow" tabindex="2">
                        <SideArrow />
                    </div>
                </div>
                <div className="sidebar-options">
                    <a
                        href="#onestep"
                        className="sidebar-option"
                        onClick={() => setOpen(false)}
                    >
                        <div className="option-icon">
                            <NavIntero />
                        </div>
                        <span className="option-text">C'est quoi ?</span>
                    </a>

                    <a
                        href="#ccm"
                        className="sidebar-option"
                        onClick={() => setOpen(false)}
                    >
                        <div className="option-icon">
                            <NavPhone />
                        </div>
                        <span className="option-text">Comment ça marche ?</span>
                    </a>
                    <a
                        href="#missions"
                        className="sidebar-option"
                        onClick={() => setOpen(false)}
                    >
                        <div className="option-icon">
                            <NavCheck />
                        </div>
                        <span className="option-text">Missions Réussies</span>
                    </a>
                    <a
                        href="#calender"
                        className="sidebar-option"
                        onClick={() => setOpen(false)}
                    >
                        <div className="option-icon">
                            <NavIntero />
                        </div>
                        <span className="option-text">Je réserve un call</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
