import React from "react";
import "../../scss/components/list-styles/lis.scss";
import SmallIcon from "../images/SmallIcon";

export default function SimpleLiLink({ name, link, image }) {
  // const [checked, setChecked] = useState(false);
  return (
    <li className="simple-li">
      <SmallIcon image={image} />
      <div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="simple-li-component"
        >
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
