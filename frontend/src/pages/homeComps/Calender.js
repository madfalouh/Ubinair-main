import React from "react";
import "../styles/calender.css";

function Calender() {
  return (
    <div className="calender-section" id="calender">
      <div className="calender-header">
        <div className="calender-subtitle">TU NE VEUX PAS ATTENDRE ?</div>
        <div className="calender-title">Réserve un Call !</div>
      </div>
      <div className="cal-script-wrap">
        <script
          type="text/javascript"
          async
          src="https://static.zcal.co/embed/v1/embed.js"
        ></script>
        <div className="calender-wrapper">
          <iframe
            src="https://zcal.co/i/rmdPWMNe"
            title="calender"
            className="calender"
            loading="lazy"
            frameborder="0"
            scrolling="no"
            // style="min-width: 100%; overflow: hidden; min-height: 544px; height: 928px;"
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
