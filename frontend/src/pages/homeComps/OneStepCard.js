import React from "react";
import classNames from "classnames";
import "../styles/oneStepCard.css";

function OneStepCard(props) {
  return (
    <div
      className={classNames("one-step-card", {
        "reverse-card": props.behavior.includes("left-card"),
      })}
    >
      <div
        className={classNames("card-icon", {
          "pos-regulator": props.behavior.includes("pos-regulator"),
          "bigger-icon": props.behavior.includes("bigger-icon"),
          "smaller-icon": props.behavior.includes("smaller-icon"),
        })}
      >
        {props.icon}
      </div>
      <div
        className={classNames("card-content", {
          "right-card": props.behavior.includes("right-card"),
          "left-card": props.behavior.includes("left-card"),
        })}
      >
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.text}</div>
      </div>
    </div>
  );
}

OneStepCard.defaultProps = {
  behavior: [],
};

export default OneStepCard;
