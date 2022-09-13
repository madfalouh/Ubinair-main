import React, { useState } from "react";
import classNames from "classnames";
import { ReactComponent as Fond1 } from "../assets/fond1.svg";
import { ReactComponent as Fond2 } from "../assets/fond2.svg";
import { ReactComponent as Fond1Circle } from "../assets/fond1Circle.svg";
import { ReactComponent as Fond2Circle } from "../assets/fond2Circle.svg";
import { ReactComponent as FondUbiLogo } from "../assets/fondUbiLogo.svg";
import { ReactComponent as FondUbiLogoFull } from "../assets/fondUbiLogoFull.svg";

import "../styles/fondSection.css";
import { useEffect } from "react";

function FondSection() {
  const [show, setShow] = useState(false);

  return (
    <div className="fond-section">
      <div className="fond-section-header">Qui somme nous ?</div>
      <div className="fond-section-main">
        <div
          className="fond-section-container"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div
            className={classNames("fond-image-bg", {
              "show-child-pic": show,
            })}
          ></div>
          <div className="fond-section-left">
            <div className="fondpic">
              <Fond1 />
            </div>
            <div className="fond-ubi-icons" onMouseEnter={() => setShow(true)}>
              <div className="fond-ubi-logo">
                <FondUbiLogo />
              </div>
              <div className="fond-ubi-logo-full">
                <FondUbiLogoFull />
              </div>
            </div>
            <div className="fondpic">
              <Fond2 />
            </div>
          </div>
          <div className="fond-section-right">
            <div className="fond-section-title">Les Co-Fondateurs</div>
            <div className="fond-section-text">
              Nous sommes Mohamed Hamza <span className="fd-hb">(en haut)</span>
              <span className="fd-gd">(à gauche)</span> et Taha Amine{" "}
              <span className="fd-hb">(en bas)</span>
              <span className="fd-gd">(à droite)</span>, ça fait plus de 25 ans
              qu’on est partenaire. et comme tu peux le voir sur la photo un
              ordinateur a toujours été un point de convergence pour nous !
              <br />
              <br />
              Et oui tu l’as peut-être deviné : nous sommes frères et nous avons
              toujours été alignés sur une valeur centrale, tu la connais
              maintenant, LA TRANSPARENCE !
              <br />
              <br />
              Comme le Yin et le Yang nous sommes complémentaires et nous allons
              t’accompagner sur cette aventure comme l’un des nôtres !
            </div>
          </div>
        </div>
      </div>
      <div className="fond-section-mobile">
        <div className="fond-title-mobile">Les Co-Fondateurs</div>
        <div className="fond-main-mobile">
          <div className="fondpic-mobile">
            <Fond1Circle />
          </div>
          <div className="fond-content-mobile">
            Nous sommes Mohamed Hamza (en haut) et Taha Amine (en bas), ça fait
            plus de 25 ans qu’on est partenaire. et comme tu peux le voir sur la
            photo un ordinateur a toujours été un point de convergence pour nous
            !
            <br />
            <br />
            Et oui tu l’as peut-être deviné : nous sommes frères et nous avons
            toujours été alignés sur une valeur centrale, tu la connais
            maintenant, LA TRANSPARENCE !
            <br />
            <br />
            Comme le Yin et le Yang nous sommes complémentaires et nous allons
            t’accompagner sur cette aventure comme l’un des nôtres !
          </div>
          <div className="fondpic-mobile">
            <Fond2Circle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FondSection;
