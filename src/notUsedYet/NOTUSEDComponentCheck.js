import React, { useContext, useState } from "react";
import { MaterialsListContext } from "../context/MaterialsListProvider";

export default function ComponentCheck({
  quantity,
  currentComponent,
  parentMultiplier,
}) {
  const [componentAmount, setComponentAmount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [materialsList] = useContext(MaterialsListContext);

  const userInput = (e) => {
    let finalAmount = quantity;
    const testNum = (e) => {
      setComponentAmount(e.target.value);
      finalAmount = quantity - e.target.value;
      if (finalAmount <= 0) {
        finalAmount = 0;
      }
    };
    const testCheck = () => {
      setChecked(!checked);
      if (!checked === true) {
        finalAmount = 0;
      }
    };
    if (quantity > 1) testNum(e);
    else testCheck();
    console.log(materialsList);
    return [{ name: currentComponent.name, finalAmount, parentMultiplier }];
    // return localStorage.setItem(
    //   "materialsList",
    //   JSON.stringify([
    //     ...materialsList,
    //     { name: currentComponent.name, finalAmount, parentMultiplier },
    //   ])
    // );
  };
  return (
    <>
      {quantity > 1 ? (
        <input
          type="number"
          className="number-input simple-li-component"
          value={componentAmount}
          onChange={(e) => userInput(e)}
        />
      ) : (
        <input
          type="checkbox"
          className="checkbox simple-li-component"
          checked={checked}
          onChange={(e) => userInput(e)}
        />
      )}
    </>
  );
}
