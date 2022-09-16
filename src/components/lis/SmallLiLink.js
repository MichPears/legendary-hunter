import React from "react";
import "../../scss/components/list-styles/lis.scss";
import SmallIcon from "../images/SmallIcon";

export default function SmallLiLink({ name, link, image }) {
  return (
    <li className="small-li">
      <SmallIcon image={image} />
      <div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="small-li-component"
        >
          {name}
        </a>
      </div>
    </li>
  );
}
