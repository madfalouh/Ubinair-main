import React from "react";
import "../styles/ccmSection.css";
import { ReactComponent as CcmNbrs } from "../assets/ccmNbrs.svg";
import { ReactComponent as CalcBGicon } from "../assets/calcBGicon.svg";
import { ReactComponent as PeopleBGicon } from "../assets/peopleBGicon.svg";
import { ReactComponent as PlayBGicon } from "../assets/playBGicon.svg";
import { ReactComponent as CheckBGicon } from "../assets/checkBGicon.svg";

function CcmSection() {
  return (
    <div className="ccm-section" id="ccm">
      <div className="ccm-title">Comment ça marche ?</div>
      <div className="ccm-section-main">
        <div className="ccm-nbrs">
          <CcmNbrs />
        </div>
        <div className="ccm-right-half">
          <div className="ccm-segment ccm-seg1">
            <div className="ccm-content ccm-cont1">
              <div className="ccm-subtitle">
                <span className="ccm-ordre">1</span> Calculateur
              </div>
              <div className="ccm-text">
                Alimentez le calculateur de vos préférences et estimez le coût
                de votre projet tout en gardant le contrôle de votre budget !
              </div>
            </div>
            <div className="ccm-icon ccm-calcicon">
              <CalcBGicon />
            </div>
          </div>
          <div className="ccm-segment ccm-seg2">
            <div className="ccm-content ccm-cont2">
              <div className="ccm-subtitle">
                <span className="ccm-ordre">2</span> Equipe Freelances
              </div>
              <div className="ccm-text">
                Suite à votre devis, nous sélectionnons les meilleurs freelances
                selon vos critères. Que ce soit un freelance ou une équipe, nous
                nous occupons de tout !
              </div>
            </div>
            <div className="ccm-icon ccm-people-icon">
              <PeopleBGicon />
            </div>
          </div>
          <div className="ccm-segment ccm-seg3">
            <div className="ccm-content ccm-cont1">
              <div className="ccm-subtitle">
                <span className="ccm-ordre">3</span> Progression
              </div>
              <div className="ccm-text">
                Vous pourrez suivre l'avancement de votre ou vos projets en
                temps réel grâce à des tableaux de bord dédiés selon le type de
                chaque projet.
              </div>
            </div>
            <div className="ccm-icon ccm-play-icon">
              <PlayBGicon />
            </div>
          </div>
          <div className="ccm-segment ccm-seg4">
            <div className="ccm-content ccm-cont1">
              <div className="ccm-subtitle">
                <span className="ccm-ordre">4</span> Résultats
              </div>
              <div className="ccm-text">
                Ton projet est prêt ! La qualité est garantie grâce à
                l’experience de nos project managers les commandant de bords et
                à l’engagement de nos magnifique cosmonaute / freelance !
              </div>
            </div>
            <div className="ccm-icon">
              <CheckBGicon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CcmSection;
