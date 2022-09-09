import React from 'react'
import '../styles/oneStepSection.css'
import { ReactComponent as WaveyBG } from '../assets/waveyBG.svg'
import { ReactComponent as WaveyBGMoile } from '../assets/waveyBGMobile.svg'
import { ReactComponent as FileBGicon } from '../assets/fileBGicon.svg'
import { ReactComponent as CoinBGicon } from '../assets/coinBGicon.svg'
import { ReactComponent as ShieldBGicon } from '../assets/shieldBGicon.svg'
import { ReactComponent as LightRays } from '../assets/lightRays.svg'
import { ReactComponent as LightRaysReverse } from '../assets/lightRaysReverse.svg'
import { ReactComponent as BgRode } from '../assets/bgRode.svg'
import { ReactComponent as DownArrow } from '../assets/downArrow.svg'
import { ReactComponent as LightBulb } from '../assets/lightBulb.svg'
import { ReactComponent as MobileKh } from '../assets/mobileKh.svg'
import { ReactComponent as Line } from '../assets/Line.svg'

import OneStepCard from './OneStepCard'

function OneStepSection() {
    return (
        <div className="one-step-section" id="onestep">
            <WaveyBG loading="lazy" className="waveyBG" />
            <div className="waveyBG-mobile">
                <WaveyBGMoile />
            </div>
            <div className="line">
                <Line />
            </div>
            <div className="one-step-intro">
                <div className="onestep-intro-title">C’est quoi ?</div>
                <div className="onestep-intro-subtitle">
                    One-stop shop, c’est :
                </div>
            </div>
            <div className="light-rays-on-top">
                <LightRaysReverse loading="lazy" />
            </div>
            <div className="onestep-header-mobile">
                <div className="onestep-header-mobile-text">
                    Découvrez plus!
                </div>
                <DownArrow className="onestep-arrow" loading="lazy" />
            </div>
            <div className="one-step-cards">
                <div className="onestep-card">
                    <OneStepCard
                        title="Des services divers"
                        text="Tu seras amené en tant qu’entrepreneur à créer l’identité visuelle de ta boîte, 
            un site internet, une application mobile et un tas d’autres projets web. Parfois plusieurs à la fois.  
            Inutile de disperser tes ressources et perdre du temps précieux pour trouver les bons prestataires 
            pour chaque prestation. Ubinair est le Guichet Unique des métiers du web où tu trouveras tout ce 
            dont tu as besoin. Tant que ça relève du web, on sait faire !"
                        icon={<FileBGicon />}
                        behavior={['right-card']}
                    />
                </div>
                <div className="onestep-card">
                    <OneStepCard
                        title="Des Budgets Adaptés"
                        text="Le budget ne doit pas être un blocage pour toi ! 
            C’est pour cela que nous avons pensé une offre flexible, 
            qui te permet de répondre parfaitement à tes besoins, sans dépasser ton budget.
            En utilisant notre calculateur, tu pourras modifier l’offre selon tes préférences."
                        icon={<CoinBGicon />}
                        behavior={['smaller-icon', 'left-card']}
                    />
                </div>
                <div className="onestep-card shield-card">
                    <OneStepCard
                        title="Et un Gage de Qualité"
                        text="Nous garantissons la qualité des prestations fournies, 
           le respect des délais et le non-dépassement des budgets grâce à 
           la méthode Ubinair qui repose sur une sélection méticuleuse des prestataires, 
           un suivi en temps réel des projets et une communication en continu assurée par 
           des chefs de projet qui te sont dédiés. Nous sommes ton seul interlocuteur et 
           nous nous engageons à te satisfaire !"
                        icon={<ShieldBGicon />}
                        behavior={[
                            'pos-regulator',
                            'bigger-icon',
                            'right-card',
                        ]}
                    />
                </div>
            </div>
            <div className="one-step-footer">
                <div className="onestep-footer-title">
                    Le tout dans 100% de Transparence
                </div>
                <div className="onestep-footer-subtitle">
                    Des offres ambiguës, pleines d’astérisques et des coûts
                    cachés partout ? Tu es à l’abri de tout cela grâce à la
                    méthode Ubinair, qui propose des prix publics et des offres
                    simples pour <span className="bold-word">100%</span> de{' '}
                    <span className="bold-word">TRANSPARENCE</span>.
                </div>
                <div className="mobile-kh">
                    <MobileKh />
                </div>
                <div className="light-rays">
                    <LightRays />
                </div>
            </div>
            <div className="light-bulb">
                <LightBulb />
            </div>
            <div className="bg-rode">
                <BgRode />
            </div>
        </div>
    )
}

export default OneStepSection
