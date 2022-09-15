import React, { useEffect, useState } from "react";
import { coalescenceRecipes } from "../../library/itemInfo/coalescence";
import { v4 as uuidv4 } from "uuid";
import SimpleLiLink from "../lis/SimpleLiLink";
import Loading from "../generalComponents/Loading";

export default function NeededRecipesList({
  allRecipes,
  renderRecipes,
  setRenderRecipes,
}) {
  const [neededRecipes, setNeededRecipes] = useState([]);

  useEffect(() => {
    if (allRecipes.length !== 0) {
      const giftOfBlood = allRecipes.find((recipe) => recipe === 11736);
      // console.log(giftOfBlood);
      const giftofVenom = allRecipes.find((recipe) => recipe === 11735);
      const giftofTotems = allRecipes.find((recipe) => recipe === 11742);
      const giftOfDust = allRecipes.find((recipe) => recipe === 11741);
      const giftOfClaws = allRecipes.find((recipe) => recipe === 11744);
      const giftOfScales = allRecipes.find((recipe) => recipe === 11743);
      const giftOfBones = allRecipes.find((recipe) => recipe === 11739);
      const giftofFangs = allRecipes.find((recipe) => recipe === 11737);

      setNeededRecipes(
        coalescenceRecipes.map((recipe) => {
          if (giftOfBlood) {
            if (recipe.id === 11736) {
              return null;
            }
          }
          if (giftofVenom) {
            if (recipe.id === 11735) {
              return null;
            }
          }
          if (giftofTotems) {
            if (recipe.id === 11742) {
              return null;
            }
          }
          if (giftOfDust) {
            if (recipe.id === 11741) {
              return null;
            }
          }
          if (giftOfClaws) {
            if (recipe.id === 11744) {
              return null;
            }
          }
          if (giftOfScales) {
            if (recipe.id === 11743) {
              return null;
            }
          }
          if (giftOfBones) {
            if (recipe.id === 11739) {
              return null;
            }
          }
          if (giftofFangs) {
            if (recipe.id === 11737) {
              return null;
            }
          }
          return recipe;
        })
      );
      setRenderRecipes("display");
    }
  }, [allRecipes, setRenderRecipes]);

  const neededRecipesDisplay = neededRecipes.filter(
    (recipe) => recipe !== null
  );
  return (
    <ul className="simple-list">
      {renderRecipes === "loading" ? (
        <Loading />
      ) : (
        <>
          {neededRecipesDisplay.length === 0 ? (
            <li>Congratulations! You have all required recipes!</li>
          ) : (
            neededRecipesDisplay.map((recipe) => (
              <SimpleLiLink
                key={uuidv4()}
                currentComponent={recipe}
                image={recipe.image}
                name={recipe.name}
                link={recipe.link}
              />
            ))
          )}
        </>
      )}

      {/* {materialsList.map((material) => (
            <MediumLi key={uuidv4()} currentComponent={material} />
          ))} */}
    </ul>
  );
}
