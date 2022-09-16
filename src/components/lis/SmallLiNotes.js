import React, { useState } from "react";
import "../../scss/components/list-styles/lis.scss";
import SmallIcon from "../images/SmallIcon";

export default function SmallLiNotes({ name, image, notes, cost }) {
  const [showNotes, setShowNotes] = useState(false);
  return (
    <li className="small-li">
      <SmallIcon image={image} />
      <div
        className="simple-li-component li-name"
        onClick={() => setShowNotes(!showNotes)}
      >
        {name}
      </div>
      <div />
      {showNotes && (
        <div>
          <div className="notes">
            {notes}
            {cost && cost.includes("g") && (
              <SmallIcon image="gold-coin" inline="inline-img" />
            )}
          </div>
        </div>
      )}
    </li>
  );
}
