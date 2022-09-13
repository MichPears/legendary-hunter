import React from "react";
import MediumIcon from "../icons/MediumIcon";
import SpecialLi from "../itemPages/SpecialLi";
import "../../scss/components/itemPages/simpleLi.scss";

export default function MediumLi({ currentComponent, specialItem }) {
  return (
    <li>
      <div className={`medium-li`}>
        {/* {currentComponent.quantity > 1 && ( */}
        <span className="medium-li-num">{`${currentComponent.quantity} `}</span>
        {/* )} */}
        <MediumIcon
          image={currentComponent.image}
          rarity={currentComponent.rarity}
        />
        <a target="_blank" href={currentComponent.link}>
          {currentComponent.name}
        </a>
      </div>
      {currentComponent.name === "Funerary Incense" &&
        specialItem.quantity > 0 && (
          <div>
            <p className="notes">
              for each Funerary Incense purchased, one Amalgamated Gemstone is
              required. Based on the amount of Amalgamated Gemstones you
              currently have, you will need an additional:
            </p>
            <SpecialLi currentComponent={specialItem} />
          </div>
        )}
    </li>
  );
}
