import React from "react";
import MediumIcon from "../images/MediumIcon";
import SpecialLi from "./SpecialLi";
import "../../scss/components/list-styles/lis.scss";
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
        <a target="_blank" rel="noreferrer" href={currentComponent.link}>
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
