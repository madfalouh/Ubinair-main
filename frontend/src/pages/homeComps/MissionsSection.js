import React from "react";
import "../styles/missionsSection.css";
import { ReactComponent as MissionsBG } from "../assets/missionsBG.svg";
import { ReactComponent as LightOnLogos } from "../assets/lightOnLogos.svg";

function MissionsSection() {
  return (
    <div className="missions-section" id="missions">
      <div className="missions-header">
        <div className="missions-title">Missions réussies</div>
        <div className="missions-text">
          Fais comme eux et fais de ton projet web une réussite grâce à Ubinair
          !
        </div>
      </div>
      <div className="missions-icon">
        <img src={require("../assets/logos.png")} />
      </div>
      <div className="missions-icon-mobile">
        <img src={require("../assets/logosMobile.png")} />
      </div>
      <div className="missions-bg">
        <MissionsBG />
      </div>
      <div className="light-on-logos">
        <LightOnLogos />
      </div>
    </div>
  );
}

export default MissionsSection;
