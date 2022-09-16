import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SmallIcon from "../images/SmallIcon";
import SmallLi from "./SmallLi";

import "../../scss/components/list-styles/lis.scss";

export default function SmallLiExp({
  currentComponent,
  indent,
  parentMultiplier,
}) {
  const [showList, setShowList] = useState(false);
  //change display info so parent multiplier is no longer necessary
  let componentCount = parentMultiplier * currentComponent.quantity;

  return (
    <ul className={`${indent}`}>
      <li className="small-li-components">
        <SmallIcon
          image={currentComponent.image}
          rarity={currentComponent.rarity}
        />
        <div className="small-li-text">
          <div>
            <span className="li-name" onClick={() => setShowList(!showList)}>
              {componentCount > 1 && <span>{`${componentCount} `}</span>}
              {currentComponent.name}
            </span>
          </div>
          <span className="header-description">
            {currentComponent.obtained}
          </span>
        </div>
      </li>
      {showList &&
        currentComponent.components.map((component) =>
          component.expand === true ? (
            <SmallLiExp
              key={uuidv4()}
              currentComponent={component}
              parentMultiplier={componentCount}
              indent="indent"
            />
          ) : (
            <SmallLi
              key={uuidv4()}
              currentComponent={component}
              parentMultiplier={componentCount}
              indent="indent"
            />
          )
        )}
    </ul>
  );
}
