import React from "react";
import MediumIcon from "../icons/MediumIcon";
import SpecialLi from "../itemPages/SpecialLi";
import "../../scss/components/itemPages/simpleLi.scss";
import { v4 as uuidv4 } from "uuid";

export default function MediumLi({
  currentComponent,
  specialItems,
  specialItemParentID,
}) {
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
      {currentComponent.id === specialItemParentID &&
        specialItems.length !== 0 && (
          <div>
            <p className="notes">
              for each Funerary Incense purchased, one Amalgamated Gemstone, one
              Obsidian Shard, and one Glob of Ectoplasm is required. Based on
              the amount of Amalgamated Gemstones you currently have, you will
              need an additional:
            </p>
            {specialItems.map((mat) => (
              <SpecialLi key={uuidv4()} currentComponent={mat} />
            ))}
            <p className="notes">
              *Additional costs from Trade Contracts, Elegy Mosaics, or
              Crystalline Ingots are not taken into account.
            </p>
          </div>
        )}
    </li>
  );
}
