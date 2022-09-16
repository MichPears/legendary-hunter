import React from "react";
import "../../scss/components/images/icons.scss";

export default function SmallIcon({ image, rarity, inline }) {
  return <div className={`small-icon ${image} ${rarity} ${inline}`}></div>;
}
