import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../scss/components/itemPages/legendary-page.scss";
import SmallLi from "../lis/SmallLi";
import SmallLiExp from "../lis/SmallLiExp";

import coalescence from "../../library/itemInfo/coalescence";
import APIInput from "../generalComponents/APIInput";
import NeededMatsList from "../generatedLists/NeededMatsList";
import NeededAchievsList from "../generatedLists/NeededAchievsList";
import NeededRecipesList from "../generatedLists/NeededRecipesList";
import SmallLiNotes from "../lis/SmallLiNotes";
import legendaryUnlock from "../../library/images/bgImages/550px-Legendary_unlock_book_transparent.png";

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
  const [legArmory, setLegArmory] = useState([]);

  useEffect(() => {
    const coalescenceOwned = legArmory.find(
      (item) => item.id === coalescence.id
    );
    if (coalescenceOwned) setRenderGeneral("already-owned");
  }, [legArmory]);

  return (
    <div className="mw">
      <h1>{coalescence.name}</h1>
      <div className="sections-container">
        <div className="column">
          {/* achiev list */}
          <section className="sections">
            <div className="header-description-container">
              <h3>Required Achievements</h3>
              <p className="header-description">click each item to expand </p>
            </div>
            <ul>
              {coalescence.requiredAchievs.map((achiev) => (
                <SmallLiNotes
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
            <ul>
              {coalescence.requiredRecipes.map((recipe) => (
                <SmallLiNotes
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
            <ul>
              {coalescence.components.map((component) =>
                component.expand === true ? (
                  <SmallLiExp
                    key={uuidv4()}
                    currentComponent={component}
                    parentMultiplier={parentMultiplier}
                  />
                ) : (
                  <SmallLi
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
            setLegArmory={setLegArmory}
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
          ) : renderGeneral === "already-owned" ? (
            <section className="sections-no-api">
              <img
                src={legendaryUnlock}
                alt="legendary-unlocked"
                className="legendary-unlock"
              />
              <h2 className="unlocked-header">You already have it!</h2>
              <p className="unlocked-text">
                You silly willy, why are you even searching for this?
              </p>
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
        </div>
      </div>
    </div>
  );
}
