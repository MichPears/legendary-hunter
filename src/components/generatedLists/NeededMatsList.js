import React, { useEffect, useState } from "react";
import MediumLi from "../lis/MediumLi";
import { v4 as uuidv4 } from "uuid";
import coalescence, {
  coalescenceMats,
  giftOfCompassionBaseMats,
} from "../../library/itemInfo/coalescence";
import {
  giftOfBloodBaseMats,
  giftOfBonesBaseMats,
  giftOfClawsBaseMats,
  giftOfCondensedMagicBaseMats,
  giftOfCondensedMightBaseMats,
  giftOfDustBaseMats,
  giftOfFangsBaseMats,
  giftOfScalesBaseMats,
  giftOfTotemsBaseMats,
  giftOfVenomBaseMats,
  mysticTributeBaseMats,
} from "../../library/itemInfo/mysticTribute";
import {
  giftOfDesertMasteryBaseMats,
  giftOfTheDesertBaseMats,
  giftOfTheRiderBaseMats,
} from "../../library/itemInfo/giftOfDesertMastery";
import Loading from "../generalComponents/Loading";

export default function NeededMatsList({
  allItems,
  renderMats,
  setRenderMats,
}) {
  const [neededMatsDisplay, setNeededMatsDisplay] = useState([]);
  const [specialItemsDisplay, setSpecialItemsDisplay] = useState([]);
  let coalescenceMatsFiltered;

  //this function loops through all items used in coalescence and checks if player already has them - checks big components first, and if the player doesnt have them, loops through the minor ones
  //each component has a list of "base mats" which represent the ids of the base materials needed to craft the component - if player has the bigger component, returns null for each base component
  const filterCoalescenceMats = () => {
    //find if player has already crafted a mystic tribute and subtract mats already used
    const mysticTribute = allItems.find((mat) => mat.id === 71820);
    const giftOfCompassion = allItems.find((mat) => mat.id === 91225);

    coalescenceMatsFiltered = coalescenceMats.map((mat) => {
      let finalItem = mat;
      if (mysticTribute) {
        mysticTributeBaseMats.forEach((mtBM) =>
          mat.id === mtBM ? (finalItem = null) : null
        );
      }
      if (!mysticTribute) {
        //if player doesnt have MT, checks if they have the subcomponents and subtracts corresponding mats
        const giftOfCondensedMagic = allItems.find((mat) => mat.id === 76530);
        const giftOfCondensedMight = allItems.find((mat) => mat.id === 70867);

        if (giftOfCondensedMagic) {
          giftOfCondensedMagicBaseMats.forEach((gocmBM) => {
            if (mat.id === gocmBM) {
              if (giftOfCondensedMagic.count >= 2) {
                finalItem = null;
              } else
                finalItem = {
                  id: mat.id,
                  name: mat.name,
                  rarity: mat.rarity,
                  image: mat.image,
                  quantity: mat.quantity / 2,
                };
            }
          });
        }
        if (!giftOfCondensedMagic) {
          //same here, if player doesnt have GOCM, checks subcomponents - this is last level for MT
          const giftOfBlood = allItems.find((mat) => mat.id === 71655);
          const giftOfVenom = allItems.find((mat) => mat.id === 71787);
          const giftOfTotems = allItems.find((mat) => mat.id === 73236);
          const giftOfDust = allItems.find((mat) => mat.id === 73196);
          if (giftOfBlood) {
            giftOfBloodBaseMats.forEach((gobBM) => {
              if (mat.id === gobBM) {
                if (giftOfBlood.count >= 2) {
                  finalItem = null;
                } else
                  finalItem = {
                    id: mat.id,
                    name: mat.name,
                    rarity: mat.rarity,
                    image: mat.image,
                    quantity: mat.quantity / 2,
                  };
              }
            });
          }
          if (giftOfVenom) {
            giftOfVenomBaseMats.forEach((govBM) => {
              if (mat.id === govBM) {
                if (giftOfVenom.count >= 2) {
                  finalItem = null;
                } else
                  finalItem = {
                    id: mat.id,
                    name: mat.name,
                    rarity: mat.rarity,
                    image: mat.image,
                    quantity: mat.quantity / 2,
                  };
              }
            });
          }
          if (giftOfTotems) {
            giftOfTotemsBaseMats.forEach((gotBM) => {
              if (mat.id === gotBM) {
                if (giftOfTotems.count >= 2) {
                  finalItem = null;
                } else
                  finalItem = {
                    id: mat.id,
                    name: mat.name,
                    rarity: mat.rarity,
                    image: mat.image,
                    quantity: mat.quantity / 2,
                  };
              }
            });
          }
          if (giftOfDust) {
            giftOfDustBaseMats.forEach((godBM) => {
              if (mat.id === godBM) {
                if (giftOfDust.count >= 2) {
                  finalItem = null;
                } else
                  finalItem = {
                    id: mat.id,
                    name: mat.name,
                    rarity: mat.rarity,
                    image: mat.image,
                    quantity: mat.quantity / 2,
                  };
              }
            });
          }
        }
        if (giftOfCondensedMight) {
          giftOfCondensedMightBaseMats.forEach((gocmBM) => {
            if (mat.id === gocmBM) {
              if (giftOfCondensedMight.count >= 2) {
                finalItem = null;
              } else
                finalItem = {
                  id: mat.id,
                  name: mat.name,
                  rarity: mat.rarity,
                  image: mat.image,
                  quantity: mat.quantity / 2,
                };
            }
          });
        }
        if (!giftOfCondensedMight) {
          //same here, if player doesnt have GOCM, checks subcomponents - this is last level for MT
          const giftOfClaws = allItems.find((mat) => mat.id === 70801);
          const giftOfScales = allItems.find((mat) => mat.id === 75299);
          const giftOfBones = allItems.find((mat) => mat.id === 71123);
          const giftOfFangs = allItems.find((mat) => mat.id === 75744);
          if (giftOfClaws) {
            giftOfClawsBaseMats.forEach((gocBM) => {
              if (mat.id === gocBM) {
                if (giftOfClaws.count >= 2) {
                  finalItem = null;
                } else
                  finalItem = {
                    id: mat.id,
                    name: mat.name,
                    rarity: mat.rarity,
                    image: mat.image,
                    quantity: mat.quantity / 2,
                  };
              }
            });
          }
          if (giftOfScales) {
            giftOfScalesBaseMats.forEach((gosBM) => {
              if (mat.id === gosBM) {
                if (giftOfScales.count >= 2) {
                  finalItem = null;
                } else
                  finalItem = {
                    id: mat.id,
                    name: mat.name,
                    rarity: mat.rarity,
                    image: mat.image,
                    quantity: mat.quantity / 2,
                  };
              }
            });
          }
          if (giftOfBones) {
            giftOfBonesBaseMats.forEach((gobBM) => {
              if (mat.id === gobBM) {
                if (giftOfBones.count >= 2) {
                  finalItem = null;
                } else
                  finalItem = {
                    id: mat.id,
                    name: mat.name,
                    rarity: mat.rarity,
                    image: mat.image,
                    quantity: mat.quantity / 2,
                  };
              }
            });
          }
          if (giftOfFangs) {
            giftOfFangsBaseMats.forEach((gofBM) => {
              if (mat.id === gofBM) {
                if (giftOfFangs.count >= 2) {
                  finalItem = null;
                } else
                  finalItem = {
                    id: mat.id,
                    name: mat.name,
                    rarity: mat.rarity,
                    image: mat.image,
                    quantity: mat.quantity / 2,
                  };
              }
            });
          }
        }
      }
      //check Gift of Compassion
      if (giftOfCompassion) {
        giftOfCompassionBaseMats.forEach((gocBM) =>
          mat.id === gocBM ? (finalItem = null) : null
        );
      }
      if (!giftOfCompassion) {
        const giftOfDesertMastery = allItems.find((mat) => mat.id === 86036);
        if (giftOfDesertMastery) {
          giftOfDesertMasteryBaseMats.forEach((godmBM) =>
            mat.id === godmBM ? (finalItem = null) : null
          );
        }
        if (!giftOfDesertMastery) {
          const giftOfTheDesert = allItems.find((mat) => mat.id === 85631);
          const giftOfTheRider = allItems.find((mat) => mat.id === 86330);
          if (giftOfTheDesert) {
            giftOfTheDesertBaseMats.forEach((gotdBM) =>
              mat.id === gotdBM ? (finalItem = null) : null
            );
          }
          if (giftOfTheRider) {
            giftOfTheRiderBaseMats.forEach((gotrBM) =>
              mat.id === gotrBM ? (finalItem = null) : null
            );
          }
        }
      }

      return finalItem;
    });

    return coalescenceMatsFiltered;
  };

  const unifyQuantity = (arrayOfSameObj) => {
    let quantity = 0;
    arrayOfSameObj.map((mat) => (quantity = quantity + mat.count));
    return quantity;
  };

  //above function is called inside this useEffect - currently gives a warning because it is defined outside of it. If placed as dependancy it runs a million times - needs to be refactored
  //useEffect makes sure mats display state is not set until allItems is changed (it is changed in the APIinput component) - setRenderMats was added as dependancy to avoid warnings
  useEffect(() => {
    //coalescenceMatsFiltered are all items player has in account that are used in coalescence - might return several objects of the same items if player has more than one stack in account
    const coalescenceMatsFiltered = filterCoalescenceMats();
    //removes null for display
    const coalescenceMatsFilteredDisplay = coalescenceMatsFiltered.filter(
      (mat) => mat !== null
    );
    //check that allItems is not empty
    if (allItems.length !== 0) {
      let playerMats = [];
      coalescenceMats.forEach((mat) => {
        //for each item in coalescenceMats, check if player has one or more stacks - group the same type of item in filteredItems array (essentially it is an array of the same object with different quantities because they might come from different places in the account)
        const filteredItems = allItems.filter((item) => item.id === mat.id);
        //after getting an array of only the same kind of items, we sum them to get the total amount of the same item in the account
        const unifiedQuantity = unifyQuantity(filteredItems);
        //playerMats is now an array of all the mats the player will use for coalescence, unified under one different object each
        playerMats = [
          ...playerMats,
          { id: mat.id, name: mat.name, quantity: unifiedQuantity },
        ];
      });

      // neededMats is copy of the coalescenceFilteredDisplay mats (which itself is a copy of the coalescenceMats that the player does NOT have), and loops through each item to get the difference between the amount of base mats the player has and the amount of base mats the player needs
      let neededMats = coalescenceMatsFilteredDisplay.map((reqMat) => {
        let currentMat = playerMats.find(
          (ownedMat) => reqMat.id === ownedMat.id
        );
        //if you the player has at least one item: it subtracts the quantity owned from the quantity needed
        if (currentMat) {
          //if player needs items, returns object with needed quantity
          if (reqMat.quantity - currentMat.quantity > 0) {
            return {
              id: reqMat.id,
              name: reqMat.name,
              rarity: reqMat.rarity,
              image: reqMat.image,
              link: reqMat.link,
              quantity: reqMat.quantity - currentMat.quantity,
              baseMats: reqMat.baseMats,
            };
            //if the player has more than needed (giving a negative number or 0), we get null
          } else {
            return null;
          }
          //if the player does not have the item at all, we get the same amount as in coalescenceMatsFilteredDisplay
        } else {
          return reqMat;
        }
      });

      //this function is used when there is a special item such as funerary incense, which is purchased with other materials that are not necesarily included in the main coalescenceMats array
      const specialMatsNeeded = (
        neededMatsFilter,
        specialItemParentID,
        specialItemChild
      ) => {
        //get object of funerary incense where quantity = whats missing
        let specialItemParent = neededMatsFilter.find(
          (mat) => mat.id === specialItemParentID
        );
        let specialItems = [];

        //loop through special items
        specialItemChild.forEach((spChild) => {
          //find how many of the base mats player has in account - returns array of multiple objects
          let specialItemMultiple = allItems.filter(
            (mat) => mat.id === spChild.id
          );
          //unify quantity to get only one amount of each item
          let specialItemQuantity = unifyQuantity(specialItemMultiple);
          //if player has at least one funerary incence and at least one of the special mats
          if (specialItemMultiple && specialItemParent) {
            let finalQuantity =
              specialItemParent.quantity - specialItemQuantity;
            if (finalQuantity < 0) finalQuantity = 0;
            specialItems.push({
              id: spChild.id,
              name: spChild.name,
              rarity: spChild.rarity,
              image: spChild.image,
              link: spChild.link,
              quantity: finalQuantity,
            });
          } else if (specialItemMultiple) {
            //if player only has special mat but no funerary incense
            specialItems.push({
              id: spChild.id,
              name: spChild.name,
              rarity: spChild.rarity,
              image: spChild.image,
              link: spChild.link,
              quantity: 250 - specialItemQuantity,
            });
          } else if (specialItemParent) {
            //if player has funerary incense but no special mat
            specialItems.push({
              id: spChild.id,
              name: spChild.name,
              rarity: spChild.rarity,
              image: spChild.image,
              link: spChild.link,
              quantity: specialItemParent.quantity,
            });
          }
        });
        let specialItemsFiltered = specialItems.filter(
          (mat) => mat.quantity !== 0
        );
        setSpecialItemsDisplay(specialItemsFiltered);
      };
      //after looping through all remaining coalescenceMats (neededMats), we filter out nulls for display and calls functions defined above
      let neededMatsFilter = neededMats.filter((mat) => mat !== null);
      setNeededMatsDisplay(neededMatsFilter);
      specialMatsNeeded(
        neededMatsFilter,
        coalescence.specialItemParentID,
        coalescence.specialItemChild
      );
      setRenderMats("display");
    }
  }, [allItems, setRenderMats]);

  return (
    <ul>
      {renderMats === "loading" ? (
        <Loading />
      ) : (
        <>
          {neededMatsDisplay.length === 0 ? (
            <li>Congratulations! You have all required mats!</li>
          ) : (
            neededMatsDisplay.map((material) => (
              <MediumLi
                key={uuidv4()}
                currentComponent={material}
                specialItems={specialItemsDisplay}
                specialItemParentID={coalescence.specialItemParentID}
              />
            ))
          )}
        </>
      )}
    </ul>
  );
}
