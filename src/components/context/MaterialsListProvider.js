import React, { createContext, useState } from "react";
import coalescence from "../../library/itemInfo/coalescence";

export const MaterialsListContext = createContext();

export default function MaterialsListProvider({ children }) {
  let allMaterialsList = [];
  let parentMultiplier = 1;

  const mappingLoop = (array) => {
    array.map((component) => {
      if (component.expand === true) {
        parentMultiplier = parentMultiplier * component.quantity;
        mappingLoop(component.components);

        allMaterialsList.push({
          name: component.name,
          image: component.image,
          quantity: parentMultiplier * component.quantity,
        });
      } else {
        allMaterialsList.push({
          name: component.name,
          image: component.image,
          quantity: parentMultiplier * component.quantity,
        });
        // parentMultiplier = 1;
      }
    });
  };

  mappingLoop(coalescence.components);

  const [materialsList, setMaterialsList] = useState(allMaterialsList);

  // console.log(materialsList);

  return (
    <MaterialsListContext.Provider value={[materialsList, setMaterialsList]}>
      {children}
    </MaterialsListContext.Provider>
  );
}
