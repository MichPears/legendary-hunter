import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../scss/components/itemPages/legendary-page.scss";
import SimpleLi from "./SimpleLi";
import SimpleLiExp from "./SimpleLiExp";

import coalescence from "../../library/itemInfo/coalescence";
import APIInput from "./APIInput";
import NeededMatsList from "./NeededMatsList";
import NeededAchievsList from "./NeededAchievsList";
import NeededRecipesList from "./NeededRecipesList";
import SimpleLiNotes from "./SimpleLiNotes";

export default function Coalescence() {
  let parentMultiplier = 1;
  const [allItems, setAllItems] = useState([]);
  const [allAchievs, setAllAchievs] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [renderGeneral, setRenderGeneral] = useState(false);
  const [renderAchievs, setRenderAchievs] = useState("loading");
  const [renderRecipes, setRenderRecipes] = useState("loading");
  const [renderMats, setRenderMats] = useState("loading");
  const [errorMessage, setErrorMessage] = useState(false);

  // console.log(materialsList);
  return (
    <div className="legendary-page mw">
      {/* <IoHelpOutline className="help-icon" onClick={() => setShowHelp(true)} />
      <HelpPopup setShowHelp={setShowHelp} showHelp={showHelp} /> */}
      <h1>{coalescence.name}</h1>
      <div className="sections-container">
        <div className="column">
          {/* achiev list */}
          <section className="sections">
            <div className="header-description-container">
              <h3>Required Achievements</h3>
              <p className="header-description">click each item to expand </p>
            </div>
            <ul className="simple-list">
              {coalescence.requiredAchievs.map((achiev) => (
                <SimpleLiNotes
                  key={uuidv4()}
                  name={achiev.name}
                  image="legendary-achiev"
                  notes={achiev.notes}
                />
              ))}
            </ul>
          </section>
          {/* recipes list */}
          <section className="sections">
            <div className="header-description-container">
              <h3>Required Recipes</h3>
              <p className="header-description">click each item to expand </p>
            </div>
            <ul className="simple-list">
              {coalescence.requiredRecipes.map((recipe) => (
                <SimpleLiNotes
                  key={uuidv4()}
                  name={recipe.name}
                  image={recipe.image}
                  notes={recipe.notes}
                  cost={recipe.cost}
                  currentComponent={recipe}
                />
              ))}
            </ul>
          </section>
          {/* component list */}
          <section className="sections">
            <div className="header-description-container">
              <h3>Components</h3>
              <p className="header-description">click each item to expand </p>
            </div>
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
          <APIInput
            setAllItems={setAllItems}
            setAllAchievs={setAllAchievs}
            setAllRecipes={setAllRecipes}
            renderGeneral={renderGeneral}
            setRenderGeneral={setRenderGeneral}
            setRenderAchievs={setRenderAchievs}
            setRenderRecipes={setRenderRecipes}
            setRenderMats={setRenderMats}
            setErrorMessage={setErrorMessage}
          />
          {!renderGeneral ? (
            <section className="sections-no-api">
              {!errorMessage ? (
                <h3 className="no-api-text">
                  Add your API above for a personalized list!
                </h3>
              ) : (
                <>
                  <h3 className="no-api-text">{errorMessage}</h3>
                  <p className="error-text">
                    Please make sure your API key has permission to access your
                    inventories, characters, wallet, unlocks and progression.
                  </p>
                </>
              )}
            </section>
          ) : (
            <>
              <section className="sections">
                <div className="header-description-container">
                  <h3>Missing Achievements</h3>
                  <p className="header-description">
                    click the links for the gw2 wiki.
                  </p>
                </div>
                <NeededAchievsList
                  allAchievs={allAchievs}
                  renderAchievs={renderAchievs}
                  setRenderAchievs={setRenderAchievs}
                />
              </section>
              <section className="sections">
                <div className="header-description-container">
                  <h3>Missing Recipes</h3>
                  <p className="header-description">
                    click the links for the gw2 wiki.
                  </p>
                </div>
                <NeededRecipesList
                  allRecipes={allRecipes}
                  renderRecipes={renderRecipes}
                  setRenderRecipes={setRenderRecipes}
                />
              </section>
              <section className="sections">
                <div className="header-description-container">
                  <h3>Materials List</h3>
                  <p className="header-description">
                    click the links for the gw2 wiki.
                  </p>
                </div>
                <NeededMatsList
                  allItems={allItems}
                  renderMats={renderMats}
                  setRenderMats={setRenderMats}
                />
              </section>
            </>
          )}
          {/* <h2>For this item you'll need:</h2> */}
        </div>
      </div>
    </div>
  );
}
