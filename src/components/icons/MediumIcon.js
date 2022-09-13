import React from "react";
import "../../scss/components/icons/icons.scss";

export default function MediumIcon({ image, rarity }) {
  return <div className={`medium-icon ${image} ${rarity}`}></div>;
}
