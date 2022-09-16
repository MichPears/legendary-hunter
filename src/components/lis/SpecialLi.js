import React from "react";
import "../../scss/components/list-styles/lis.scss";
import SpecialIcon from "../images/SpecialIcon";

export default function SpecialLi({ currentComponent }) {
  return (
    <div className={`special-li`}>
      <span className="special-li-num">{`${currentComponent.quantity} `}</span>
      <SpecialIcon
        image={currentComponent.image}
        rarity={currentComponent.rarity}
      />
      <a target="_blank" rel="noreferrer" href={currentComponent.link}>
        {currentComponent.name}
      </a>
    </div>
  );
}
