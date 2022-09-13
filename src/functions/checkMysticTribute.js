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
} from "../library/itemInfo/mysticTribute";

export const checkMysticTribute = (mysticTribute, mat, finalItem, allItems) => {
  if (mysticTribute) {
    mysticTributeBaseMats.forEach((mtBM) =>
      mat.id === mtBM ? (finalItem = null) : null
    );
  }
  if (!mysticTribute) {
    //if player doesnt have MT, checks if they have the subcomponents and subtracts corresponding mats
    const giftOfCondensedMagic = allItems.find((mat) => mat.id === 76530);
    const giftOfCondensedMight = allItems.find((mat) => mat.id === 70867);
    // const mysticClovers = allItems.find((mat) => mat.id === 19675);

    // const mysticCoins = allItems.find((mat) => mat.id === 19976);

    if (giftOfCondensedMagic) {
      giftOfCondensedMagicBaseMats.forEach((gocmBM) => {
        if (mat.id === gocmBM) {
          if (giftOfCondensedMagic.count >= 2) {
            finalItem = null;
          }
          //this might break because it might not be a one-liner. Maybe add brackets? Cant test because we dont have an account with only one gift of condensed magic -- already added the brackets just in case
          else
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
          }
          //this might break because it might not be a one-liner. Maybe add brackets? Cant test because we dont have an account with only one gift of condensed magic -- already added the brackets just in case
          else
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
    // if (mysticClovers) {
    //   if (mat.id === mysticClovers.id) {
    //     if (mysticClovers.count >= 77) {
    //       finalItem = null;
    //     } else
    //       finalItem = {
    //         id: mat.id,
    //         name: mat.name,
    //         rarity: mat.rarity,
    //         image: mat.image,
    //         quantity: mat.quantity-,
    //       };
    //   }
    // }
    // if (!mysticClovers) {
    //   console.log("i dont have mc");
    // }
  }
};
