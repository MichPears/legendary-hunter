import React from "react";
import "../../scss/components/images/icons.scss";

export default function SpecialIcon({ image, rarity }) {
  return <div className={`special-icon ${image} ${rarity} centered`}></div>;
}
