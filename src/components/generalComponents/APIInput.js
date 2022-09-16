import React, { useState } from "react";
import axios from "axios";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdRefreshCircle } from "react-icons/io";
import "../../scss/components/general-components/input-styles.scss";

export default function APIInput({
  setAllItems,
  setAllAchievs,
  setAllRecipes,
  renderGeneral,
  setRenderGeneral,
  setRenderAchievs,
  setRenderRecipes,
  setRenderMats,
  setErrorMessage,
  setLegArmory,
}) {
  const [apiKey, setApiKey] = useState("");

  const fetchLegendaryArmory = async () => {
    try {
      const apiLegArmor = await axios.get(
        `https://api.guildwars2.com/v2/account/legendaryarmory?access_token=${apiKey}`
      );
      return apiLegArmor.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access legendary armory.");
    }
  };

  const fetchAchievs = async () => {
    try {
      const apiAchievs = await axios.get(
        `https://api.guildwars2.com/v2/account/achievements?access_token=${apiKey}`
      );
      return apiAchievs.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access achievements.");
    }
  };
  const fetchRecipes = async () => {
    try {
      const apiRecipes = await axios.get(
        `https://api.guildwars2.com/v2/account/recipes?access_token=${apiKey}`
      );
      return apiRecipes.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access recipes.");
    }
  };

  const fetchBank = async () => {
    try {
      const apiBank = await axios.get(
        `https://api.guildwars2.com/v2/account/bank?access_token=${apiKey}`
      );
      return apiBank.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access bank.");
    }
  };

  const fetchMaterialStorage = async () => {
    try {
      const apiMats = await axios.get(
        `https://api.guildwars2.com/v2/account/materials?access_token=${apiKey}`
      );
      return apiMats.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access material storage.");
    }
  };

  const fetchSharedStorage = async () => {
    try {
      const apiSharedInv = await axios.get(
        `https://api.guildwars2.com/v2/account/inventory?access_token=${apiKey}`
      );
      return apiSharedInv.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access shared inventory.");
    }
  };

  const fetchWallet = async () => {
    try {
      const apiWallet = await axios.get(
        `https://api.guildwars2.com/v2/account/wallet?access_token=${apiKey}`
      );
      return apiWallet.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access wallet.");
    }
  };

  const fetchCharacters = async () => {
    try {
      const apiChars = await axios.get(
        `https://api.guildwars2.com/v2/characters?access_token=${apiKey}`
      );
      return apiChars.data;
    } catch (e) {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access characters.");
    }
  };

  const fetchCharacterInventoryBags = async (character) => {
    try {
      const apiCharInvBags =
        await axios.get(`  https://api.guildwars2.com/v2/characters/${character}/inventory?access_token=${apiKey}
      `);
      return apiCharInvBags.data;
      // you get an array of bags //
    } catch {
      setRenderGeneral(false);
      setErrorMessage("Invalid API: cannot access character inventory.");
    }
  };

  //this func arranges all inventories from all characters and returns one array with all total items//
  const getAllInvItems = (arrayOfBagArrays) => {
    let allBags = [];
    let arrOfInvs = [];
    let allInvSlots = [];
    //this removes one level of nesting: takes each individual bag and pushes it into a new array so they are on the same lvl
    arrayOfBagArrays.forEach((bagArr) => {
      bagArr.map((bag) => allBags.push(bag));
    });
    //filters out bags that are empty
    allBags = allBags.filter((bag) => bag !== null);
    //removes one more lvl of nesting: takes each bag slot and pushes it into a new array so all slots are in same array (like one single giant bag)
    allBags.map((bag) => arrOfInvs.push(bag.inventory));
    arrOfInvs.map((inv) => inv.map((item) => allInvSlots.push(item)));
    //returns all inventory slots that are not empty
    return allInvSlots.filter((slot) => slot !== null);
  };

  //this funtion manages all inventory, bank, storage, etc. and sets them all together under useState allItems
  const groupCharacterBags = (
    characters,
    bankMats,
    storageMats,
    sharedMats,
    walletMats
  ) => {
    let characterInvBags = [];
    //for every character in the account, fetch respective array of inventory bags
    characters.map(async (character) => {
      const res = await fetchCharacterInventoryBags(character);
      characterInvBags.push(res.bags);
      //checks to see length of array of bags is equal to amount of characters. This ensures useState does not run before previous fetches are completed
      if (characters.length === characterInvBags.length) {
        const allInvItems = getAllInvItems(characterInvBags);
        setAllItems([
          ...allInvItems,
          ...bankMats,
          ...storageMats,
          ...sharedMats,
          ...walletMats,
        ]);
        return allInvItems;
      }
    });
  };

  //this function is triggered by user submit: starts all fetch requests, sets display to loading, sets unprocessed user information states
  const submitAPI = async (e) => {
    e.preventDefault();
    setRenderGeneral(true);
    const apiBank = await fetchBank();
    const bankMats = apiBank.filter((slot) => slot !== null);
    const storageMats = await fetchMaterialStorage();
    const apisharedMats = await fetchSharedStorage();
    const apiwallet = await fetchWallet();
    const walletMats = apiwallet.map((currency) => {
      return { id: currency.id, count: currency.value };
    });
    const sharedMats = apisharedMats.filter((slot) => slot !== null);
    const characters = await fetchCharacters();
    await groupCharacterBags(
      characters,
      bankMats,
      storageMats,
      sharedMats,
      walletMats
    );
    const achievs = await fetchAchievs();
    setAllAchievs(achievs);
    const recipes = await fetchRecipes();
    setAllRecipes(recipes);
    const apiArmory = await fetchLegendaryArmory();
    setLegArmory(apiArmory);
  };

  //this function resets all info and display states
  const resetAPI = (e) => {
    e.preventDefault();
    setRenderGeneral(false);
    setAllAchievs([]);
    setAllRecipes([]);
    setAllItems([]);
    setRenderAchievs("loading");
    setRenderRecipes("loading");
    setRenderMats("loading");
    setErrorMessage(false);
  };

  return (
    <div className="api-container">
      <form className="api" onSubmit={(e) => submitAPI(e)}>
        <input
          className="api-input"
          type="text"
          value={apiKey}
          placeholder="Add your API here..."
          onChange={(e) => setApiKey(e.target.value)}
          disabled={renderGeneral}
          required={true}
        />
        {!renderGeneral ? (
          <button type="submit">
            <IoAddCircleSharp className="api-btn" />
          </button>
        ) : (
          <button className="api-btn" onClick={(e) => resetAPI(e)}>
            <IoMdRefreshCircle />
          </button>
        )}
      </form>
    </div>
  );
}
