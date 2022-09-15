import React from "react";
import "../../scss/components/images/icons.scss";

export default function SmallIcon({ image, rarity }) {
  return (
    <div className={`small-icon ${image} ${rarity} simple-li-component`}></div>
  );
}
