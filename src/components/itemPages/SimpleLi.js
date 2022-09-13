import React, { useState } from "react";
import SmallIcon from "../icons/SmallIcon";
import ComponentCheck from "./ComponentCheck";

import "../../scss/components/itemPages/simpleLi.scss";

export default function SimpleLi({
  indent,
  currentComponent,
  parentMultiplier,
}) {
  return (
    <li className={`simple-li-components ${indent}`}>
      <SmallIcon
        image={currentComponent.image}
        rarity={currentComponent.rarity}
      />
      <div className="simple-li-text">
        <div className="simple-li-main">
          {currentComponent.quantity * parentMultiplier > 1 && (
            <span>{`${currentComponent.quantity * parentMultiplier} `}</span>
          )}
          {currentComponent.name}
        </div>
        <span className="header-description">{currentComponent.obtained}</span>
      </div>
      {/* <ComponentCheck
        quantity={currentComponent.quantity * parentMultiplier}
        currentComponent={currentComponent}
        parentMultiplier={parentMultiplier}
      /> */}
    </li>
  );
}
