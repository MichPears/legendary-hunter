import React from "react";
import MediumIcon from "../icons/MediumIcon";
import "../../scss/components/itemPages/simpleLi.scss";

export default function MediumLi({ currentComponent }) {
  return (
    <li className={`medium-li`}>
      {currentComponent.quantity > 1 && (
        <span className="medium-li-num">{`${currentComponent.quantity} `}</span>
      )}
      <div className="medium-li-name">
        <MediumIcon image={currentComponent.image} />
        {currentComponent.name}
      </div>
    </li>
  );
}
