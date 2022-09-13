import React from "react";
import MediumIcon from "../icons/MediumIcon";
import "../../scss/components/itemPages/simpleLi.scss";
import SpecialIcon from "../icons/SpecialIcon";

export default function SpecialLi({ currentComponent }) {
  return (
    <div className={`special-li`}>
      {/* <div></div> */}
      {/* {currentComponent.quantity > 1 && ( */}
      <span className="special-li-num">{`${currentComponent.quantity} `}</span>
      {/* )} */}
      {/* <div className="special-li-name"> */}
      <SpecialIcon
        image={currentComponent.image}
        rarity={currentComponent.rarity}
      />
      <a target="_blank" href={currentComponent.link}>
        {currentComponent.name}
      </a>
      {/* </div> */}
    </div>
  );
}
