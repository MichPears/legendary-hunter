import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoHelpOutline } from "react-icons/io5";
import "../../scss/components/itemPages/legendary-page.scss";
import SimpleLiLink from "./SimpleLiLink";
import SimpleLi from "./SimpleLi";
import SimpleLiExp from "./SimpleLiExp";

import coalescence from "../../library/itemInfo/coalescence";
import { MaterialsListContext } from "../context/MaterialsListProvider";
import MediumLi from "./MediumLi";

export default function Coalescence() {
  let parentMultiplier = 1;
  const [materialsList] = useContext(MaterialsListContext);

  console.log(materialsList);
  return (
    <div className="legendary-page mw">
      <IoHelpOutline className="help-icon" />
      <h1>{coalescence.name}</h1>
      <div className="sections-container">
        <div className="column">
          {/* achiev list */}
          <section className="sections">
            <div className="header-description-container">
              <h3>Required Achievements</h3>
              <p className="header-description">
                check any achievements, recipes, and components you already have
              </p>
            </div>
            <ul className="simple-list">
              {coalescence.requiredAchievs.map((achiev) => (
                <SimpleLiLink
                  key={uuidv4()}
                  name={achiev.name}
                  link={achiev.link}
                  image="legendary-achiev"
                />
              ))}
            </ul>
          </section>
          {/* recipes list */}
          <section className="sections">
            <h3>Required Recipes</h3>
            <ul className="simple-list">
              {coalescence.requiredRecipes.map((recipe) => (
                <SimpleLi key={uuidv4()} currentComponent={recipe} />
              ))}
            </ul>
          </section>
          {/* component list */}
          <section className="sections">
            <h3>Components</h3>
            <ul className="simple-list">
              {coalescence.components.map((component) =>
                component.expand === true ? (
                  <SimpleLiExp
                    key={uuidv4()}
                    currentComponent={component}
                    parentMultiplier={parentMultiplier}
                  />
                ) : (
                  <SimpleLi
                    key={uuidv4()}
                    currentComponent={component}
                    parentMultiplier={parentMultiplier}
                  />
                )
              )}
            </ul>
          </section>
        </div>
        <div className="column">
          {/* <h2>For this item you'll need:</h2> */}
          <section className="sections">
            <h3>Achievements</h3>
            <ul className="achiev-list"></ul>
          </section>
          <section className="sections">
            <h3>Materials List</h3>
            <ul className="achiev-list">
              {materialsList.map((material) => (
                <MediumLi key={uuidv4()} currentComponent={material} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
