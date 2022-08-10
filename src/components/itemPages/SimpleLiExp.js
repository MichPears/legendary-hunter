import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SmallIcon from "../icons/SmallIcon";
import ComponentCheck from "./ComponentCheck";
import SimpleLi from "./SimpleLi";

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

  console.log(parentMultiplier, componentCount);
  return (
    <ul className={`${indent}`}>
      <li className="simple-li">
        <div>
          <SmallIcon image={currentComponent.image} />
          <span onClick={() => setShowList(!showList)}>
            {componentCount > 1 && <span>{`${componentCount} `}</span>}
            {currentComponent.name}
          </span>
        </div>
        <ComponentCheck quantity={componentCount} />
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
