import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SmallIcon from "../icons/SmallIcon";
import ComponentCheck from "./ComponentCheck";
import SimpleLi from "./SimpleLi";

import "../../scss/components/itemPages/simpleLi.scss";

export default function SimpleLiExp({
  currentComponent,
  indent,
  parentMultiplier,
}) {
  const [showList, setShowList] = useState(false);
  // const componentTotal = componentCount * currentComponent.quantity;
  // setComponentCount(componentTotal);
  let componentCount = parentMultiplier * currentComponent.quantity;

  // const testLoop = () => {
  //   setShowList(!showList);
  //   currentComponent.components.map((component) => console.log(component));
  // };

  // console.log(parentMultiplier, componentCount);
  return (
    <ul className={`${indent}`}>
      <li className="simple-li-components">
        <SmallIcon
          image={currentComponent.image}
          rarity={currentComponent.rarity}
        />
        <div className="simple-li-text">
          <div className="simple-li-main">
            <span className="li-name" onClick={() => setShowList(!showList)}>
              {componentCount > 1 && <span>{`${componentCount} `}</span>}
              {currentComponent.name}
            </span>
          </div>
          <span className="header-description">
            {currentComponent.obtained}
          </span>
        </div>
        {/* <ComponentCheck
          quantity={componentCount}
          currentComponent={currentComponent}
          parentMultiplier={parentMultiplier}
        /> */}
      </li>

      {showList &&
        currentComponent.components.map((component) =>
          component.expand === true ? (
            <SimpleLiExp
              key={uuidv4()}
              currentComponent={component}
              parentMultiplier={componentCount}
              // componentCount={componentCount}
              // setComponentCount={setComponentCount}
              indent="indent"
            />
          ) : (
            <SimpleLi
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
