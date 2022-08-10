import React, { useState } from "react";

export default function ComponentCheck({ quantity }) {
  const [componentAmount, setComponentAmount] = useState(0);
  const [checked, setChecked] = useState(false);
  return (
    <>
      {quantity > 1 ? (
        <input
          type="number"
          className="number-input simple-li-component"
          value={componentAmount}
          onChange={(e) => setComponentAmount(e.target.value)}
        />
      ) : (
        <input
          type="checkbox"
          className="checkbox simple-li-component"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      )}
    </>
  );
}
