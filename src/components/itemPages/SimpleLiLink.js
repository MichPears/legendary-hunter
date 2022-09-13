import React, { useState } from "react";
import "../../scss/components/itemPages/simpleLi.scss";
import SmallIcon from "../icons/SmallIcon";

export default function SimpleLiLink({ name, link, image }) {
  // const [checked, setChecked] = useState(false);
  return (
    <li className="simple-li">
      <SmallIcon image={image} />
      <div>
        <a href={link} target="_blank" className="simple-li-component">
          {name}
        </a>
      </div>
      {/* <input
        type="checkbox"
        className="checkbox simple-li-component"
        checked={checked}
        onChange={() => console.log(name)}
      /> */}
    </li>
  );
}
