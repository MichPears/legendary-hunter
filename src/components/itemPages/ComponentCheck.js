import React, { useState } from "react";

export default function ComponentCheck({
  quantity,
  currentComponent,
  parentMultiplier,
}) {
  const [componentAmount, setComponentAmount] = useState(0);
  const [checked, setChecked] = useState(false);

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
    return [currentComponent.name, finalAmount, parentMultiplier];
  };

  return (
    <>
      {quantity > 1 ? (
        <input
          type="number"
          className="number-input simple-li-component"
          value={componentAmount}
          onChange={(e) => console.log(userInput(e))}
        />
      ) : (
        <input
          type="checkbox"
          className="checkbox simple-li-component"
          checked={checked}
          onChange={(e) => console.log(userInput(e))}
        />
      )}
    </>
  );
}
