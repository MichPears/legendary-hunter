import React, { useState } from "react";
import SmallIcon from "../icons/SmallIcon";
import ComponentCheck from "./ComponentCheck";

export default function SimpleLi({
  indent,
  currentComponent,
  parentMultiplier,
}) {
  return (
    <li className={`simple-li ${indent}`}>
      <div>
        <SmallIcon image={currentComponent.image} />
        {currentComponent.quantity * parentMultiplier > 1 && (
          <span>{`${currentComponent.quantity * parentMultiplier} `}</span>
        )}
        {currentComponent.name}
      </div>
      <ComponentCheck quantity={currentComponent.quantity * parentMultiplier} />
    </li>
  );
}
