import React from "react";
import "../../scss/components/icons/icons.scss";

export default function SpecialIcon({ image, rarity }) {
  return <div className={`special-icon ${image} ${rarity} centered`}></div>;
}
