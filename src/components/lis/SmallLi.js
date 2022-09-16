import React from "react";
import SmallIcon from "../images/SmallIcon";

import "../../scss/components/list-styles/lis.scss";

export default function SmallLi({
  indent,
  currentComponent,
  parentMultiplier,
}) {
  return (
    <li className={`small-li-components ${indent}`}>
      <SmallIcon
        image={currentComponent.image}
        rarity={currentComponent.rarity}
      />
      <div className="small-li-text">
        <div>
          {currentComponent.quantity * parentMultiplier > 1 && (
            <span>{`${currentComponent.quantity * parentMultiplier} `}</span>
          )}
          {currentComponent.name}
        </div>
        <span className="header-description">{currentComponent.obtained}</span>
      </div>
    </li>
  );
}
