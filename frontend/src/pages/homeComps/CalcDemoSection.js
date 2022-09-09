import React from 'react'
import '../styles/calcDemoSection.css'
import { ReactComponent as IconCalc } from '../assets/iconCalc.svg'
import { ReactComponent as CalcDemoBG } from '../assets/calcDemoBG.svg'
import { ReactComponent as CalcDemoPic1 } from '../assets/calcDemoPic1.svg'
import { ReactComponent as CalcDemoPic2 } from '../assets/calcDemoPic2.svg'
import { ReactComponent as RocketBGicon } from '../assets/rocketBGicon.svg'
import { ReactComponent as CalcDemoBGfilter } from '../assets/calcDemoBGfilter.svg'
import { ReactComponent as CalcSectionBG } from '../assets/calcSectionBG.svg'
import { ReactComponent as CalcDemoBGMobile } from '../assets/calcDemoBGMobile.svg'

import Button from './Button'

function CalcDemoSection() {
    return (
        <div className="calc-section">
            <div className="calc-section-button">
                <Button
                    text="calculer"
                    behavior={['white-button', 'uppercase', 'purple-glow']}
                    icon={<IconCalc />}
                />
            </div>
            <div className="calc-section-BG">
                <CalcSectionBG loading="lazy" />
            </div>
            <div className="calc-section-BG-mobile">
                <CalcDemoBGMobile loading="lazy" />
            </div>
            <div className="calc-section-title">
                Le calculateur ça marche comment ?
            </div>
            <div className="calc-section-demo">
                <div className="calc-demo-BG">
                    <CalcDemoBG loading="lazy" />
                </div>
                <div className="calc-demo-BG-filter">
                    <CalcDemoBGfilter loading="lazy" />
                </div>
                <div className="calc-demo-segment calc-seg1">
                    <div className="calc-demo-content">
                        <div className="calc-demo-title">
                            1- Le type de projet
                        </div>
                        <div className="calc-demo-text">
                            Choisi la nature de la prestation dont tu as besoin.
                        </div>
                    </div>
                    <div className="calc-demo-icon calc-icon1">
                        <CalcDemoPic1 loading="lazy" />
                    </div>
                </div>
                <div className="calc-demo-segment calc-seg2">
                    <div className="calc-demo-content">
                        <div className="calc-demo-title">
                            2- Choisi tes options
                        </div>
                        <div className="calc-demo-text">
                            Off-shore ou on-shore ? Senior ou Junior ? Design
                            simple ou Complexe ? Prends le temps de tester les
                            options mises à ta disposition afin de rester dans
                            ton budget tout en restant zen !
                        </div>
                    </div>
                    <div className="calc-demo-icon calc-icon2">
                        <CalcDemoPic2 loading="lazy" />
                    </div>
                </div>
                <div className="calc-demo-segment calc-seg3">
                    <div className="calc-demo-content">
                        <div className="calc-demo-title">
                            3- Valide ton projet
                        </div>
                        <div className="calc-demo-text">
                            Une fois satisfait de ton estimation valide ton
                            projet et regarde la magie s’enclencher ! Ton
                            project manager sera heureux de revoir ton
                            estimation avec toi, te conseiller et t’accompagner
                            sur la durée de ton voyage intergalactique avec
                            Ubinair !
                        </div>
                    </div>
                    <div className="calc-demo-icon calc-icon3">
                        <RocketBGicon loading="lazy" />
                    </div>
                </div>
            </div>
            <div className="calc-section-icon">
                <img src={require('../assets/thumbsupBGicon.png')} />
            </div>
        </div>
    )
}

export default CalcDemoSection
