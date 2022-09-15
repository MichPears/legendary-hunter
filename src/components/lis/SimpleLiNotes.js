import React, { useState } from "react";
import "../../scss/components/list-styles/lis.scss";
import SmallIcon from "../images/SmallIcon";

export default function SimpleLiNotes({ name, link, image, notes, cost }) {
  const [showNotes, setShowNotes] = useState(false);
  return (
    <li className="simple-li">
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
            {cost && cost.includes("g") && <SmallIcon image="gold-coin" />}
            {/* {cost.includes("g") ? <SmallIcon image="gold-coin" /> : null} */}
          </div>
        </div>
      )}
    </li>
  );
}
